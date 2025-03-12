import { createContext, useContext, useState } from "react"; 
import { ToastContainer, toast } from 'react-toastify';

const cartcontext=createContext()

export const Cartprovider =({children})=>{

    const [cartitem,setcartitem]=useState([])
    console.log(cartitem);
    

    const addToCart = (product) => {
        setcartitem(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
    
            if (existingItem) {
                console.log('Item already in cart:', existingItem);
               
                
                return prevItems; // Don't modify state if the item already exists
            } else {
                console.log('Adding new item to cart:', product);
              
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
        const isitemincart =cartitem.some(item=>item.id===product.id)
        console.log(isitemincart);
        if (isitemincart) {
            
            toast.error('item already in cart')
        }
        else{
            toast.success('item added to cart')
        }
        
       
    };

    const increasequantity = (product) => {
        setcartitem(prevItems =>
            prevItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }  // Update the quantity if item matches
                    : item  // Otherwise, return the item as is
            )
        );
    };
    const decreasequantity = (product) => {
        setcartitem(prevItems =>
            prevItems.map(item =>
                item.id === product.id && item.quantity>1
                    ? { ...item, quantity: item.quantity - 1 }  // Update the quantity if item matches
                    : item  // Otherwise, return the item as is
            )
        );
    };
    
    
    const removefromcart = (product)=>{
        setcartitem( prevItems=>prevItems.filter(item=>item.id!==product.id))
    }

    const totalprice=()=>{
        return cartitem.reduce((total,item)=>total+item.rate*item.quantity,0)

    }

    return (
        <cartcontext.Provider value={{
            cartitem,
            addToCart,
            removefromcart,
            increasequantity,
            decreasequantity,
           totalprice
        }}>
            {children}
        </cartcontext.Provider>
    );
}
// Custom Hook to Use Cart Context
export const useCart = () => {
    return useContext(cartcontext);
};