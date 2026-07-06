import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    // <div className="hidden sm:mb-8 sm:flex sm:justify-center m-30">
    //     <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
    //       Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-400"><span aria-hidden="true" className="absolute inset-0">
    //         </span>Read more <span aria-hidden="true">&rarr;</span></a>
    //     </div>
    // </div>

    <section id="home" className="min-h-[85vh] flex items-center justify-between px-20">
        <div>
        <div className="px-30">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-sm font-medium text-violet-200">
            <span>👋</span>
            <span>Hello, I'm</span>
        </div>
        </div>
        <div className="flex-1 font-semibold text-xl px-30">
            
            <div>
                <h1 className="
                    mt-6
                    text-7xl
                    font-bold
                    tracking-tight
                    leading-none
                ">
                    <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-white bg-clip-text text-transparent">
                    Om{" "}Joshi
                    </span>
                </h1>
            </div>
            <div className="text-2xl px-2 py-4">
                Backend Engineer & Full Stack Developer
            </div>
            
        </div>
        <div className="px-32 ">
            <p className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-slate-400
            ">
            I build scalable backend systems, real-time applications and
            modern digital experiences with a focus on clean architecture,
            performance, and user-centric design.
            </p>
        </div>

        <div className="flex gap-4 px-32 py-8">
            <button
            className="rounded-xl bg-violet-600 px-6 py-3 font-semibold transition-all duration-300 hover:bg-violet-500 hover:scale-105 shadow-lg
            shadow-violet-500/20
            "
            onClick={()=>
                document.getElementById("projects")?.scrollIntoView({behavior:'smooth'})
            }
            >
            View Projects →
            </button>
            <button
            className="rounded-xl border border-slate-700 bg-white/5 backdrop-blur-md px-6 py-3 font-semibold transition-all duration-300 hover:border-violet-500
            hover:bg-violet-500/10
            "
            onClick={() =>
                document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            >
            Contact Me
            </button>
        </div>

        <div className="px-32">
            <div className="flex items-center gap-6 mt-10">

            <p className="text-slate-400 font-medium">
                Connect with me
            </p>

            <a
                href="https://github.com/OmJoshi02"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
            >
                <FaGithub size={20} />
            </a>

            <a
                href="https://www.linkedin.com/in/om-joshi-316a07282/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
            >
                <FaLinkedin size={20} />
            </a>

            <a
                href="https://x.com/itz_abhi_5"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
            >
                <FaXTwitter size={18} />
            </a>

            <a
                href="mailto:omcjoshi@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
            >
                <MdEmail size={22} />
            </a>

            </div>
        </div>
    </div>

    <div>
        <div className="relative">

            <div
                className="
                w-[420px]
                h-[420px]
                rounded-full
                bg-violet-500/20
                blur-3xl
                absolute
                "
            />

            <img
                src={profile}
                alt="Om Joshi"
                className="
                relative
                w-[350px]
                h-[350px]
                rounded-full
                object-cover
                border-4
                border-violet-500
                "
            />

        </div>
    </div>
    </section>
  );
};

export default Hero;