import useWindowStore from "#store/Windows"
import { WindowControls } from "#components"
import WindowWrapper from "#HOC/WindowWrapper"

const Image = () => {
    const { windows } = useWindowStore()
    const data = windows.imgfile.data

    if (!data) return null

    return (
        <>
            <div id="window-header">
                <WindowControls target='imgfile' />
                <h2 className="ml-auto mr-auto">{data.name}</h2>
            </div>
            <div className="preview">
                <img src={data.imageUrl} alt={data.name} />
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')

export default ImageWindow
