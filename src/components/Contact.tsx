import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const contacts = [
  { icon: Mail, label: 'omcjoshi@gmail.com', sub: 'Drop me an email', href: 'mailto:omcjoshi@gmail.com' },
  { icon: FaLinkedin, label: 'LinkedIn', sub: "Let's connect", href: 'https://www.linkedin.com/in/om-joshi-316a07282/' },
  { icon: FaGithub, label: 'Github', sub: 'Check out my work', href: 'https://github.com/OmJoshi02' },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" /> Contact
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Let's work together</h2>
      <p className="text-white/55 max-w-xl mb-10">
        I'm always open to discussing new opportunities and interesting projects.
      </p>

      <div className="grid sm:grid-cols-3 gap-5">
        {contacts.map(({ icon: Icon, label, sub, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-violet-400/40 hover:bg-white/[0.04] transition"
          >
            <div className="w-11 h-11 shrink-0 rounded-xl bg-violet-500/15 flex items-center justify-center">
              <Icon className="w-[18px] h-[18px] text-violet-300" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">{label}</p>
              <p className="text-xs text-white/50">{sub}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
