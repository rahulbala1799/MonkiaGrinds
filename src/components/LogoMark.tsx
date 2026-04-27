import Image from 'next/image'

type LogoMarkProps = {
  className?: string
  priority?: boolean
}

export default function LogoMark({ className = 'h-24 w-auto sm:h-28', priority = false }: LogoMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt="Monika Grinds Academy"
      width={2362}
      height={945}
      className={`object-contain ${className}`}
      priority={priority}
    />
  )
}
