import { BiHeart } from "react-icons/bi"
import { CgMenuRound } from "react-icons/cg"
import Header from "../Header/Header"

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="fixed items-center justify-between inline space-y-6 text-2xl -translate-y-1/2 top-1/2 left-16 z-[3000] text-white">
                <BiHeart className='cursor-pointer' />
                <CgMenuRound className='cursor-pointer' />
            </div>
            <ul className="fixed flex flex-col items-center justify-between gap-2 text-2xl list-none -translate-y-1/2 top-1/2 right-16 z-[3000] text-white">
                <li className="w-[10px] h-[10px] bg-white rounded-full cursor-pointer"><a href=""><span></span></a></li>
                <li className="w-[10px] h-[10px] rounded-full border cursor-pointer"><a href=""><span></span></a></li>
                <li className="w-[10px] h-[10px] rounded-full border cursor-pointer"><a href=""><span></span></a></li>
                <li className="w-[10px] h-[10px] rounded-full border cursor-pointer"><a href=""><span></span></a></li>
                <li className="w-[10px] h-[10px] rounded-full border cursor-pointer"><a href=""><span></span></a></li>
            </ul>
            {children}
        </>
    )
}

export default Layout