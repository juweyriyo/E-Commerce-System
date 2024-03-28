
import Hearder from "../components/Hearder"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    //register
    const handleRegisterLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:7000/user/login", {
            "email": email,
            "password": password,
        }).then((response) =>{
            if(response.data.error){
                alert("Incorrect password or username")
            }
            else{
                alert("successfully login")
                localStorage.setItem("User", JSON.stringify(response.data))
                navigate("/")
            }
            
        }).catch((error) => console.log(error))
    }
    return <div>
        <Hearder />
    <div className=" flex justify-center mt-20 ">
        <form className=" bg-blue-400 w-[400px] p-5">
            <label>Email</label> <br/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-350px] h-[50px] rounded" type="text" placeholder="enter username"/><br/>
            <label>Password</label> <br/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-350px] h-[50px] rounded" type="text" placeholder="enter Password"/><br/>

            <button onClick={handleRegisterLogin} className="px-4 py-2 text-white text-2xl  bg-blue-500 rounded">Login</button>
        </form>
    </div>
    </div>
  }
  export default Login
  