import React from "react";
import { Drawer, Typography, IconButton, Button } from "@material-tailwind/react";
import { useCart } from "../context/Cartcontext";
import { Link } from "react-router-dom";


function CartDrawer({ isOpen, onClose }) {

  const {cartitem,removefromcart,increasequantity,decreasequantity}=useCart()
  console.log("Cart Items:", cartitem);
  return (
    
    <Drawer  placement="right" open={isOpen} noClose={onClose} className="p-4 overflow-auto" overlay={false} >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Shopping Cart
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </IconButton>
      </div>
      <Typography color="gray" className="mb-8 pr-4 font-normal">
      
        {cartitem.length>=1?<div>
  
  {cartitem.map(items=>(
    <div className=" border p-4 mb-4">
      <div className="font-bold mb-2">
      {items.name}
      </div>
      <div>
      <button onClick={()=>decreasequantity(items)} className="px-3 bg-gray-200 rounded-full text-lg font-bold">- </button>
      <span className="text-lg font-medium">
         {items.quantity} 
      </span>
      
      <button onClick={()=>increasequantity(items)}  className="px-3 bg-gray-200 rounded-full text-lg font-bold"> +</button>
      <button onClick={()=>removefromcart(items)} className="text-red-500 px-2 py-1 ml-14">Remove</button>
    </div>
       </div>

  ))}
</div>:'Your cart is currently empty.'}


 




      </Typography>
      <div className="flex gap-2">
        <Button size="sm" variant="outlined">
          Continue Shopping
        </Button>
        <Link to={'/checkout'} ><Button size="sm">Checkout</Button></Link>
      </div>
    </Drawer>
  );
}

export default CartDrawer;