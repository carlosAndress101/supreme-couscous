import logoDisney from "../../assets/disney.svg"
import logoUser from "../../assets/user.svg"
import { HiPlus, HiDotsVertical, HiStar } from "react-icons/hi"
import { HiMagnifyingGlass, HiHome, HiPlayCircle, HiTv } from "react-icons/hi2"
import HeaderItem from "./HeaderItem"
import { useState } from "react"

const Header = () => {
  const menu = [
    { name: "Home", icon: HiHome },
    { name: "Search", icon: HiMagnifyingGlass },
    { name: "Watch List", icon: HiPlus },
    { name: "Originals", icon: HiStar },
    { name: "Movies", icon: HiPlayCircle },
    { name: "Series", icon: HiTv },
  ]

  const [display, setDisplay] = useState(false);

  const handleMenuClick = () => {
    setDisplay(!display);
  };

  return (
    <div className="flex items-center justify-between p-5">
      <section className="flex gap-8 items-center">
        <img
          src={logoDisney}
          className="logo disney w-[80px] md:w-[115px] object-cover"
          alt="logo disney"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} Icon={item.icon} name={item.name} />
          ))}
        </div>
        <div className="flex gap-5 md:hidden">
          {menu.map(
            (item, i) =>
              i < 3 && <HeaderItem key={item.name} Icon={item.icon} name={""} />
          )}
        </div>
        <div className="md:hidden" onClick={handleMenuClick}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {display ? <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
          {menu.map(
            (item, i) =>
              i > 2 && <HeaderItem key={item.name} Icon={item.icon} name={item.name} />
          )}
          </div> : null}
        </div>
      </section>
      <section>
        <img
          src={logoUser}
          alt="logo user"
          className="w-[40px] rounded-full bg-slate-300"
        />
      </section>
    </div>
  )
}

export default Header
