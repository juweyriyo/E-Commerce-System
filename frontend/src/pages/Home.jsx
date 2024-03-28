import Footer from "../components/Footer"
import Hearder from "../components/Hearder"
import Product from "../components/Product"



function Home(){

    return <div>
        <Hearder />
        <div className=" grid grid-cols-[150px_900px_150px] justify-between mt-5">
        <div className=" pl-4 h-screen">
           
            <form>
            <h1 className=" font-bold text-2xl mt-2">Filter by Categoery</h1>
                <input  type="radio" name="categeory" /> Sports
                <br />
                <input type="radio" name="categeory" /> Womenchildren
                <br/>
                <input type="radio" name="categeory" /> Sports
                <br />
                <input type="radio" name="categeory" /> Womenchildren
                <br/>
                <input type="radio" name="categeory" /> Sports
            </form>
        </div>
        <div className="">
            <Product/>
        </div>
        
        <div className=" bg-blue-500 h-screen"></div>

        </div>

        <Footer />
  </div> 
  }
  export default Home
  