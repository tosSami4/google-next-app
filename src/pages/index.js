import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import ProductFeed from '@/components/ProductFeed'
import Footer from '@/components/Footer'


import React,{useEffect} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (

         <header>



     
 
            <Header/>
            <Banner/>
             <ProductFeed/> 
             <Footer/>
           
          </header>
   
  
  )
}
  
  