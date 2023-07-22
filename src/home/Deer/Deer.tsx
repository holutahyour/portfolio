import { PiMouseSimpleLight } from "react-icons/pi";
function Deer() {
    return (
        <section className="relative z-10 h-screen text-white bg-center bg-cover snap-start bg-deer">
            <div className="absolute w-full h-full bg-black/30">
                <div className="absolute space-y-10 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="space-y-6">
                        <h1 className="text-7xl font-Righteous">The Deer</h1>
                        <p className="text-xs font-semibold tracking-[.45rem] opacity-80 uppercase">Photo from Pixabay</p>
                    </div>
                    <p className="text-xs font-semibold opacity-95">Made in 2023</p>
                </div>
                <div className="absolute bottom-0 flex flex-col items-center text-4xl -translate-x-1/2 left-1/2">
                    <PiMouseSimpleLight />
                    <div className="w-[1px] bg-white h-[4rem] mt-3"></div>
                </div>
            </div>
        </section>
    )
}

export default Deer