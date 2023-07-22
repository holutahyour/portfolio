function WaterFall() {
    return (
        <section className="relative h-screen text-white bg-center bg-cover snap-start bg-waterfall">
            <div className="absolute w-full h-full bg-black/30">
                <div className="absolute space-y-10 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <div className="space-y-6">
                        <h1 className="text-7xl font-Righteous">Waterfall</h1>
                        <p className="text-xs font-semibold tracking-[.45rem] opacity-90 uppercase">A Waterfall Photo from Pixabay</p>
                    </div>
                    <p className="text-xs font-semibold opacity-95">Made in 2023</p>
                </div>                
            </div>
        </section>
    )
}

export default WaterFall