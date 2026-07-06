import { Atom, GitBranch, Box, Database, Leaf } from "lucide-react";

const skills = [
  { name: "JavaScript", bg: "bg-yellow-400/15", text: "text-yellow-300", label: "JS" },
  { name: "TypeScript", bg: "bg-blue-500/15", text: "text-blue-300", label: "TS" },
  { name: "Python", bg: "bg-blue-500/15", text: "text-yellow-300", label: "PY" },
  { name: "Java", bg: "bg-red-500/15", text: "text-red-300", label: "J" },
  { name: "Node.js", bg: "bg-green-500/15", text: "text-green-300", label: "N" },
  { name: "Express.js", bg: "bg-white/10", text: "text-white", label: "EX" },
  { name: "MongoDB", bg: "bg-green-600/15", text: "text-green-400", icon: Leaf },
  { name: "PostgreSQL", bg: "bg-sky-500/15", text: "text-sky-300", icon: Database },
  { name: "React", bg: "bg-cyan-400/15", text: "text-cyan-300", icon: Atom },
  { name: "Git", bg: "bg-orange-500/15", text: "text-orange-300", icon: GitBranch },
  { name: "Docker", bg: "bg-blue-400/15", text: "text-blue-300", icon: Box },
];

const loopSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className="max-w-400 mx-auto px-6 py-16 overflow-hidden">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300 mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        Skills
      </span>

      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
        Technologies I work with
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-marquee w-max">
          {loopSkills.map(({ name, bg, text, label, icon: Icon }, index) => (
            <div
              key={index}
              className="mx-3 w-28 flex-shrink-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] py-6 hover:border-violet-400/40 transition"
            >
              <div
                className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center font-bold ${text}`}
              >
                {Icon ? <Icon size={20} /> : label}
              </div>

              <span className="text-xs text-white/60 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}