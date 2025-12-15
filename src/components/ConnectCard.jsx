import { Avatar, Card, Button } from 'antd';
import { LinkedinFilled, GithubFilled, YoutubeFilled } from '@ant-design/icons';

export default function ConnectCard() {
    return (
        <Card title={<span className='text-blue-600'>Let's Connect!</span>} className='max-w-65 shadow-xl'>
            <div className='flex flex-col items-center'>
                <Avatar size={200} src='photo.jpeg' shape='square' draggable='false' />
                <div className='flex gap-3 mt-3'>
                    <Button><LinkedinFilled style={{ color: "#0072b1" }} /></Button>
                    <Button><GithubFilled style={{ color: "black" }} /></Button>
                    <Button><YoutubeFilled style={{ color: "#b2071d" }} /></Button>
                </div>
            </div>
        </Card>
    )
}