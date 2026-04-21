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
      width={337}
      height={300}
      className={`object-contain ${className}`}
      priority={priority}
    />
  )
}
