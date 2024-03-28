import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Order from "./pages/Order"
function App(){
  return<>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/order/:id" element={< Order />} />
  </Routes>
  </>
}
export default App
