import { useDispatch, useSelector } from "react-redux"
import AccordionList from "../AccordionList"
import { Link } from "react-router-dom"
import { clearCart } from "../../redux/cartSlice"


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    

    // console.log(cartItems)

    return(
        <div className="mt-8 w-full">
            <div className="w-6/12 mx-auto pt-8">
            
                {
                    cartItems.length != 0 ? (
                        <div>
                            <div className="">
                                <button className="text-white bg-orange-500 px-3 py-2 text-lg font-bold rounded-xl" onClick={handleClearCart}>Clear Cart</button>
                            </div>
                            <div>
                                <AccordionList items={cartItems}/>
                            </div>
                        </div>
                    ) : (

                        <div>
                            <div className="mb-6">
                                <img className="mx-auto" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_262/empty-orders-image_acrbbw'}/>
                            </div>
                            <div className="text-center space-y-3">
                                <p className="text-lg font-bold">Your cart is empty</p>
                                <p className="text-gray-400">You can go to home page to view more restaurants</p>
                                <button className="border box-border p-2 bg-orange-500 rounded-md">
                                    <Link to={"/"}
                                    className="text-white text-lg font-semibold">
                                        SEE RESTAURANTS NEAR YOU
                                    </Link>
                                </button>
                            </div>

                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default Cart