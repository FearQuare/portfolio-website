import About from "./components/About"
import Certificates from "./components/Certificates"
import ConnectCard from "./components/ConnectCard"
import Education from "./components/Education"
import Skills from "./components/Skills"
import WorkExperience from "./components/WorkExperience"

export default function App() {
  return (
    <div className='flex flex-wrap'>
      <div className='hidden xl:flex flex-col items-center w-[20%] border-r border-slate-300'>
        <ConnectCard />
      </div>
      <div className="flex flex-wrap border-solid w-[80%] max-xl:w-full gap-5">
        <About />
        <div className="hidden max-xl:flex w-full justify-center bg-[url(/public/banner.svg)] rounded-2xl m-2 p-2">
          <ConnectCard />
        </div>
        <Education />
        <WorkExperience />
      </div>
      <div className="w-full mb-10">
        <Skills />
        <Certificates />
      </div>
    </div>
  )
}
