import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import styled from "styled-components";

import { useDispatch, useSelector } from 'react-redux'
import { db } from "@/firebase";

import CurrencyFormater from "react-currency-format";
import Header from "@/components/Header";
import { useStateValue } from "@/Store/Store";
import { getBasketTotal } from "@/redux/CartSlice";
import axios from "axios";



import {getFirestore, collection,addDoc,serverTimestamp, doc ,setDoc} from "firebase/firestore/lite";
import { useRouter } from "next/router";






function Payment({}) {
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);
   const ref =collection( db,"posts");
  const [{ address, basket, user }, dispatch] = useStateValue();
  const [first, setfirst] = useState([])
const router =useRouter()


const d =()=>{
  router.push('/login')
}

  const addToCart = async () => {
    if (user) {
      const docRef = addDoc(collection(db, "cart"), {
        
        name: basket[0].name,
        price:basket[0].price,
        image:basket[0].image,
       
        uid: user?.uid,
        createdAt: serverTimestamp(),
      });
      
    } else {
      alert("Please Sign In!");
    }
    
  };
       
          
        
        
   
      
      
    
  

  const removeToBasket =(e)=>{
    e.preventDefault()
    dispatch({type:'REMOVE_FROM_BASKET'})
   }
 
  const createCheckoutSession = async () => {

    axios.post('api/create-checkout-session', { basket })
        .then(res => {
            console.log(res)

            window.location=res.data.sessionURL;
         
      })
        .catch(err => console.log(err))
      
}

  return (
    <Container>
      <Header />

      <Main>
        <ReviewContainer>
          <p>Review Your Order</p>

          
            <p>Shipping Address</p>

            <AddressContainer>  
              <div className=" text-black uppercase m-2 font-bold ">
                  <p>{user?.email}</p>
                 <p>{address?.fullName}</p>
              <p>{address.flat}</p>
              <p>{address.area}</p>
              <p>{address.landmark}</p>
              <p>
                {address.city} {address.state}
              </p>  
              <p>Phone:  {address.phone}</p>
              </div>
             

            
             </AddressContainer>
          

        
            <p>Payment Method</p>

            <div>
              <div>Card Details</div>


        
            </div>
          

          <OrderContainer>
            <div>Your Order</div>
            <div  className='bg bg-white p-5'>
              {basket.map((product) => (
                <div key={product.id} >
                  <div  className="p-4">
                  <img src={product.image} height={200 } width={200} objectFit='contain' className=' flex'/>
                  </div>
                  <div className="m-5">
                    <p  className="tex text-black uppercase m-2 font-bold p-3">{product.name}</p>

                    <p  className="tex text-black uppercase m-2 font-bold" >₹ {product.price}</p>

                    <button  onClick={removeToBasket} className="bg bg-orange-500 uppercase border-spacing-0 font-bold hover:bg-slate-50 bottom-3">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          
          </OrderContainer>
        </ReviewContainer>
        <Subtotal>
          <CurrencyFormater
            renderText={(value) => (
              
              
                <p>
                  Subtotal ( {basket.length} items ) : <strong> {value}</strong>
                </p>
          
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />                           <div>{user ?( <div>

            <button  disabled={!user} onClick={createCheckoutSession} 
            className="bg bg-orange-500 uppercase border-spacing-0 font-bold hover:bg-slate-50 bottom-3">

                <screen onClick={addToCart} className=" bg-orange-600 w-full"  >Processing</screen>
                           
                   </button>
              
                </div>):( <div>

                <button  onClick={()=> {alert("Plaese Login!")}} 
                className="bg bg-orange-500 uppercase border-spacing-0 font-bold hover:bg-slate-50 bottom-3">

                 <span hidden  className="bg bg-orange-600 W-90" >Processing</span>
                             <p   className="bg bg-orange-600 W-90" onClick={d}>Sign here</p>
                </button>
                <button hidden onClick={()=> {alert("Plaese Login!")}} 
                  className=" bg-orange-500 uppercase border-spacing-0 font-bold hover:bg-slate-50 bottom-3"></button>
                      </div>)}
                                   
                                    </div>
          <button >Place Order</button>
        </Subtotal>

        
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  max-width: 1400px;
  background-color: rgb(234, 237, 237);
`;

const Main = styled.div`
  padding: 15px;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
  background-color: #fff;
  flex: 0.7;
  padding: 15px;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-left: 10px;

    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

const PaymentContainer = styled.div`
  margin-top: 15px;

  div {
    margin-top: 15px;
    margin-left: 15px;

    p {
      font-size: 14px;
    }
  }
`;

const OrderContainer = styled.div`
  margin-top: 30px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 100%;
  }
`;
const Description = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }

  p {
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;

    border-radius: 8px;
  }
`;
export default Payment;