import { navItems, navIcons } from "#constants";
import dayjs from "dayjs";

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Shaurya's Portfolio</p>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
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