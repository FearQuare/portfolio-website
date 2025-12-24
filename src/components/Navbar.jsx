import { Button } from "antd"

const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

export default function Navbar() {
    return (
        <nav className="z-50 sticky top-0 flex justify-between content-center backdrop-blur-3xl rounded-b-md">
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
    )
}
