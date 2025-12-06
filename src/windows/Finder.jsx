import { WindowControls } from "#components"
import WindowWrapper from "#HOC/WindowWrapper"
import useLocationStore from "#store/Location"
import { Search } from "lucide-react"
import { locations } from "#constants"
import clsx from "clsx"
import useWindowStore from "#store/Windows"



const Finder = () => {
    const { setActiveLocation, activeLocation } = useLocationStore()
    const { openWindow } = useWindowStore()
    
    const renderList = (prop) => 
        prop.map((item) => (
            <li key={item.id} className={clsx(item.id === activeLocation.id ? 'active' : 'not-active')} onClick={() => setActiveLocation(item)}>
                <img src={item.icon} alt={item.name} className="w-4" />
                <p className="truncate text-sm font-medium">
                    {item.name}
                </p>
            </li> 
        ))

    const openItem = (item) => {
        if(item.fileType === 'pdf') return openWindow('resume')
        if(item.kind === 'folder') return setActiveLocation(item);
        if(['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, '_blank')

        openWindow(`${item.fileType}${item.kind}`, item)
    }
    

    return(
        <>
            <div id="window-header">
                <WindowControls target='finder' />
                <Search className="icon" size={25} />
            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    <div>
                        <h3>Favorites</h3>
                        <ul>
                            {renderList(Object.values(locations))}
                        </ul>
                    </div>
                    <div>
                        <h3>Projects</h3>
                        <ul>
                            {renderList(locations.work.children)}
                        </ul>
                    </div>
                </div>
                <ul className="content">
                    {activeLocation?.children.map((item) => (
                        <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')

export default FinderWindow