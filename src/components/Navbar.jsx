import { Button } from "antd"
import { motion, useScroll } from "motion/react"

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

export default function Navbar() {
    const { scrollYProgress } = useScroll()
    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    backgroundColor: "oklch(54.6% 0.245 262.881)",
                }}
                className="z-40"
            />
            <nav className="z-30 sticky pt-2 top-0 flex justify-between content-center backdrop-blur-3xl rounded-b-md">
                <div className="m-2">
                    <img src="fear-light.svg" alt="" className="max-h-10" />
                </div>
                <div className="m-2">
                    <Button variant="text" color="geekblue" onClick={() => scrollToSection('about')}>About</Button>
                    <Button variant="text" color="geekblue" onClick={() => scrollToSection('education')}>Education</Button>
                    <Button variant="text" color="geekblue" onClick={() => scrollToSection('volunteering')}>Volunteering</Button>
                    <Button variant="text" color="geekblue" onClick={() => scrollToSection('work')}>Work Experience</Button>
                    <Button variant="text" color="geekblue" onClick={() => scrollToSection('skills')}>Skills</Button>
                    <Button variant="text" color="geekblue" onClick={() => scrollToSection('certificates')}>Certificates</Button>
                </div>
            </nav>
        </>
    )
}
