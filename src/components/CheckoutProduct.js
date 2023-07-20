import { useStateValue } from '@/Store/Store';
import React from 'react'
import CurrencyFormater from 'react-currency-format';
import { useDispatch } from 'react-redux';


function CheckoutProduct({id,price,image,brand,name,rating}) {

  const [{ basket, user }, dispatch] = useStateValue();

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
        brand,
      },
    });
  };


  const removeToBasket =(e)=>{
   e.preventDefault()
   dispatch({type:'REMOVE_FROM_BASKET'})
  }

  
  return (
   
    <div className='  p break-before-page col-span-1 p-10 bg-slate-950 items-center  justify-between ' >
    <div className='m-3 p-5 md:flex-row col-span-3 flex bg-pink-950 justify-center
     items-end border-solid border-4 border-indigo-600   md:w-80 md:h-50'>
    <dvi className=' bg     col-span-1 '>
     <img src={image} height={200 } width={200} objectFit='' className=' f'/>
      <span className='uppercase m-2  text-black'>{name}</span>
     <small>{brand}</small>
     <small> ₹  {price}</small>
     <div className='' >
      
      {Array(rating).fill().map( i =>(


       <span className='flex-1'>🌟</span>
     
      ))}

      </div>
      <div className='  '>
         <CurrencyFormater  currency='GBP' />
      </div>
     
         
      
     
<div>
      <button className='m-2 uppercase bg-orange-500 font-bold'
        onClick={addToBasket} > Add Product </button>

     <button className=' m-2  uppercase bg-orange-500 font-bold text-center'
        onClick={removeToBasket} > Remove Product </button>
        </div>
      
        </dvi>
          </div>
    </div>
  )
}

export default CheckoutProduct