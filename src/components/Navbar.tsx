import resume from "../assets/om_resume.pdf";
const Navbar = () => {
  return (
        <nav className="
    fixed
    top-0
    left-0
    right-0
    z-50
    flex
    items-center
    justify-between
    px-12
    py-2
    backdrop-blur-xl
    rounded-3xl
  ">
            <div className='text-2xl font-bold'>
                Portfolio
            </div>

            <div className='flex gap-8'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a
                    href={resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    View Resume
                </a>
                
                <a
                href={resume}
                download
                >
                Download Resume
                </a>
            </div>
        </nav>
    
  )
}

export default Navbar