import Image from 'next/image'

type LogoMarkProps = {
  className?: string
  priority?: boolean
}

export default function LogoMark({ className = 'h-9 w-auto sm:h-10', priority = false }: LogoMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt="Monika Grinds Academy"
      width={1774}
      height={887}
      className={`object-contain ${className}`}
      priority={priority}
    />
  )
}
