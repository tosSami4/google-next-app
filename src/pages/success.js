import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Success = () => {
  const router =useRouter()

  const add =()=>{
    router('/orders')
  }
  return (
    <div className='h-screen grid place-items-center'>

      <div className='text-center'>

        <h1 className='text-8xl font-bold'>Thank You</h1>
        <p className='text-center text-2xl'>Order Placed Successfully</p>

        <Link href="/">
          <p className='bg-red-600 text-white py-4 px-12 mt-4 hover:bg-red-800 cursor-pointer'>Continue Shopping</p>
        </Link>
        <Link href="/orders">
          <p className='bg-red-600 text-white py-4 px-12 mt-4 hover:bg-red-800 cursor-pointer'
           onClick={add}>Go To Orders</p>
        </Link>

      </div>

    </div>
  )
}

export default Success