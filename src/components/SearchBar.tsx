"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/Command'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Prisma, Subreddit } from '@prisma/client'
import { Users } from 'lucide-react'
import debounce from 'lodash.debounce'
import { useOnClickOutside } from '@/hooks/use-on-click-outside'

export const SearchBar = () => {

    const router = useRouter()
    const [input, setInput] = useState('')

    const pathname = usePathname()
    const searchCommandRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(searchCommandRef,() =>setInput(''))

    useEffect(()=>setInput(''), [pathname])
    const request = debounce(async ()=>{
        refetch()
    },300)

    const debounceRequest = useCallback(()=>{
        request()
    },[])

    const {data:searchResult,refetch, isFetched, isFetching } = useQuery({
        queryFn: async ()=>{
            if(!input) return []
            const {data} = await axios.get(`/api/search?q=${input}`) 
            return data as (Subreddit & {
                _count:Prisma.SubredditCountOutputType
            })[]
        },
        queryKey:['search-query'],
        enabled:false
    })
    

  return (
    <Command ref={searchCommandRef} className='relative rounded-lg max-w-lg z-50 overflow-visible'>
        <CommandInput
        isLoading={isFetching}
        className='outline-none border-none focus:border-none focus:outline-none ring-0'
        placeholder='Search communities...'
        value={input}
        onValueChange={(text)=>{
            setInput(text)
            debounceRequest()
        }}
        />
        {input.length > 0 ? (
            <CommandList className='absolute bg-white top-full inset-x-0 shadow rounded-b-md'>
                {isFetched && <CommandEmpty>No result found.</CommandEmpty>}
                {(searchResult?.length ?? 0) > 0 ?(
                    <CommandGroup heading="Communities">
                        {searchResult?.map((subreddit) => (
                            <CommandItem
                            onSelect={(e)=>{
                                router.push(`/r/${e}`)
                                router.refresh()
                            }}
                            key={subreddit.id}
                            value={subreddit.name}
                            >
                                <Users className='mr-2 h-4 w-4'/>
                                <a href={`/r/${subreddit.name}`}>r/{subreddit.name}</a>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                ):null}
            </CommandList>
        ):null}
    </Command>
  )
}
