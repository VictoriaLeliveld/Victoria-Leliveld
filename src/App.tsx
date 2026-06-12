import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import ScrollProgressBar from './Components/ScrollProgressBar';
import { Typewriter } from 'react-simple-typewriter';



function App() {
  return (
    <div className="bg-white text-gray-900">
      <ScrollProgressBar />

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

      <section
        id="home"
        className="h-screen flex flex-col md:flex-row items-center justify-center bg-[radial-gradient(ellipse_150%_100%,white_35%,theme('colors.blue.300'))] relative px-6 md:px-20"
      >
        <div className="md:w-2/3 flex flex-col items-center justify-center mb-10 md:mb-0 text-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-7 text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] via-[#3C79AF] to-[#1A4D8F] animate-gradient">
            Hi, I'm Victoria Leliveld
          </h1>

          <p className="text-2xl mb-6 text-center md:text-left">
            I'm a <span className="font-bold text-[var(--blue-main)]">
              <Typewriter
                words={[
                  'Computer Science Student',
                  'Psychology Student',
                  'UX Student',
                  'Problem Solver',
                  'UX Researcher',
                  'Creative Thinker',
                  'Human-Centered Designer'
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>

          <div className="flex space-x-6 mb-6 mt-3 justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/victorialeliveld/" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-main)] text-6xl hover:text-[#6CA0DC]">
              <FaLinkedin />
            </a>
            <a href="https://github.com/VictoriaLeliveld" target="_blank" rel="noopener noreferrer" className="text-[var(--blue-main)] text-6xl hover:text-[#6CA0DC]">
              <FaGithub />
            </a>
          </div>

          <div className="flex space-x-6 justify-center md:justify-start">
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
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end items-center">
        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#1A4D8F] via-[#3C79AF] to-[#66B2FF] opacity-75 group-hover:opacity-100 blur-md transition duration-500"></div>
          <img
            src="/Victoria.jpeg"
            alt="Victoria Leliveld"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover transition-transform duration-300 transform group-hover:scale-105 shadow-xl"
          />
        </div>
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
    {/* Project Cards */}
    {[
      {
        title: "SetList – UX Hackathon Prize Winner",
        description: "SetList is a concert companion app designed during a 36-hour UX hackathon, where fans can vote live on the songs they want to hear, creating a more engaging and audience-centered concert experience. Developed using UX principles, the project won the Most Innovative Design award for reimagining audience-artist connections.",
        image: "/SetList.png",
        skills: ["Figma", "Canva", "UX Principles"],
        link: "https://drive.google.com/file/d/1gKn4xc7LDvko32pnJYT59RTfM8W6ZSBn/view?usp=sharing",
      },
      {
        title: "TextSense – AI Accessibility Analysis Tool",
        description: "TextSense is a full-stack web application that helps web developers improve web content readability and accessibility. Powered by Google’s Gemini 2.5 Flash, it delivers real-time, actionable improvement suggestions through a clean React frontend and a Node.js/Express backend.",
        image: "/TextSensePic.png",
        skills: ["React.js", "Node.js", "LLM Integration"],
        githubLink: "https://github.com/VictoriaLeliveld/textsense-client",
        liveLink: "https://victorialeliveld.github.io/textsense-client/",
      },
      {
        title: "The Failure Museum – UX Hackathon 3rd Place Winner",
        description: "A 48-hour UX hackathon project developed for UX Laurier’s Designathon, where our team placed 3rd and won a $250 prize. Through user research, we designed The Failure Museum, a social platform that encourages students to share learning struggles and reflect on mistakes to build confidence in independent problem-solving before turning to AI tools.",
        image: "/TFM.png",
        skills: ["UX Research", "Figma", "Problem Framing"],
        link: "https://canva.link/kqfefohaelokojn",
      },
      {
        title: "OneCard Financial Management System",
        description: "A semester-long software engineering project completed in a team of 10, focused on designing a financial management system for Laurier’s OneCard. The project followed a full software development lifecycle, producing requirements documentation, SPMP, system design artifacts, object-oriented analysis, and user documentation. The proposed system was presented to the class and instructor as a solution for managing balances, transactions, and account services.",
        image: "/OneCard.png",
        skills: ["Software Engineering", "Technical Documentation"],
        link: "https://docs.google.com/presentation/d/1hluouDwwI-lZITE5BHdlNPwOLc8G_CIp/edit?usp=sharing&ouid=105538088896485990253&rtpof=true&sd=true",
      },
      {
        title: "UX Research Case Study: Spotify",
        description: "This term-long UX research project focused on analyzing and improving Spotify. A collaborative team of UX students applied heuristic evaluations, SWOT and competitive analyses, user interviews, empathy mapping, personas, journey mapping, and usability testing to identify usability issues and propose targeted design improvements.",
        image: "/SpotifyPic.png",
        skills: ["User Interviews", "Usability Testing", "Heuristic Evaluation"],
        link: "https://docs.google.com/presentation/d/1HNKf_MuVQNnDcQTdPBoutBTrcdF6Orsy1l6ThWCMtpA/edit?usp=sharing",
      },
      {
        title: "UX Research Case Study: CNN",
        description: "This term-long UX research project focused on evaluating the CNN website. A collaborative team of UX students applied methods including card sorting, tree testing, wireframing, and usability testing to identify pain points and suggest actionable recommendations for improving user experience.",
        image: "/CNNPic.png",
        skills: ["Card Sorting", "Tree Testing", "Wireframing"],
        link: "https://drive.google.com/file/d/1BzX_enoJclaF1Sz4v5zH9ILumW9SWVeZ/view?usp=sharing",
      },
      {
        title: "Raspberry Pi Music Player",
        description: "Pi Music Player is a web app built with Python (Flask), HTML, CSS, and JavaScript, designed to run on a Raspberry Pi 3. This project combines hardware and web development by turning a Raspberry Pi 3 into an interactive music player that supports playing, pausing, and skipping songs.",
        image: "/RPiMusicPlay.png",
        skills: ["Raspberry Pi", "CSS", "Web App Development"],
        link: "https://github.com/VictoriaLeliveld/pi-music-player",
      },
      {
        title: "MoodNail – Electron App",
        description: "MoodNail is a desktop app built with HTML, CSS, and JavaScript, powered by Electron. This project enhanced my skills in JavaScript event handling, responsive UI design, and desktop app development. Try out the app to experience personalized nail colour recommendations based on mood, weather, and event.",
        image: "/moodnailapp.png",
        skills: ["Electron", "JavaScript", "HTML", "Event Handling"],
        link: "https://github.com/VictoriaLeliveld/MoodNail",
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
        description: "This Arduino-powered marble maze uses servo motors and custom circuitry to control the maze’s movement. The project combines mechanical design, electronics, and programming to create an interactive physical computing experience that integrates hardware and software to solve a hands-on engineering challenge.",
        image: "/arduinozoom.png",
        skills: ["Arduino Programming", "Circuit Design", "Breadboarding"],
        link: "https://docs.google.com/document/d/14xFGJrr96g6FuempmKUmvuhyX0bk_qcBbHyBH-vvz5U/edit?usp=sharing",
      },
      {
        title: "Provinces and Territories Confederation Circuit",
        description: "Provinces and Territories Confederation Circuit is a logic design project that determines the entry order of Canadian provinces and territories into Confederation. It uses binary input and output mappings, simplified using Karnaugh maps and truth tables, and was built and simulated in CircuitVerse for accuracy.",
        image: "/circuit.png",
        skills: ["Logic Design", "Circuit Simulation", "Karnaugh Maps"],
        link: "https://docs.google.com/document/d/1EpSp6lYnRvwA2G_2Mfg_jZfXOudSmiaiqK0N2N4NgvI/edit?usp=sharing",
      },
      {
        title: "Laurier Club Discovery Platform",
        description: "The Laurier Club Discovery Platform is a UX design sprint project focused on helping first-year students navigate campus life and discover extracurricular opportunities. The team conducted user research and developed personas and journey maps to create an interactive quiz that recommends clubs based on student interests.",
        image: "/UXclubs.png",
        skills: ["Prototyping", "UX Research", "Interaction Design"],
        link: "https://docs.google.com/document/d/1LAVLCpv9U_XeAGFyHe-pHTH27RWfuEpT7G9t4SerjgI/edit?usp=sharing",
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
          <div className="mt-4 flex gap-4">
          {/* View project button */}
          {!project.liveLink && project.title !== "TextSense – AI Accessibility Analysis Tool" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#3C79AF] text-white font-semibold rounded-lg shadow-md scale-105 hover:scale-110 transition-transform duration-300"
            >
              View Project
            </a>
          )}
            {/* TextSense buttons */}
            {project.title === "TextSense – AI Accessibility Analysis Tool" && (
              <>
                <a
                  href="https://victorialeliveld.github.io/textsense-client/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#3C79AF] text-white font-semibold rounded-lg shadow-md scale-105 hover:scale-110 transition-transform duration-300"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/VictoriaLeliveld/textsense-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#3C79AF] text-white font-semibold rounded-lg shadow-md scale-105 hover:scale-110 transition-transform duration-300"
                >
                  GitHub Repo
                </a>
              </>
            )}
        </div>
      </div>
      </div>
    ))}
  </div>
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-[rgba(255,241,242,0)] to-blue-100"></div>
</section>


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

  <div className="group rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-[0_0_15px_3px_#3C79AF] w-full max-w-3xl mx-auto">
    <div className="p-6">
      <h2 className="text-2xl font-bold text-black mb-2 transition-transform duration-700 group-hover:translate-x-2 hover-shift-blue">🛠 Skills</h2>
      <div className="flex flex-wrap gap-3">
        {[
            'ARM Assembly',
            'C',
            'CSS',
            'Electron',
            'Express.js',
            'Figma',
            'Flask',
            'Git',
            'GitHub',
            'Heuristic Evaluation',
            'HTML',
            'Java',
            'JavaScript',
            'Journey Mapping',
            'LaTeX',
            'Node.js',
            'Prototyping',
            'Python',
            'R',
            'Raspberry Pi',
            'React',
            'SQL',
            'Tailwind CSS',
            'TypeScript',
            'Usability Testing',
            'User Research',
            'Vercel',
            'Vite'
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
      <p className="mt-2">Wilfrid Laurier University • 2023–2027 • 4.0 GPA</p>
      <p className="mt-2 text-black font-medium">Relevant Coursework:</p>
      <p>Data Structures, Algorithms, Software Engineering, Databases, Operating Systems, UX Research, Interaction Design, Cognitive Neuroscience.</p>
    </div>

    {/* Contact */}
    <div className="group flex-[1.5] rounded-2xl p-6 bg-white shadow-lg relative transition-transform transition-shadow duration-300 hover:shadow-[0_0_15px_3px_#3C79AF]">
      <h2 className="text-2xl font-bold text-black mb-2 transition-transform duration-700 group-hover:translate-x-2 hover-shift-blue">📬 Contact Me</h2>
      <p className="mt-3"></p>
      <p className="text-ml">I'd love to connect with you! Feel free to reach out via email or check out my resume below.</p>
      <p className="mt-18">
        <strong>Email:</strong> victorialeliveld@gmail.com
      </p>

      <a
        href="/VictoriaLeliveldResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-xl px-2 py-2 rounded flex items-center justify-center transition-transform duration-200 transform hover:scale-110 mt-5 self-start"
        style={{ backgroundColor: 'var(--blue-main)', minWidth: '100px' }}
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