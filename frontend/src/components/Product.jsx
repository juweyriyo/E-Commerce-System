import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Product(){
    const [productData, setProductData] = useState([])

    const getProduct = () => {
        axios.get("http://localhost:7000/product/read").then((res) => {
            setProductData(res.data)
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        getProduct()
    })

    return <div className=" grid grid-cols-3 gap-5 pb-5">
        {
            productData.map((data) => {
               return <Link to={`/order/${data._id}`}><div className=" border-2 p-2 border-gray-300  w-full mt-5 ml-5">
            <img className=" w-full rounded h-[300px]" src={`http://localhost:7000/image/${data.image}`}/>
            <div className="flex justify-between text-2xl text-textColor">
            <h1 className=" text-primaryColor">{data.name}</h1>
            <h1 className=" font-bold text-primaryColor">{data.price}</h1>
            </div>
            <p className="  text-primaryColor">{data.description}</p>
            <button className="bg-secondaryColor px-10 text-textColor py-3">Buy</button>
        </div>
        </Link>
            })
        }
    </div>
}

export default Product