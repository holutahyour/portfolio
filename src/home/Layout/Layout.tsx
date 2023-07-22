import { BiHeart } from "react-icons/bi"
import { CgMenuRound } from "react-icons/cg"
import Header from "../Header/Header"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="fixed z-[3000] w-full h-screen text-white">
                <Header />
                <div className="fixed flex items-center justify-between w-full p-20 -translate-y-1/2 top-1/2">
                    <div className="inline-block space-y-6 text-2xl left-16">
                        <BiHeart />
                        <CgMenuRound />
                    </div>
                    <ul className="flex flex-col gap-2 list-none right-16">
                        <li className="w-[10px] h-[10px] bg-white rounded-full"><a href=""><span></span></a></li>
                        <li className="w-[10px] h-[10px] rounded-full border"><a href=""><span></span></a></li>
                        <li className="w-[10px] h-[10px] rounded-full border"><a href=""><span></span></a></li>
                        <li className="w-[10px] h-[10px] rounded-full border"><a href=""><span></span></a></li>
                        <li className="w-[10px] h-[10px] rounded-full border"><a href=""><span></span></a></li>
                    </ul>
                </div>
            </div>
            {children}
        </>
    )
}

export default Layout