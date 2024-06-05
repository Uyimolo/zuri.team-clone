import Logo from "./Logo"
import hamburgerIcon from '../assets/icons/hamburger.svg'

const Header = () => {
  return (
    <header className="h-28 border flex justify-between items-center">
        <Logo />
        <div className="w-8">
            <img src={hamburgerIcon} alt="" />
        </div>
    </header>
  )
}

export default Header
