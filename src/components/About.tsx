import { Code2, Puzzle, BookOpen, Users, GraduationCap, MapPin, Mail, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'I write maintainable, scalable and efficient code.',
  },
  {
    icon: Puzzle,
    title: 'Problem Solver',
    desc: 'I love solving DSA problems and building real-world solutions.',
  },
  {
    icon: BookOpen,
    title: 'Fast Learner',
    desc: 'I enjoy learning new technologies and improving everyday.',
  },
  {
    icon: Users,
    title: 'Team Player',
    desc: 'I love collaborating and building amazing things with others.',
  },
]

export default function About() {
  return (
    <section id="about" className="max-w-400 mx-auto px-6 py-32">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" /> About Me
        </span>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Who am I?</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              I'm a final year Computer Science student who loves building things that live on
              the internet. My focus is Full Stack Development with Node.js, Express, React, MongoDB
              and creating clean, efficient APIs.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              I enjoy turning complex problems into simple, beautiful and intuitive solutions.
            </p>

            <ul className="space-y-3 text-sm text-white/70 mb-8">
              <li className="flex items-center gap-3">
                <GraduationCap size={16} className="text-violet-400" /> B.Tech CSE | 2027
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-violet-400" /> India
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-violet-400" /> omcjoshi@gmail.com
              </li>
            </ul>

            <button
            onClick={()=>document.getElementById("skills")?.scrollIntoView({behavior:'smooth'})}
            className="group inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3 font-semibold transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10">
              Know more about me
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            </div>
          <div className="grid grid-cols-2 gap-5">
            {cards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-violet-300" />
                </div>
                <h3 className="font-semibold text-white mb-1.5">{title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
