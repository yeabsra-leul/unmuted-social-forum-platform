import { LucideProps, MessageSquare, User } from "lucide-react";

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 497 497">
      <g>
        <path
          d="m392 30c-71.75 0-71.75-30-143.5-30l128.5 497h30c33.137 0 60-26.863 60-60v-228.526c18.555-18.938 30-44.867 30-73.474 0-57.99-47.01-105-105-105z"
          fill="#c87044"
        />
        <path
          d="m437 437-45-377c-41.895 0-63.904-18.405-83.322-34.644-16.942-14.167-30.323-25.356-60.178-25.356-71.75 0-71.75 30-143.5 30-57.99 0-105 47.01-105 105 0 28.607 11.445 54.537 30 73.474v228.526c0 33.137 26.863 60 60 60h287c33.137 0 60-26.863 60-60z"
          fill="#db905a"
        />
        <path
          d="m392 60-15 407h30c16.542 0 30-13.458 30-30v-228.526c0-7.851 3.077-15.388 8.571-20.996 13.819-14.103 21.429-32.74 21.429-52.478 0-41.355-33.645-75-75-75z"
          fill="#ffd185"
        />
        <path
          d="m407 437v-228.526c0-15.796 6.088-30.708 17.143-41.991 8.291-8.462 12.857-19.643 12.857-31.483 0-41.355-20.187-75-45-75-41.895 0-63.904-9.203-83.322-17.322-16.942-7.083-30.323-12.678-60.178-12.678-29.856 0-43.236 5.595-60.177 12.678-19.419 8.119-41.429 17.322-83.323 17.322-41.355 0-75 33.645-75 75 0 19.738 7.61 38.375 21.429 52.479 5.494 5.607 8.571 13.145 8.571 20.995v228.526c0 16.542 13.458 30 30 30h287c16.542 0 30-13.458 30-30z"
          fill="#ffe8c2"
        />
        <g fill="#ffd185">
          <circle cx="392" cy="135" r="7.5" />
          <circle cx="362" cy="165" r="7.5" />
          <circle cx="105" cy="377" r="7.5" />
          <circle cx="135" cy="407" r="7.5" />
          <circle cx="105" cy="135" r="7.5" />
        </g>
      </g>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  ),

  github: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        d="M12 1.5c-6.63 0-12 5.37-12 12 0 5.303 3.438 9.8 8.207 11.4.6.11.793-.26.793-.577v-2.26c-3.338.725-4.043-1.432-4.043-1.432-.547-1.39-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.806 1.305 3.49.998.11-.77.418-1.305.761-1.605-2.664-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.237-3.225-.124-.304-.536-1.527.117-3.178 0 0 1.007-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.292-1.553 3.298-1.23 3.298-1.23.654 1.651.242 2.874.12 3.178.764.844 1.234 1.915 1.234 3.225 0 4.61-2.806 5.622-5.475 5.92.429.372.813 1.096.813 2.208v3.282c0 .318.193.693.8.576C18.562 23.3 22 18.8 22 13.5 22 6.87 16.63 1.5 10.995 1.5z"
        fill="#fff"
        width="24"
        height="24"
      />
    </svg>
  ),

  bunaLogo: (props: LucideProps) => (
    <svg
      id="logo-89"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="ccustom"
        d="M39.9449 21.4998H32.8003C26.5594 21.4998 21.5003 26.559 21.5003 32.7998V39.9444C31.3502 39.214 39.2145 31.3497 39.9449 21.4998Z"
        fill="#775732"
      ></path>
      <path
        className="ccustom"
        d="M18.5003 39.9444V32.7998C18.5003 26.559 13.4411 21.4998 7.20026 21.4998H0.0556641C0.785998 31.3497 8.65036 39.214 18.5003 39.9444Z"
        fill="#775732"
      ></path>
      <path
        className="ccustom"
        d="M39.9449 18.4998C39.2145 8.64987 31.3502 0.78551 21.5003 0.0551758V7.19977C21.5003 13.4406 26.5594 18.4998 32.8003 18.4998H39.9449Z"
        fill="#775732"
      ></path>
      <path
        className="ccustom"
        d="M18.5003 0.0551758C8.65036 0.78551 0.785998 8.64987 0.0556641 18.4998H7.20026C13.4411 18.4998 18.5003 13.4406 18.5003 7.19977V0.0551758Z"
        fill="#775732"
      ></path>
      <path
        className="ccustom"
        d="M13.583 19.9998C16.3555 18.6145 18.615 16.355 20.0002 13.5825C21.3855 16.355 23.6449 18.6145 26.4175 19.9998C23.6449 21.385 21.3855 23.6445 20.0002 26.417C18.615 23.6445 16.3555 21.385 13.583 19.9998Z"
        fill="#CA9352"
      ></path>
    </svg>
  ),

  waveLogo: (props: LucideProps) => (
    <svg
      id="logo-71"
      width="43"
      height="48"
      viewBox="0 0 44 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.2 8.04745C23.2 6.96404 22.9478 5.89551 22.4632 4.92647C22.0444 4.08884 21.7985 3.17549 21.7401 2.24081L21.6 0L21.46 2.24073C21.4015 3.17542 21.1556 4.0888 20.7368 4.92644C20.2523 5.8955 20 6.96406 20 8.04749V39.9525C20 41.0359 20.2523 42.1045 20.7368 43.0736C21.1556 43.9112 21.4015 44.8246 21.46 45.7593L21.6 48L21.7401 45.7592C21.7985 44.8245 22.0444 43.9112 22.4632 43.0735C22.9478 42.1045 23.2 41.036 23.2 39.9525V8.04745ZM14.4632 8.12647C14.9478 9.09551 15.2 10.1641 15.2 11.2475V36.7525C15.2 37.836 14.9478 38.9045 14.4632 39.8736C14.0444 40.7112 13.7985 41.6246 13.74 42.5592L13.6 44.8L13.46 42.5592C13.4015 41.6246 13.1556 40.7112 12.7368 39.8736C12.2522 38.9045 12 37.836 12 36.7525V11.2475C12 10.1641 12.2522 9.09551 12.7368 8.12647C13.1556 7.28883 13.4015 6.37547 13.46 5.44078L13.6 3.20001L13.74 5.44078C13.7985 6.37547 14.0444 7.28883 14.4632 8.12647ZM11.2 14.4475C11.2 13.364 10.9478 12.2955 10.4632 11.3265C10.0444 10.4888 9.79847 9.57545 9.74005 8.64076L9.6 6.39999L9.45995 8.64076C9.40153 9.57545 9.15559 10.4888 8.73677 11.3265C8.25225 12.2955 8 13.364 8 14.4475V33.5525C8 34.6359 8.25225 35.7045 8.73677 36.6735C9.15559 37.5112 9.40153 38.4245 9.45995 39.3592L9.6 41.6L9.74005 39.3592C9.79847 38.4245 10.0444 37.5112 10.4632 36.6735C10.9478 35.7045 11.2 34.6359 11.2 33.5525V14.4475ZM6.46323 17.7264C6.94775 18.6955 7.2 19.764 7.2 20.8475V27.1525C7.2 28.2359 6.94775 29.3045 6.46323 30.2735C6.04441 31.1112 5.79847 32.0245 5.74005 32.9592L5.6 35.2L5.45995 32.9592C5.40153 32.0245 5.15559 31.1112 4.73677 30.2735C4.25225 29.3045 4 28.2359 4 27.1525V20.8475C4 19.764 4.25225 18.6955 4.73677 17.7264C5.15559 16.8888 5.40153 15.9754 5.45995 15.0408L5.6 12.8L5.74005 15.0408C5.79847 15.9754 6.04441 16.8888 6.46323 17.7264ZM3.19984 24L3.2 24.0475V23.9525L3.19984 24ZM0 24.0475L0.000161422 24C0.00741925 25.0672 0.259327 26.1187 0.736771 27.0735C1.15559 27.9112 1.40153 28.8245 1.45995 29.7592L1.6 32L1.74005 29.7592C1.79847 28.8245 2.04441 27.9112 2.46323 27.0735C2.94067 26.1187 3.19258 25.0672 3.19984 24C3.19258 22.9328 2.94067 21.8813 2.46323 20.9265C2.04441 20.0888 1.79847 19.1755 1.74005 18.2408L1.6 16L1.45995 18.2408C1.40153 19.1755 1.15559 20.0888 0.736771 20.9265C0.259327 21.8813 0.00741927 22.9328 0.000161422 24L0 23.9525V24.0475ZM18.4632 4.92646C18.9478 5.8955 19.2 6.96405 19.2 8.04747V39.9525C19.2 41.036 18.9478 42.1045 18.4632 43.0735C18.0444 43.9112 17.7985 44.8245 17.74 45.7592L17.6 48L17.46 45.7592C17.4015 44.8245 17.1556 43.9112 16.7368 43.0735C16.2522 42.1045 16 41.036 16 39.9525V8.04747C16 6.96405 16.2522 5.8955 16.7368 4.92646C17.1556 4.08882 17.4015 3.17545 17.46 2.24077L17.6 0L17.74 2.24077C17.7985 3.17545 18.0444 4.08882 18.4632 4.92646ZM26.4632 4.92646C26.9478 5.8955 27.2 6.96405 27.2 8.04747V39.9525C27.2 41.036 26.9478 42.1045 26.4632 43.0735C26.0444 43.9112 25.7985 44.8245 25.74 45.7592L25.6 48L25.46 45.7592C25.4015 44.8245 25.1556 43.9112 24.7368 43.0735C24.2522 42.1045 24 41.036 24 39.9525V8.04747C24 6.96405 24.2522 5.8955 24.7368 4.92646C25.1556 4.08882 25.4015 3.17545 25.46 2.24077L25.6 0L25.74 2.24077C25.7985 3.17545 26.0444 4.08882 26.4632 4.92646ZM31.2 11.2475C31.2 10.1641 30.9478 9.09551 30.4632 8.12647C30.0444 7.28883 29.7985 6.37547 29.74 5.44078L29.6 3.20001L29.46 5.44078C29.4015 6.37547 29.1556 7.28883 28.7368 8.12647C28.2522 9.09551 28 10.1641 28 11.2475V36.7525C28 37.836 28.2522 38.9045 28.7368 39.8736C29.1556 40.7112 29.4015 41.6246 29.46 42.5592L29.6 44.8L29.74 42.5592C29.7985 41.6246 30.0444 40.7112 30.4632 39.8736C30.9478 38.9045 31.2 37.836 31.2 36.7525V11.2475ZM34.4632 11.3265C34.9478 12.2955 35.2 13.364 35.2 14.4475V33.5525C35.2 34.6359 34.9478 35.7045 34.4632 36.6735C34.0444 37.5112 33.7985 38.4245 33.74 39.3592L33.6 41.6L33.46 39.3592C33.4015 38.4245 33.1556 37.5112 32.7368 36.6735C32.2523 35.7045 32 34.6359 32 33.5525V14.4475C32 13.364 32.2523 12.2955 32.7368 11.3265C33.1556 10.4888 33.4015 9.57545 33.46 8.64076L33.6 6.39999L33.74 8.64076C33.7985 9.57545 34.0444 10.4888 34.4632 11.3265ZM39.2 20.8475C39.2 19.764 38.9478 18.6955 38.4632 17.7264C38.0444 16.8888 37.7985 15.9754 37.74 15.0408L37.6 12.8L37.46 15.0408C37.4015 15.9754 37.1556 16.8888 36.7368 17.7264C36.2523 18.6955 36 19.764 36 20.8475V27.1525C36 28.2359 36.2523 29.3045 36.7368 30.2735C37.1556 31.1112 37.4015 32.0245 37.46 32.9592L37.6 35.2L37.74 32.9592C37.7985 32.0245 38.0444 31.1112 38.4632 30.2735C38.9478 29.3045 39.2 28.2359 39.2 27.1525V20.8475ZM43.1998 24C43.1999 24.0158 43.2 24.0316 43.2 24.0475V23.9525C43.2 23.9684 43.1999 23.9842 43.1998 24ZM40.0002 24C40.0074 25.0672 40.2593 26.1187 40.7368 27.0735C41.1556 27.9112 41.4015 28.8245 41.46 29.7592L41.6 32L41.74 29.7592C41.7985 28.8245 42.0444 27.9112 42.4632 27.0735C42.9407 26.1187 43.1926 25.0672 43.1998 24C43.1926 22.9328 42.9407 21.8813 42.4632 20.9265C42.0444 20.0888 41.7985 19.1755 41.74 18.2408L41.6 16L41.46 18.2408C41.4015 19.1755 41.1556 20.0888 40.7368 20.9265C40.2593 21.8813 40.0074 22.9328 40.0002 24ZM40.0002 24C40.0001 23.9842 40 23.9684 40 23.9525V24.0475C40 24.0316 40.0001 24.0158 40.0002 24Z"
        className="ccustom"
        fill="#394149"
      ></path>{" "}
    </svg>
  ),

  commentReply: MessageSquare,
};
