import About from "./components/About"
import ConnectCard from "./components/ConnectCard"
import Education from "./components/Education"

export default function App() {
  return (
    <div className='m-2 flex divide-dashed'>
      <div className='flex flex-col align-center max-w-80 h-full'>
        <ConnectCard />
      </div>
      <div className="flex flex-wrap border-solid ml-3 mt-3 border-l border-slate-300">
        <About />
        <Education />
      </div>
    </div>
  )
}