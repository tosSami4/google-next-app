import Image,{useState} from 'next/image'
import CurrencyFormater from "react-currency-format";
import React from 'react'
import { addToCart}from '../redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useStateValue } from '@/Store/Store';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id,price,image,brand,name,rating}) {

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
 

  return (
    <div className=' relative   flex-col  m-5 bg-white z-30 p-13 justify-between inline-table  '>

    
     <Image src={image} height={200 } width={200} objectFit='contain' className=' flex' alt=''/>
     <span className='flex mr-2 uppercase font-bold text-black'>{name}</span>
     <span>{brand}</span>
     <div className='flex  mr-2'>
      {Array(rating).fill().map( i =>(
       <span className=' ' key={i}>🌟</span>
      
      ))}

      </div>
      <div className='mr-2 '>
         <CurrencyFormater quantity={price} currency='GBP' />
      </div>
     
         
      
     

      <button 
       className='B bg-orange-400 w-60 text-sm hover:bg-yellow-300 border-orange-300 uppercase '
       onClick={addToBasket}>Add</button>
       
    </div>
  )
}

export default Product