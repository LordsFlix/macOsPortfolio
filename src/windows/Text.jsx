import useWindowStore from "#store/Windows"
import { WindowControls } from "#components"
import WindowWrapper from "#HOC/WindowWrapper"

const Text = () => {
    const { windows } = useWindowStore()
    const data = windows.txtfile.data

    if (!data) return null

    return (
        <>
            <div id="window-header">
                <WindowControls target='txtfile' />
                <h2>{data.name}</h2>
            </div>
            <div className="p-6 h-[60vh] overflow-y-auto font-georama">
                {data.image && (
                    <img 
                        src={data.image} 
                        alt={data.name} 
                        className="w-24 h-24 rounded-full object-cover mb-4 mx-auto block shadow-md" 
                    />
                )}
                {data.subtitle && (
                    <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
                        {data.subtitle}
                    </h3>
                )}
                <div className="space-y-4">
                    {data.description && data.description.map((paragraph, index) => (
                        <p key={index} className="text-gray-600 leading-relaxed text-base">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow
