import Image from 'next/image'

type LogoMarkProps = {
  className?: string
  priority?: boolean
}

export default function LogoMark({ className = 'h-12 w-auto sm:h-14', priority = false }: LogoMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt="Monika Grinds Academy"
      width={591}
      height={236}
      className={`object-contain ${className}`}
      priority={priority}
    />
  )
}
