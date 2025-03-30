import { SectionTitle } from './ui/SectionTitle';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiNextdotjs, SiTypescript, SiCplusplus, SiGit, SiGithub, SiVite, SiFlutter, SiAndroidstudio, SiSqlite, SiVercel, SiNetlify, SiSelenium, SiElectron, SiFfmpeg, SiJupyter, SiFlask, SiQt, SiIonic } from 'react-icons/si';
import { FaReact, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMsqlServer } from 'react-icons/di';

const languages = [
  { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
  { name: 'CSS', icon: SiCss3, color: '#1572b6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
  { name: 'Python', icon: FaPython, color: '#306998' },
  { name: 'C++', icon: SiCplusplus, color: '#00599c' },
  { name: 'React', icon: FaReact, color: '#61dafb' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569b' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38b2ac' },
  { name: 'Vite', icon: SiVite, color: '#646cff' },
  { name: 'Selenium', icon: SiSelenium, color: '#09b608' },
  { name: 'Electron', icon: SiElectron, color: '#00ffff' },
  { name: 'Flask', icon: SiFlask, color: '#000000' },
  { name: 'Qt', icon: SiQt, color: '#41cd52' },
  { name: 'VS Code', icon: VscVscode, color: '#007acc' },
  { name: 'GitHub', icon: SiGithub, color: '#181717' },
  { name: 'Git', icon: SiGit, color: '#f05032' },
  { name: 'Android Studio', icon: SiAndroidstudio, color: '#3ddc84' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Netlify', icon: SiNetlify, color: '#0dbfbc' },
  { name: 'FFMpeg', icon: SiFfmpeg, color: '#097c13' },
  { name: 'Jupyter', icon: SiJupyter, color: '#f37726' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
  { name: 'Firebase', icon: IoLogoFirebase, color: '#ffca28' },
  { name: 'SQLite', icon: SiSqlite, color: '#003b57' },
  { name: 'SQL Server', icon: DiMsqlServer, color: '#cc2929' },
  { name: 'Ionic', icon: SiIonic, color: '#3880ff' },
]

export function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-10 py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* skills */}
          <div>
            <div className="flex flex-wrap gap-6 justify-center">
              {languages.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-2 sm:p-4 sm:border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-200 dark:hover:bg-gray-800 transition-transform duration-300 transform hover:scale-110"
                >
                  <tech.icon size={40} color={tech.color} />
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
