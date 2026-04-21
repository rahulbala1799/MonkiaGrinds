import Image from 'next/image'

type LogoMarkProps = {
  className?: string
  priority?: boolean
}

export default function LogoMark({ className = 'h-9 w-auto sm:h-10', priority = false }: LogoMarkProps) {
  return (
    <Image
      src="/logo.jpeg"
      alt="Monika Grinds Academy"
      width={480}
      height={458}
      className={`object-contain ${className}`}
      priority={priority}
    />
  )
}
