type LogoMarkProps = {
  className?: string
  priority?: boolean
}

export default function LogoMark({ className = 'h-24 w-auto sm:h-28', priority: _priority = false }: LogoMarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Monika Grinds Academy"
      className={`block object-contain ${className}`}
    />
  )
}
