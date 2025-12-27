import { Button, Dropdown, Space } from "antd"
// eslint-disable-next-line no-unused-vars
import { motion, useScroll } from "motion/react"
import { MenuOutlined } from "@ant-design/icons"
 
const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
}

const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'work', label: 'Work Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
];

const items = navLinks.map((link, index) => ({
    key: String(index + 1),
    label: (
        <Button variant="text" color="geekblue" onClick={() => scrollToSection(link.id)}>
            {link.label}
        </Button>
    ),
}));

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
                <div className="hidden md:block m-2">
                    {navLinks.map(link => (
                        <Button key={link.id} variant="text" color="geekblue" onClick={() => scrollToSection(link.id)}>{link.label}</Button>
                    ))}
                </div>
                <div className="hidden max-md:block m-2 mr-10 text-blue-600">
                    <Dropdown menu={{ items }}>
                        <a onClick={e => e.preventDefault()}>
                            <Space>
                                <MenuOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </nav>
        </>
    )
}
