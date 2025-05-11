import { useEffect, useState } from "react"
import { navLinks } from "../constants"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=> {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <div style={{width:'10rem'}}>

            <a href="#hero" className="logo"><img style={{width:'100%', height:"100%"}} src="/images/logos/nextGenLogo2.png"/></a>
            </div>
            <nav className="desktop">
                <ul>
                    {navLinks.map(({link, name}) => <li key={name} className="group">
                        <a href={link}><span>{name}</span> <span className="underline"/></a>
                    </li>)}
                </ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact us</span>
                </div>
            </a>
        </div>
    </header>
  )
}
export default Navbar