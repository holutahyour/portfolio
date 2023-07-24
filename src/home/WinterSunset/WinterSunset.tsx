import { BiPlay } from "react-icons/bi"

function WinterSunset() {
    return (
        <section className="relative h-screen text-white bg-center bg-cover snap-start bg-winter_sunset">
            <div className="absolute w-full h-full bg-black/30">
                <div className="absolute space-y-10 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="space-y-6">
                        <h1 className="text-7xl font-Righteous">Winter Sunset</h1>
                        <p className="text-xs font-semibold tracking-[.45rem] opacity-90 uppercase">A Winter Photo from Pixabay</p>
                    </div>
                    <p className="text-xs font-semibold opacity-95">Made in 2023</p>
                    <div className="inline-grid w-20 h-20 text-5xl transition-all duration-500 ease-out outline-[.65rem] rounded-full bg-white/60 place-items-center outline outline-white/25 hover:outline-white/100 cursor-pointer">
                        <BiPlay />
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default WinterSunset