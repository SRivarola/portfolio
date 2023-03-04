import { NavLink } from "react-router-dom"
import DesktopNavBar from "./DesktopNavBar"
import MobileNavBar from "./MobileNavBar"


const NavBar = () => {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  )
}
export default NavBar