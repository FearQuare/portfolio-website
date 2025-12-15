import { Avatar, Card, Button } from 'antd';
import { LinkedinFilled, GithubFilled, YoutubeFilled } from '@ant-design/icons';

export default function ConnectCard() {
    return (
        <Card title={<span className='text-blue-600'>Let's Connect!</span>} className='max-w-65 shadow-xl'>
            <div className='flex flex-col items-center'>
                <Avatar size={200} src='photo.jpeg' shape='square' draggable='false' />
                <div className='flex gap-3 mt-3'>
                    <Button href='https://www.linkedin.com/in/elmiraras/' target='_blank'><LinkedinFilled style={{ color: "#0072b1" }} /></Button>
                    <Button href='https://github.com/FearQuare' target='_blank'><GithubFilled style={{ color: "black" }} /></Button>
                    <Button href='https://www.youtube.com/@fearquare' target='_blank'><YoutubeFilled style={{ color: "#b2071d" }} /></Button>
                </div>
            </div>
        </Card>
    )
}