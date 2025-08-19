import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import ScrollProgressBar from './Components/ScrollProgressBar';
import { Typewriter } from 'react-simple-typewriter';


function App() {
  return (
    <div className="bg-white text-gray-900">
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white text-[var(--blue-main)] flex justify-between p-4 shadow z-10">
        <a href="#home" className="font-bold text-2xl leading-none">
          Victoria Leliveld
        </a>
        <div className="space-x-6 mr-8">
          <a href="#home" className="hover:text-[var(--blue-main)] font-bold">Home</a>
          <a href="#projects" className="hover:text-[var(--blue-main)] font-bold">Projects</a>
          <a href="#about" className="hover:text-[var(--blue-main)] font-bold">About</a>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_150%_100%,white_35%,theme('colors.blue.300'))] relative">
      <p className="mb-12"></p>
        <h1 className="font-bold text-7xl mb-7 text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] via-[#3C79AF] to-[#1A4D8F] animate-gradient">
            Hi, I'm Victoria Leliveld
         </h1>
        <p className="text-2xl mb-6">
          I'm a <span className="font-bold text-[var(--blue-main)]">
            <Typewriter
            words={['Computer Science Student', 'Psychology Student', 'UX Student', 'Problem Solver', 'Creative Thinker', 'Collaborator']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </p>
        <div className="flex space-x-6 mb-6 mt-3">
          <a href="https://www.linkedin.com/in/victorialeliveld/" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-main)] text-6xl hover:text-[#6CA0DC]">
            <FaLinkedin />
          </a>
          <a href="https://github.com/VictoriaLeliveld" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-main)] text-6xl hover:text-[#6CA0DC]">
            <FaGithub />
          </a>
        </div>
         <div className="flex space-x-6 ">
          <a
            href="#projects"
            className="border border-[var(--blue-main)] bg-[var(--blue-main)] text-white px-6 py-3 rounded text-xl transition-transform duration-200 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="border border-[var(--blue-main)] bg-[var(--blue-main)] text-white px-6 py-3 rounded text-xl transition-transform duration-200 transform hover:scale-105"
          >
            About Me
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-[rgba(255,255,255,0)] to-blue-50"></div>
      </section>


      <section id="projects" className="py-20 px-6 bg-blue-50 relative">
        <h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] via-[#3C79AF] to-[#1A4D8F] animate-gradient mb-12"
          style={{ paddingBottom: '4px', lineHeight: '1.1' }}
        >
          Projects
        </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    {/* Project Card */}
    {[
      {
        title: "SetList",
        description: "SetList is a concert companion app designed during a 36-hour UX hackathon, where fans can vote live on the songs they want to hear, creating a more engaging and audience-centered concert experience. Developed using UX principles, the project won the Most Innovative Design award for reimagining audience-artist connections.",
        image: "/SetList.png",
        skills: ["Figma", "Canva", "UX Principles"],
        link: "https://drive.google.com/file/d/1gKn4xc7LDvko32pnJYT59RTfM8W6ZSBn/view?usp=sharing",
      },
      {
        title: "Provinces and Territories Confederation Circuit",
        description: "Provinces and Territories Confederation Circuit is a logic design project that determines the entry order of Canadian provinces and territories into Confederation. It uses binary input and output mappings, simplified using Karnaugh maps and truth tables, and was built and simulated in CircuitVerse for accuracy.",
        image: "/circuit.png",
        skills: ["Logic Design", "Circuit Simulation", "Karnaugh Maps"],
        link: "https://docs.google.com/document/d/1EpSp6lYnRvwA2G_2Mfg_jZfXOudSmiaiqK0N2N4NgvI/edit?usp=sharing",
      },
      {
        title: "MoodNail (ElectronJS App)",
        description: "MoodNail is a desktop app built with HTML, CSS, and JavaScript, powered by ElectronJS. This project enhanced my skills in JavaScript event handling, responsive UI design, and desktop app development. Download and run the app to experience personalized nail color recommendations based on mood, weather, and event.",
        image: "/moodnailapp.png",
        skills: ["ElectronJS", "JavaScript", "HTML", "Event Handling"],
        link: "https://github.com/VictoriaLeliveld/MoodNail",
      },
      {
        title: "UX Team Design Sprint",
        description: "This project is a comprehensive term project practicing design thinking principles. It was done in a focused team of UX Design students with diverse perspectives and skill sets to develop an innovative solution to a complex challenge. Explore our project to witness the power of design thinking in action.",
        image: "/UXclubs.png",
        skills: ["Prototyping", "User Research", "Interaction Design"],
        link: "https://docs.google.com/document/d/1LAVLCpv9U_XeAGFyHe-pHTH27RWfuEpT7G9t4SerjgI/edit?usp=sharing",
      },
      {
        title: "Cat Rescue Digital Platform",
        description: "A multimedia-driven website advocating for cat adoption while showcasing my proficiency in front-end web design and multimedia creation. This project combines technical design skills, including interactive elements, video editing, and visual storytelling, to deliver a compelling digital experience that promotes feline-friendly causes.",
        image: "/catwebsite.png",
        skills: ["Web Design", "Video Editing", "User Experience Design"],
        link: "https://bestfurendsforever.weebly.com/",
      },
      {
        title: "Arduino Marble Maze Labyrinth",
        description: "This Arduino-Powered Marble Maze is a captivating project that blends both traditional craftsmanship with cutting-edge technology. Through the incorporation of Arduino, this maze not only displays technological design skills but also showcases the potential for innovation in combining hands-on skill with clever use of technology.",
        image: "/arduinozoom.png",
        skills: ["Arduino Programming", "Circuit Design", "Breadboarding"],
        link: "https://docs.google.com/document/d/14xFGJrr96g6FuempmKUmvuhyX0bk_qcBbHyBH-vvz5U/edit?usp=sharing",
      }
    ].map((project, idx) => (
      <div
        key={idx}
        className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_15px_3px_#3C79AF]"
      >
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#3C79AF]">
            {project.title}
          </h3>
          <p className="text-gray-700 mt-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-black text-sm px-3 py-1 rounded-full font-medium transition-colors duration-300 hover:bg-[#3C79AF] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
          <a //view project button
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[#3C79AF] text-white font-semibold rounded-lg shadow-md scale-105 hover:scale-110 transition-transform duration-300"
          >
            View Project
          </a> 
          {project.title === "MoodNail (ElectronJS App)" && (
            <a //download project button
              href="https://github.com/VictoriaLeliveld/MoodNail/releases/download/v1.0.0/moodnail.exe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 ml-4 px-4 py-2 bg-[#3C79AF] text-white font-semibold rounded-lg shadow-md scale-105 hover:scale-110 transition-transform duration-300"
            >
              Download App
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-[rgba(255,241,242,0)] to-blue-100"></div>
</section>


     {/* About Section */}
<section
  id="about"
  className="min-h-screen flex flex-col items-center justify-center bg-blue-100 py-12 space-y-12"
>
  <h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#4BA0F2] via-[#3C79AF] to-[#1A4D8F] animate-gradient mb-12"
          style={{ paddingBottom: '4px', lineHeight: '1.1' }}
        >
          About Me
        </h2>

  {/* Skills */}
  <div className="group rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-[0_0_15px_3px_#3C79AF] w-full max-w-3xl mx-auto">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-2 transition-transform duration-700 group-hover:translate-x-2 hover-shift-blue">🛠 Skills</h2>
      <div className="flex flex-wrap gap-3">
        {[
          'C', 'Java', 'JavaScript', 'HTML', 'LaTeX', 'Python', 'MATLAB',
          'ARM Assembly', 'CSS', 'TypeScript', 'ElectronJS', 'React', 'Tailwind', 'Vite',
          'GitHub', 'Electron', 'Figma', 'Canva', 'VS Code', 'Prototyping', 'UX Principles'
        ].map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-black font-medium px-3 py-1 rounded-full shadow transition-transform transform hover:scale-110 hover:bg-[#3C79AF] hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>

    <div className="flex flex-col lg:flex-row gap-6 justify-center w-full max-w-3xl mx-auto">
    {/* Education */}
    <div className="group flex-[2.2] rounded-2xl p-6 bg-white shadow-lg transition-transform transition-shadow duration-300 hover:shadow-[0_0_15px_3px_#3C79AF]">
      <h2 className="text-2xl font-bold text-black mb-2 transition-transform duration-700 group-hover:translate-x-2 hover-shift-blue">🎓 Education</h2>
      <p className="font-semibold text-lg">
        Honours BSc Computer Science and Psychology
      </p>
      <ul className="list-disc pl-4 text-sm mt-1">
        <li>Minor in User Experience Design</li>
        <li>Concentration in Computation and Cognitive Neuroscience</li>
      </ul>
      <p className="mt-2">Wilfrid Laurier University • 2023–2027</p>
      <p className="mt-2 text-black font-medium">Relevant Coursework:</p>
      <p>Data Structures, Object-Oriented Programming, Intro to Microprocessors, UX Research.</p>
    </div>

    {/* Contact */}
    <div className="group flex-[1.5] rounded-2xl p-6 bg-white shadow-lg relative transition-transform transition-shadow duration-300 hover:shadow-[0_0_15px_3px_#3C79AF]">
      <h2 className="text-2xl font-bold text-black mb-2 transition-transform duration-700 group-hover:translate-x-2 hover-shift-blue">📬 Contact Me</h2>
      <p className="text-ml">I'd love to connect with you! Feel free to reach out via email or phone, or check out my resume below.</p>
      <p className="mb-4"></p>
      <p className="mt-2"><strong>Email:</strong> victorialeliveld@gmail.com</p>
      <p className="mb-1"></p>
      <p><strong>Phone:</strong> (519) 249-1179</p>
      <p className="mb-7"></p>
      <a
        href="/VictoriaLeliveldResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl px-2 py-2 rounded flex items-center justify-center transition-transform duration-200 transform hover:scale-110 mt-4 self-start"
        style={{ backgroundColor: 'var(--blue-main)', minWidth: '100px' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue-main)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--blue-main)')}
      >
        Resume
      </a>
    </div>
  </div>
    </section>
    </div>
  );
}

export default App;