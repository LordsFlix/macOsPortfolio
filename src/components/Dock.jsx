import { dockApps, locations } from "#constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { Tooltip } from "react-tooltip"
import useWindowStore from "../store/Windows"
import useLocationStore from "#store/Location"


const Dock = () => {
    
    const {windows, openWindow, closeWindow} = useWindowStore()
    const { setActiveLocation } = useLocationStore()
    const dockRef = useRef(null)

    useGSAP(() => {
        const dock = dockRef.current
        if (!dock) return;
        const icons = dock.querySelectorAll(".dock-icon")
        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect()
            icons.forEach(icon => {
                const { left: iconLeft, width } = icon.getBoundingClientRect()
                const center = iconLeft - left + width / 2
                const distance = Math.abs(mouseX - center)
                const intensity = Math.exp(-(distance ** 2) / 2000)

                gsap.to(
                    icon,
                    {
                        scale: 1 + 0.25 * intensity,
                        y: -15 * intensity,
                        duration: 0.2,
                        ease: "power1.out"
                    }
                )
            });
        }
        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect()
            animateIcons(e.clientX - left)
        }
        const handleMouseLeave = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power1.out"
                })
            })
        }
        dock.addEventListener("mousemove", handleMouseMove)
        dock.addEventListener("mouseleave", handleMouseLeave)
        return () => {
            dock.removeEventListener("mousemove", handleMouseMove)
            dock.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])


    const toggleApp = (app) => {
        if(!app.canOpen) return;
        
        const window = windows[app.id]

        if(app.name === "Archive"){
            setActiveLocation(locations.trash)
        }else{
            setActiveLocation(locations.work)
        }

        if(window.isOpen){
            closeWindow(app.id)
        }else{
            openWindow(app.id)
        }        
        console.log(windows)
    }
    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div className="relative flex justify-center" key={name}>
                        <button
                            type="button"
                            className="dock-icon"
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen, name })}>

                            <img src={`/images/${icon}`}
                                alt={name}
                                loading="lazy"
                                className={canOpen ? "" : "opacity-60"} />


                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    )
}

export default Dock