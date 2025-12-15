import ConnectCard from "./ConnectCard"

export default function About() {
    return (
        <div className='m-2 flex divide-dashed'>
            <div className='flex flex-col align-center max-w-80 h-full'>
                <ConnectCard />
            </div>
            <div className="flex flex-wrap border-solid ml-3 mt-3 border-l border-slate-300">
                <div className="ml-10 text-slate-600">
                    {/*Here can be an animated text especially the text whoami part*/}
                    <h1 className="text-2xl text-blue-600"><span className="font-mono text-purple-500">whoami</span> (or... Who Am I?)</h1>
                    <div className="mt-3 w-9/10">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor viverra est quis dapibus. Aenean eros tortor, interdum a risus non, sodales vestibulum lorem. Duis malesuada hendrerit nulla, quis pellentesque elit viverra sed. Aenean laoreet sapien eget enim elementum, eu bibendum velit facilisis. Sed molestie dui ipsum, id finibus odio sollicitudin et. Pellentesque congue sagittis ipsum, ut tincidunt quam dictum id. Praesent ac metus ac libero imperdiet rhoncus eget sit amet augue. Proin dictum elit turpis, sed dignissim orci suscipit vitae. Morbi a pellentesque elit, nec feugiat nibh. Donec vel rutrum tellus, in lobortis ligula. Sed porta mollis suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <p className="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor viverra est quis dapibus. Aenean eros tortor, interdum a risus non, sodales vestibulum lorem. Duis malesuada hendrerit nulla, quis pellentesque elit viverra sed. Aenean laoreet sapien eget enim elementum, eu bibendum velit facilisis. Sed molestie dui ipsum, id finibus odio sollicitudin et. Pellentesque congue sagittis ipsum, ut tincidunt quam dictum id. Praesent ac metus ac libero imperdiet rhoncus eget sit amet augue. Proin dictum elit turpis, sed dignissim orci suscipit vitae. Morbi a pellentesque elit, nec feugiat nibh. Donec vel rutrum tellus, in lobortis ligula. Sed porta mollis suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}