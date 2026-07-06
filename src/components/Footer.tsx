import { ArrowUp, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>
          <span className="font-bold text-white">Om Joshi</span> &nbsp;© 2026 Om Joshi. All rights
          reserved.
        </p>

        <a
          href="#home"
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/15 text-white hover:bg-white/5 transition"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </a>

        
      </div>
    </footer>
  )
}
