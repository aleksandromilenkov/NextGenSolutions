import { useRef } from "react"
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowCaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((project, idx) =>{
            gsap.fromTo(project, {opacity:0, y:50}, {opacity:1, y:0, duration:1, delay:0.3 * (idx + 1), scrollTrigger: { trigger: project, start: 'top bottom-=100'}}) // delay for the first will be 0.3 s, for the second project it will be 2 x 0.3s, and when to start animating? when top of the card is 100px from the bottom of the scren ( close to the bottom)
        })
        // animation for the parent:
        gsap.fromTo(sectionRef.current, { opacity: 0}, {opacity: 1, duration: 1.5})
    },[])

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
                <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
                        <img src="/images/omnifood.png" alt="Omnifood"/>
                    </div>
                    <div className="text-content">
                        <h2>ON-Demand Restaurant Web-Application</h2>
                        <p className="text-white-50 md:text-xl">An app made with React, PHP, Tailwind CSS and more</p>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div className="project" ref={project2Ref}>
                        <div className="image-wrapper bg-[#ffefdb]">
                        <img src="/images/macedonianMeals.png" alt="Macedonian Meals"/>
                        </div>
                        <h2>Australian-Macedonian Online Meals Web-App</h2>
                    </div>
                    <div className="project" ref={project3Ref}>
                        <div className="image-wrapper bg-[#ffe7eb]">
                        <img src="/images/astorija.png" alt="Astorija Office & Copy Center"/>
                        </div>
                        <h2>Website for print house company</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
export default ShowCaseSection