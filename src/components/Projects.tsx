import { Radio, Calendar, ExternalLink, ArrowRight, Camera } from 'lucide-react'

const projects = [
  {
    icon: Radio,
    iconBg: 'from-violet-600 to-indigo-500',
    title: 'PollForge',
    desc: 'Real-time polling platform with live results, authentication and analytics.',
    tags: ['Node.js', 'Socket.io', 'MongoDB', 'JWT'],
    link: 'https://pollforge-alpha.vercel.app/'
  },
  {
    icon: Calendar,
    iconBg: 'from-fuchsia-600 to-purple-500',
    title: 'Event Manager',
    desc: 'Online platform for managing events, registrations and payments.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io'],
    link : 'https://event-manager-b2ru6itfh-om-chandrakant-joshis-projects.vercel.app/',
  },
  {
    icon: Camera,
    iconBg: 'from-sky-600 to-blue-500',
    title: 'Photography Portfolio',
    desc: 'Photography portfolio with reactJS and Tailwind CSS',
    tags: ['React', 'Tailwind'],
    link: 'https://my-photography-portfolio-khaki.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-400 mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" /> Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Some things I've built</h2>
        </div>
        <a href="#projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 hover:text-violet-200">
          View all projects <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(({ icon: Icon, iconBg, title, desc, tags, link }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 overflow-hidden hover:border-violet-400/30 transition"
          >
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            <div className="flex items-start justify-between mb-5">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${iconBg} flex items-center justify-center`}>
                <Icon size={20} className="text-white" />
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <h3 className="font-semibold text-lg text-white mb-2">{title}</h3>
            <p className="text-sm text-white/55 leading-relaxed mb-6">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full bg-violet-500/10 text-violet-300 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
