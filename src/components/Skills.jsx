import { JavaOutlined, JavaScriptOutlined, PythonOutlined, Html5Outlined } from "@ant-design/icons"
import { Divider } from "antd"
import ProgressCard from "./ProgressCard"

export default function Skills() {
    return(
        <div id="skills" className="flex flex-wrap flex-col text-slate-700 mt-5 w-10/10 scroll-mt-24 bg-linear-to-b from-slate-100 to-violet-400">
            <h1 className="text-2xl mb-3 mt-3 w-full text-blue-600 text-center">Skills</h1>
            <Divider titlePlacement="center">Programming Languages / Markup Languages</Divider>
            <div className="flex flex-wrap w-full justify-center mt-2 gap-3">
                <ProgressCard skillName={<p>HTML <Html5Outlined className="text-l" style={{"color":"red"}}/></p>} progressStatus={100}/>
                <ProgressCard skillName={<p>JavaScript <JavaScriptOutlined className="text-l" style={{"color":"orange"}}/></p>} progressStatus={75}/>
                <ProgressCard skillName={<p>Java <JavaOutlined className="text-xl" style={{"color":"orange"}}/></p>} progressStatus={60}/>
                <ProgressCard skillName={<p>Python <PythonOutlined className="text-l" style={{"color":"blue"}}/></p>} progressStatus={50}/>
            </div>
            <Divider titlePlacement="center">Frameworks, Platforms and Libraries</Divider>
            <div className="flex flex-wrap w-full justify-center mt-2 gap-3">
                <ProgressCard skillName={<p className="flex justify-center gap-1">Tailwind CSS <img src="tailwind.svg" alt="tailwindcss" className="w-5"/></p>} progressStatus={70}/>
                <ProgressCard skillName={<p className="flex justify-center gap-1">React <img src="react.svg" alt="react" className="w-5"/></p>} progressStatus={50}/>
                <ProgressCard skillName={<p className="flex justify-center"><img src="node.svg" alt="node.js" className="w-15"/></p>} progressStatus={40}/>
                <ProgressCard skillName={<p className="flex justify-center"><img src="next.svg" alt="next.js" className="w-15"/></p>} progressStatus={40}/>
                <ProgressCard skillName={<p className="flex justify-center"><img src="npm.svg" className="w-15"/></p>} progressStatus={20}/>
            </div>
            <Divider titlePlacement="center">Databases</Divider>
            <div className="flex flex-wrap w-full justify-center mt-2 gap-3">
                <ProgressCard skillName={<p className="flex justify-center"><img src="mysql.svg" className="w-15"/></p>} progressStatus={70}/>
                <ProgressCard skillName={<p className="flex justify-center"><img src="sqlite.svg" className="w-15"/></p>} progressStatus={40}/>
            </div>
            <Divider titlePlacement="center">Hosting / SaaS</Divider>
            <div className="flex flex-wrap w-full justify-center mt-2 gap-3">
                <ProgressCard skillName={<p className="flex justify-center"><img src="vercel.svg" className="w-20"/></p>} progressStatus={65}/>
                <ProgressCard skillName={<p className="flex justify-center"><img src="firebase.svg" className="w-20"/></p>} progressStatus={30}/>
                <ProgressCard skillName={<p className="flex justify-center"><img src="google-cloud.svg" className="w-30"/></p>} progressStatus={30}/>
            </div>
            <Divider titlePlacement="center">Operating Systems / Kernels</Divider>
            <div className="flex flex-wrap w-full justify-center mt-2 gap-3">
                <ProgressCard skillName={<p className="flex justify-center gap-1">MacOS</p>} progressStatus={75}/>
                <ProgressCard skillName={<p className="flex justify-center gap-1">Linux <img src="linux.png" alt="linux" className="w-5"/></p>} progressStatus={45}/>
            </div>
        </div>
    )
}