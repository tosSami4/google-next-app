
import React from 'react'
import CurrencyFormater from "react-currency-format";
import { getBasketTotal } from "@/redux/CartSlice";
import CurrencyFormat from 'react-currency-format';
import Header from './Header';
import { useStateValue } from '@/Store/Store';
import { serverTimestamp } from 'firebase/firestore/lite';
function CardOrder ({image,name, rating, createdAt,price,id}) {
  const [{ basket,user },dispatch] = useStateValue();
  

    
  
  const addToBasket = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        name,
        price,
        image,
        rating,
        
      },
    });
  };


  const removeToBasket =(e)=>{
   e.preventDefault()
   dispatch({type:'REMOVE_FROM_BASKET'})
  }

  const date = new Date(createdAt?.createdAt?.seconds * 1000)?.toLocaleTimeString();
   


  return (
    
    
    <div className='  p break-before-page col-span-1 p-10 bg-slate-950 items-center  justify-between ' >
     <sp className='text-white'>{user?.email}</sp> =
      
     <span className='text-white'> {date}</span>
    <div className='m-3 p-5 md:flex-row col-span-3 flex bg-pink-950 justify-center
     items-end border-solid border-4 border-indigo-600   md:w-80 md:h-50'>
    <dvi className=' bg     col-span-1 '>
     <img src={image} height={200 } width={200} objectFit='' className=' f'/>
      <span className='uppercase m-2 text-white'>{name}</span>
     <small className='t text-white'>₹ {price}</small>
     <div className='' >
     
      </div>
      <div className=' t ' type='$' title='total'>
        
         <CurrencyFormater quantity={rating} currency='GBP'
          value={getBasketTotal(basket)} />

      </div>
     
         
      
     
<div>       
<div>
      <button  className='m-2 uppercase bg-orange-500 font-bold'
        onClick={addToBasket} > Add Product </button>

     <button hidden className=' m-2  uppercase bg-orange-500 font-bold text-center'
        onClick={removeToBasket} > Remove Product </button>
        </div>
     
        </div>

             </dvi>
          </div>
    </div>
    
  )
}

export default CardOrder