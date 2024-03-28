import axios from "axios"
import Hearder from "../components/Hearder"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Register(){
   const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    //register
    const handleRegisterUser = (e) => {
        e.preventDefault()//defual load ka ka hortag
        axios.post("http://localhost:7000/user/register", {
            "name": name,
            "email": email,
            "password": password,
        }).then(() => {
            alert("user has been registered successfully",{
               
            }) 
             navigate("/login")
        }).catch((error) => console.log(error))
    }
     return <div>
        < Hearder />
     <div className=" flex justify-center mt-20 ">
        <form className=" bg-blue-400 w-[400px] p-5">
            <label>Username</label> <br/>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-350px] h-[50px] rounded " type="text" placeholder="enter username"/><br/>
            <label>Password</label> <br/>
            <input  value={email} onChange={(e) => setEmail(e.target.value)}className="w-350px] h-[50px] rounded" type="text" placeholder="enter Email"/><br/>
            <label>Email</label> <br/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-350px] h-[50px] rounded" type="text" placeholder="enter Password"/><br/>

            <button onClick={handleRegisterUser} className="px-4 py-2 text-white text-2xl  bg-secondaryColor rounded">Save</button>
        </form>
    </div> 
     </div>
  }
  export default Register
  