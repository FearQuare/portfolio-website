import { Card, Progress } from "antd"
export default function ProgressCard({skillName, progressStatus}){
    return (
        <Card className="min-w-64 text-center" title={skillName}>
            <Progress type="circle" percent={progressStatus}/>
        </Card>
    )
}