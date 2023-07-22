import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoTwitter, BiMenuAltLeft } from "react-icons/bi";
function Header() {
    const menus = [
        {
            name: "Home",
            active: true,
        },
        {
            name: "Pages",
            active: false,
        },
        {
            name: "Portfolio",
            active: false,
        },
        {
            name: "Blog",
            active: false,
        },
        {
            name: "Contact",
            active: false,
        },
    ]
    return (
        <header className="flex items-center justify-between w-full px-6 py-10">
            <div className="flex items-center flex-1 gap-5 text-3xl">
                <BiMenuAltLeft />
                <div className="font-Lobster">holutahyour</div>
            </div>
            <nav className="flex items-start flex-1 gap-10 text-xs font-bold uppercase">                
                {menus.map((x, $) => (
                    <div key={$} className={`hover:after:content-[' '] hover:after:block hover:after:h-[5px] hover:after:w-[5px] hover:after:rounded-full hover:after:bg-white block hover:after:mx-auto hover:after:mt-1 after:transition after:duration-500 after:ease-in-out ${x.active && "after:content-[' '] after:block after:h-[5px] after:w-[5px] after:rounded-full after:bg-white block after:mx-auto after:mt-1"}`}>{x.name}</div>
                ))}               
                
            </nav>
            <div className="flex justify-end flex-1 gap-2 text-xl">
                <BiLogoGithub />
                <BiLogoLinkedinSquare />
                <BiLogoTwitter />
            </div>
        </header>
    )
}

export default Header