
import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"

function App() {
 return(
  <div className="w-screen h-screen bg-mainBg">
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
  </div>
 )
}

export default App