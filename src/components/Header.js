import React, { useState ,useEffect} from 'react'
import Image from 'next/image'


import { BiMenu, BiSearch, BiSolidShoppingBagAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useStateValue } from '@/Store/Store';

import Link from 'next/link';

import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';


function Header() {
  const [{ basket,user },] = useStateValue();




  
  const [{}, dispatch] = useStateValue();


  const router = useRouter();


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);




  const add =()=>{
router.push('/')
  }

  const ord =()=>{
    router.push('/orders')
      }
    


  
  const handleAuthenticaton = () => {
    if (user)
  auth.signOut()
  }



  





  
  return (
     <div>

  <div className="  w-full h-full justify-between md:w-screen items-center  flex bg-black "  >  
    <div   className=" :" onClick={add}>
        <Image
            width={150}
            height={40}
            src="/soon.png"
            alt="amazon/logo"
            className="cursor-pointer p-4 "
          />  

           </div>
      
          <input type='text' className='items-end flex-1 bg-stone-50 sm:flex hidden hover:bg-orange-400' />
           
           <BiSearch  className='bg-waite w-200 h-7  hidden sm:flex  bg-orange-500 font-extrabold'/>
          <div className=' flex  mr-2 m-2 py-2 text-white'>
          <Link href={!user ?"/login" :'/login'}>
          <div  className='m-1 'onClick={handleAuthenticaton}>
            <button  className='d flex m-2'> {user ? "Sign Out" : "Sign In"}</button>
            <button className='flex 1-2' > Hello {user?.email}</button>

          </div>
          </Link>
          
          
     
          
        <div className= 'm-1  ' onClick={ord}>
          <button className='f flex m-2'>returns</button>
          <button className='flex m-2'>orders</button>
        </div>
          
          <div className=' m-1 ' onClick={()=>router.push('/checkout')}>
        
            <BiSolidShoppingBagAlt  className=' flex m-2'/>
            <button className='flex m-2 pt-2 '>{basket.length}</button>
            
          </div>
        
             </div>

      </div>
      <div className='bg- bg-slate-400 h-full  w-full  flex'>
        <span className='flex  p-2'>
          <BiMenu className='h-6  mt-2 object-cover'/>
          <span  className=' m-2 ml-2 mr-2'>All</span>
        </span>
        <span className='link m-4'>Prime Video</span>
        <span className='link m-4'>Amazon Bussiness</span>
        <span className='link m-4'>Today's Deats</span>
        <span className='link hidden lg:inline-flex m-4'>Electronics</span>
      </div>
    </div>
  )
}

export default Header
