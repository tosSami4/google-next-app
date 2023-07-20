import { useStateValue } from "@/Store/Store";
import {  useRouter } from "next/router";
import React from "react";

import CurrencyFormatter from "react-currency-format";
import { useSelector } from 'react-redux'
import { getBasketTotal } from "../redux/CartSlice";



function Subtotal() {
  const [{ basket }] = useStateValue();
  const router =useRouter()

  return (
    <div className="subtot bg-slate-100">
      <CurrencyFormatter
        renderText={(value) => (
          <div>
            <p className=" text-black uppercase m-2 font-bold ">
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift   text-black uppercase m-2 font-bold ">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
      
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className=" m-5  bg-orange-500" onClick={()=>router.push('/adress')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;