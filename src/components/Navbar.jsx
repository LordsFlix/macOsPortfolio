import { navItems, navIcons, locations } from "#constants";
import useWindowStore from "#store/Windows";
import useLocationStore from "#store/Location";
import dayjs from "dayjs";

const Navbar = () => {
    const { openWindow } = useWindowStore()
    const { setActiveLocation } = useLocationStore()

    const handleNavClick = (item) => {
        if (item.location && locations[item.location]) {
            setActiveLocation(locations[item.location])
        }
        openWindow(item.type)
    }

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Shaurya's Portfolio</p>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id} onClick={() => handleNavClick(item)}>
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul>
                    {navIcons.map((item) => (
                        <li key={item.id}>
                            <img className="icon-hover" src={item.img} alt={item.id} />
                        </li>
                    ))}
                </ul>
                <time>{dayjs().format("MMM D ddd, h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Navbar