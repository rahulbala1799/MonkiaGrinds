import type { ReactNode } from 'react'

/** Fresh HTML + assets so the contact page is less likely to serve an old client bundle. */
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
