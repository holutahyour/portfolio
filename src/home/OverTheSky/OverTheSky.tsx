import { HiOutlineArrowLongRight } from "react-icons/hi2"

function OverTheSky() {
    return (
        <section className="relative h-screen text-white bg-center bg-cover snap-start bg-over_the_sky">
            <div className="absolute w-full h-full bg-black/40">
                <div className="absolute text-center -translate-x-1/2 -translate-y-1/2 space-y-28 top-1/2 left-1/2">
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h1 className="text-7xl font-Righteous">Over The Sky</h1>
                            <p className="text-xs font-semibold tracking-[.45rem] opacity-90 uppercase">An Eruption Photo from Pixabay</p>
                        </div>
                        <p className="text-xs font-semibold opacity-95">Made in 2023</p>
                    </div>
                    <a href="/" className="inline-block text-xs font-semibold uppercase opacity-90 tracking-[.25rem]">link to other page <HiOutlineArrowLongRight className='inline text-2xl opacity-90' /></a>
                </div>
            </div>
        </section>
    )
}

export default OverTheSky