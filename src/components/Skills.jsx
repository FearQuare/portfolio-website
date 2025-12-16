import { Divider } from "antd"

export default function Skills() {
    return(
        <div id="skills" className="flex flex-wrap flex-col text-slate-700 mt-5 w-10/10 scroll-mt-24 bg-linear-to-b from-slate-100 to-violet-600">
            <h1 className="text-2xl mb-3 mt-3 w-full text-center">Skills</h1>
            <Divider titlePlacement="start">Programming Languages</Divider>
            <div>
                {/*Add cards that holds progress for each skill*/}
            </div>
        </div>
    )
}