import { appleImg, bagImg, searchImg } from "../utils"
import { navLists } from "../constants"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5">
      <nav className="flex justify-between items-center w-full screen-max-width">
        <img src={appleImg} alt="apple" width={18} height={18} />

        <div className="flex flex-1 gap-x-5 max-sm:hidden justify-center">
          {navLists.map(nav => (
            <div key={nav} className="text-sm text-gray cursor-pointer transition-colors hover:text-white">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex gap-x-7">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar