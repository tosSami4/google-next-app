

import React ,{useState,useEffect}from"react";

import CardOrder  from "../components/CardOrder";


import { collection,query , getDoc, orderBy,orderSnapshots, doc, snapshotEqual,
   QuerySnapshot,
   getDocs,
   Firestore} from "firebase/firestore/lite"

import { db } from "@/firebase";
import { useStateValue } from "@/Store/Store";
import Header from "@/components/Header";




function orders () {
  const [order1, setOrder1] = useState([]);
  
  const [{user}] = useStateValue();


  const ordersRef = collection(db, "cart");
  
console.log(order1);
  useEffect(() => {

    const get = async ()=>{

    
        const data1 =  await getDocs(ordersRef);
        setOrder1(data1.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id,
          
        })))
        
   
      
      
    };
    get()
  }, [])
  
    
     
 

   



  
  return (
    <div className="">
      <Header/>
      <h1 className="">
        Showing All Your Orders
      </h1>
      <div className="">
      {order1?.map(cart =>{
        return(
          <CardOrder image={cart.image} name={cart.name}  price={cart.price} date={cart.createdAt}/>
        )
     
      }
        
        
      
      
      

           
   
      

   
      
     
      
     )}
      </div>
    </div>
  );
};

export default orders;