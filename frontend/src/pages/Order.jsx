import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
function Order(){

    const [orderData, setOrderData] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(9)

    // let name = ""
    let orderUser = ""
    // let price = 0

    const User = localStorage.getItem("User")
    if(User){
        orderUser= JSON.parse(User).name
        
    }

    const handleIncremanty = () =>{
        setQuantity(quantity +1)
    }

    const handleDecremanty = () =>{
        if(quantity >1){
            setQuantity(quantity -1)
        }
    }

    const params = useParams()
    const getOrder = () => {
        axios.get(`http://localhost:7000/product/single/${params.id}`).then((res) => {
            setOrderData(res.data)
            setName(res.data[0].name)
            setPrice(res.data[0].price)
        }).catch((error) => console.log(error))
    }


    const handleOrder = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:7000/register/order",{
            "item" : name,
            "user": orderUser,
            "price": price * quantity,
            "quentity": quantity
        }).then(() => alert("Order registering succefull")).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getOrder()
    },[])


    return <div>
        <h1 className=" text-center text-2xl font-semibold">Complete your order</h1>
    
   {
    orderData.map((data) =>{
        return  <div className=" flex justify-around items-center mt-10 mb-20">
        <img className="w-[600px] rounded-xl" src={`http://localhost:7000/image/${data.image}`}/>
        <div>
        <h1 className=" font-semibold text-2xl">{data.name}</h1>
        <p>{data.description}</p>
        <h1 className=" font-bold mt-3">$ {data.price * quantity}</h1>
        <div className=" flex gap-5 mt-5">
        <button onClick={handleDecremanty} className=" rounded-full bg-secondaryColor px-4 py-2 text-2xl">-</button>
        <h1 className=" text-4xl">{quantity}</h1>
        <button onClick={handleIncremanty} className=" rounded-full bg-secondaryColor px-4 py-2 text-2xl">+</button>
        </div>
        <button onClick={handleOrder} className=" bg-secondaryColor px-16 rounded-full  py-2 mt-8 text-2xl">Chechout</button>
        </div>
    </div>
    })
   }
    <Footer/>
    </div>
}

export default Order