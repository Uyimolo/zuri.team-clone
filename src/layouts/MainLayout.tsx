import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const MainLayout = () => {
  return (
    <div className="bg-snow overflow-x-hidden">
      <Header />
        <Outlet/>
        {/* footer */}
      
    </div>
  )
}

export default MainLayout
