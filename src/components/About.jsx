

export default function About() {
    return (
        <section id="about" className="ml-10 text-slate-600 scroll-mt-24">
            {/*Here can be an animated text especially the text whoami part*/}
            <h1 className="text-2xl text-blue-600"><span className="font-mono text-purple-500">whoami</span> (or... Who Am I?)</h1>
            <div className="mt-3 w-9/10 ml-2">
                <p>Hi! My name is Elmira Aras. I work full time as a Junior Software Engineer at Kurulum Cognitive Services, a third-party software company for Intertech.</p>
                <p className="mt-2">I am interested in DevOps and Cloud Engineering, and I spend my free time learning more about these areas.</p>
                <p className="mt-2">I graduated from İzmir University of Economics with a Bachelor of Science degree in Software Engineering. I finished 8th out of 64 students in my class, with a GPA of 3.30 out of 4.</p>
                <p className="mt-2">If you noticed the “FearQuare” watermark on the navbar, that’s my online identity and nickname.</p>
                <p className="mt-2">If you want to get to know me more, you can scroll down to this website!</p>
            </div>
        </section>
    )
}
