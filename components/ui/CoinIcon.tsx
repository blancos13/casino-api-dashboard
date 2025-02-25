"use client"

interface CoinIconProps {
  chain: string
  size?: number
  className?: string
}

export function CoinIcon({ chain, size = 16, className = '' }: CoinIconProps) {
  const icons = {
    ETH: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA"/>
        <path d="M16.498 4V12.87L23.995 16.22L16.498 4Z" fill="white" fillOpacity="0.602"/>
        <path d="M16.498 4L9 16.22L16.498 12.87V4Z" fill="white"/>
        <path d="M16.498 21.968V27.995L24 17.616L16.498 21.968Z" fill="white" fillOpacity="0.602"/>
        <path d="M16.498 27.995V21.967L9 17.616L16.498 27.995Z" fill="white"/>
        <path d="M16.498 20.573L23.995 16.22L16.498 12.872V20.573Z" fill="white" fillOpacity="0.2"/>
        <path d="M9 16.22L16.498 20.573V12.872L9 16.22Z" fill="white" fillOpacity="0.602"/>
      </svg>
    ),
    BNB: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F3BA2F"/>
        <path d="M12.116 14.404L16 10.52L19.886 14.406L22.146 12.146L16 6L9.856 12.144L12.116 14.404Z" fill="white"/>
        <path d="M6 15.856L8.26 13.596L10.52 15.856L8.26 18.116L6 15.856Z" fill="white"/>
        <path d="M12.116 17.596L16 21.48L19.886 17.594L22.146 19.853L16 26L9.856 19.856L12.116 17.596Z" fill="white"/>
        <path d="M21.48 15.856L23.74 13.596L26 15.856L23.74 18.116L21.48 15.856Z" fill="white"/>
        <path d="M16 13.856L18.26 16.116L16 18.376L13.74 16.116L16 13.856Z" fill="white"/>
      </svg>
    ),
    BTC: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F7931A"/>
        <path d="M23.189 14.02C23.503 11.924 21.906 10.797 19.724 10.045L20.432 7.205L18.704 6.775L18.014 9.54C17.56 9.426 17.093 9.32 16.629 9.215L17.324 6.43L15.596 6L14.888 8.839C14.512 8.753 14.142 8.669 13.784 8.58L13.786 8.571L11.402 7.977L10.942 9.811C10.942 9.811 12.225 10.113 12.196 10.132C12.89 10.308 13.007 10.774 12.985 11.145L12.182 14.368C12.236 14.382 12.306 14.402 12.386 14.434L12.179 14.382L11.056 18.918C10.974 19.139 10.774 19.466 10.295 19.345C10.314 19.371 9.042 19.017 9.042 19.017L8.18 20.972L10.432 21.531C10.85 21.636 11.26 21.747 11.662 21.85L10.947 24.723L12.673 25.153L13.381 22.311C13.852 22.439 14.31 22.558 14.758 22.67L14.053 25.498L15.781 25.928L16.496 23.062C19.441 23.601 21.645 23.381 22.588 20.693C23.346 18.555 22.555 17.347 21.023 16.551C22.146 16.254 22.974 15.484 23.189 14.02Z" fill="white"/>
      </svg>
    ),
    TRX: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#EF0027"/>
        <path d="M21.932 7.6L11.932 9.8L9.332 22L19.332 13.2L21.932 7.6Z" fill="white"/>
        <path d="M19.332 13.2L9.332 22L15.732 15.4L19.332 13.2Z" fill="white" fillOpacity="0.3"/>
        <path d="M15.732 15.4L9.332 22L13.132 16.8L15.732 15.4Z" fill="white" fillOpacity="0.6"/>
      </svg>
    ),
    USDT: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#26A17B"/>
        <path d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117" fill="white"/>
      </svg>
    ),
    USDC: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#2775CA"/>
        <path d="M16 25.6c-5.296 0-9.6-4.304-9.6-9.6S10.704 6.4 16 6.4s9.6 4.304 9.6 9.6-4.304 9.6-9.6 9.6zm4.384-13.056h-1.712c-.24-1.456-1.504-2.56-3.008-2.56-1.696 0-3.072 1.376-3.072 3.072s1.376 3.072 3.072 3.072c1.504 0 2.768-1.104 3.008-2.56h1.712c.24 2.432-1.696 4.48-4.144 4.48-2.304 0-4.16-1.856-4.16-4.16s1.856-4.16 4.16-4.16c2.448 0 4.384 2.048 4.144 4.48z" fill="white"/>
      </svg>
    ),
    DOGE: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#C2A633"/>
        <path d="M13.248 14.61h4.314v2.286h-4.314v4.818h2.721c1.077 0 1.958-.145 2.644-.437.686-.291 1.224-.693 1.615-1.205.39-.513.66-1.118.81-1.816.149-.698.224-1.466.224-2.304v-.437c0-.817-.075-1.575-.224-2.273-.15-.698-.42-1.303-.81-1.816-.391-.512-.93-.91-1.615-1.194-.686-.284-1.567-.426-2.644-.426h-2.721v4.804zm-2.752 2.286H9V14.61h1.496V9h6.169c1.484 0 2.72.187 3.708.56.988.373 1.772.89 2.351 1.55.58.662.992 1.445 1.237 2.35.244.905.366 1.892.366 2.962v.437c0 1.07-.122 2.057-.366 2.962-.245.905-.657 1.684-1.237 2.339-.579.654-1.363 1.167-2.351 1.54-.988.372-2.224.559-3.708.559h-6.169v-5.673z" fill="white"/>
      </svg>
    ),
    LTC: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#345D9D"/>
        <path d="M10.427 19.214L9 19.768l.688-2.759 1.444-.58L13.213 8h5.129l-1.519 6.196 1.41-.571-.68 2.75-1.427.571-.848 3.483H23L22.127 24H9.252z" fill="white"/>
      </svg>
    ),
    XMR: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#F60"/>
        <path d="M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 01-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 01-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM13.97 20.53l2.002 2.003 2.002-2.002v3.821h5.9a10.9 10.9 0 01-9.9 6.413c-4.014 0-7.518-2.198-9.373-5.443l-.527-.97h5.896V20.53z" fill="white"/>
      </svg>
    ),
    TON: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#0088CC"/>
        <path d="M22.9866 9.45337L21.4933 20.7467C21.4133 21.3067 21.0666 21.44 20.5866 21.1734L16.5333 18.1867L14.5599 20.08C14.4666 20.1734 14.3866 20.2534 14.2133 20.2534L14.3466 16.1334L20.8533 10.2134C21.0133 10.0667 20.8133 9.98671 20.5999 10.1334L12.5333 15.2267L8.53325 13.9467C7.98658 13.7867 7.97325 13.3867 8.63992 13.12L22.1866 8.45337C22.6399 8.29337 23.0799 8.58671 22.9866 9.45337Z" fill="white"/>
      </svg>
    ),
    POL: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#8247E5"/>
        <path d="M21.053 12.238C20.751 12.056 20.379 12.056 20.039 12.238L17.023 14.088L14.916 15.334L11.937 17.184C11.635 17.366 11.263 17.366 10.923 17.184L8.558 15.807C8.256 15.625 8.047 15.297 8.047 14.933V12.253C8.047 11.889 8.219 11.561 8.558 11.379L10.923 10.039C11.225 9.857 11.597 9.857 11.937 10.039L14.302 11.416C14.604 11.598 14.813 11.926 14.813 12.29V14.14L16.92 12.894V11.007C16.92 10.643 16.748 10.315 16.409 10.133L11.974 7.57C11.672 7.388 11.3 7.388 10.96 7.57L6.451 10.133C6.112 10.315 5.94 10.643 5.94 11.007V16.179C5.94 16.543 6.112 16.871 6.451 17.053L10.923 19.616C11.225 19.798 11.597 19.798 11.937 19.616L14.916 17.803L17.023 16.52L20.002 14.707C20.304 14.525 20.676 14.525 21.016 14.707L23.381 16.047C23.683 16.229 23.892 16.557 23.892 16.921V19.601C23.892 19.965 23.72 20.293 23.381 20.475L21.016 21.852C20.714 22.034 20.342 22.034 20.002 21.852L17.637 20.475C17.335 20.293 17.126 19.965 17.126 19.601V17.788L15.019 19.034V20.884C15.019 21.248 15.191 21.576 15.53 21.758L20.002 24.321C20.304 24.503 20.676 24.503 21.016 24.321L25.488 21.758C25.79 21.576 25.999 21.248 25.999 20.884V15.712C25.999 15.348 25.827 15.02 25.488 14.838L21.053 12.238Z" fill="white"/>
      </svg>
    ),
    BCH: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#8DC351"/>
        <path d="M21.207 10.534c-.776-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.786 2.74c-.45.128-.91.27-1.368.41l-.79-2.758-1.711.49.805 2.813c-.367.114-.728.224-1.085.326l-.003-.01-2.362.677.525 1.83s1.258-.387 1.243-.358c.694-.199 1.035.139 1.2.468l.92 3.204c.047-.013.11-.029.184-.04l-.181.052 1.287 4.49c.032.227.004.612-.481.752.027.013-1.246.356-1.246.356l.247 2.143 2.228-.64c.415-.117.824-.227 1.226-.34l.817 2.845 1.71-.49-.807-2.815a65.74 65.74 0 001.372-.38l.802 2.803 1.713-.491-.814-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.724-2.912-3.471-2.836.848-.79 1.213-1.858.642-3.3zm-.65 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.081-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.514 2.857l-.98-3.419c.966-.277 3.915-1.455 4.494.563z" fill="white"/>
      </svg>
    ),
    SHIB: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#E84142"/>
        <path d="M19.8 12.952c-.76-.456-1.72-.608-2.6-.608h-4.4v8.512h4.4c.88 0 1.84-.152 2.6-.608.92-.532 1.4-1.52 1.4-2.508v-2.28c0-.988-.48-1.976-1.4-2.508zm-1.2 4.788c0 .456-.28.836-.72.988-.32.114-.68.152-1.04.152h-2.04v-4.56h2.04c.36 0 .72.038 1.04.152.44.152.72.532.72.988v2.28z" fill="white"/>
      </svg>
    ),
    SOL: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#00FFA3"/>
        <path d="M10.5 20.5L13 18H22L24.5 15.5L22 13H13L10.5 15.5M10.5 13L13 10.5H22L24.5 8L22 5.5H13L10.5 8M10.5 28L13 25.5H22L24.5 23L22 20.5H13L10.5 23" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    NOT: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#0088CC"/>
        <path d="M22.9866 9.45337L21.4933 20.7467C21.4133 21.3067 21.0666 21.44 20.5866 21.1734L16.5333 18.1867L14.5599 20.08C14.4666 20.1734 14.3866 20.2534 14.2133 20.2534L14.3466 16.1334L20.8533 10.2134C21.0133 10.0667 20.8133 9.98671 20.5999 10.1334L12.5333 15.2267L8.53325 13.9467C7.98658 13.7867 7.97325 13.3867 8.63992 13.12L22.1866 8.45337C22.6399 8.29337 23.0799 8.58671 22.9866 9.45337Z" fill="white"/>
      </svg>
    ),
    DOGS: (
      <svg viewBox="0 0 32 32" fill="none" className={className}>
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#0088CC"/>
        <path d="M22.9866 9.45337L21.4933 20.7467C21.4133 21.3067 21.0666 21.44 20.5866 21.1734L16.5333 18.1867L14.5599 20.08C14.4666 20.1734 14.3866 20.2534 14.2133 20.2534L14.3466 16.1334L20.8533 10.2134C21.0133 10.0667 20.8133 9.98671 20.5999 10.1334L12.5333 15.2267L8.53325 13.9467C7.98658 13.7867 7.97325 13.3867 8.63992 13.12L22.1866 8.45337C22.6399 8.29337 23.0799 8.58671 22.9866 9.45337Z" fill="white"/>
      </svg>
    )
  }

  return (
    <div style={{ width: size, height: size }}>
      {icons[chain as keyof typeof icons] || null}
    </div>
  )
} 