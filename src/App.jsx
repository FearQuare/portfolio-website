import About from "./components/About"
import Certificates from "./components/Certificates"
import ConnectCard from "./components/ConnectCard"
import Education from "./components/Education"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"

export default function App() {
  return (
    <div className='flex flex-wrap min-h-screen'>
      <div className='flex flex-col items-center w-[20%] min-h-screen'>
        <ConnectCard />
      </div>
      <div className="flex flex-wrap border-solid border-l border-slate-300 w-[80%] gap-5">
        <About />
        <Education />
      </div>
      <div className="w-full mb-10">
        <WorkExperience />
        <Skills />
        <Certificates />
      </div>
    </div>
  )
}
