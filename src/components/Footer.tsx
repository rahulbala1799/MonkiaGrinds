import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg">Monika Grinds</span>
                <span className="font-heading text-xs text-primary-400 block -mt-1">Academy</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Success of Student is our Priority. Expert Maths & Science grinds across all levels of the Irish curriculum.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'About' },
                { href: '/junior-cycle', label: 'Junior Cycle' },
                { href: '/leaving-cert', label: 'Leaving Cert' },
                { href: '/primary-class', label: 'Primary Class' },
                { href: '/ib', label: 'IB' },
                { href: '/counselling', label: 'Counselling' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:0852401266"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                085 240 1266
              </a>
              <a
                href="mailto:monikagrinds@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                monikagrinds@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Monika Grinds Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
