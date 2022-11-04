import { Link, Outlet } from "react-router-dom";
import "@/styles/global.scss"

const App = () => {
  return (
    <div className="App">
      <Link to={"/page"}>page one</Link>
      <Link to={"/page-two"}>page two</Link>
      <Outlet />
    </div>
  )
}

export default App;