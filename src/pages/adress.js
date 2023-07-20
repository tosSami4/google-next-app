import React, { useState } from "react";

import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import Header from "@/components/Header";
import {setAdress, incrementQuantity} from '../redux/CartSlice'
import { useRouter } from "next/router";
import { useStateValue } from "@/Store/Store";

function Address() {
  const [{user,}, dispatch] = useStateValue();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const router =useRouter()

  
  const deliver = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullName,
        phone,
        flat,
        area,
        city,
        state,
      },
    });

    router.push("/payment");
  };


    
  

  return (
    <div className=" w-full h-full bg-orange-600">
        <Header />
    <div className=" m-4 p-5 justify-center items-center">
    
      <div>
        <div className="m-2">
          <div>
          <p className="m-2">Email</p>
          <span>{user?.email}</span>
            <p className="m-2">Full Name</p>
            <input
              required
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              className="m  m-2 w-60"
              placeholder="John Smith"
              value={fullName}
           />
          </div>
          <div>
            <p className="m-2">Phone Number</p>
            <input
              type="text"
              className="m  m-2 w-60"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required
              minlength="10"
              maxlength="20"
            />
          </div>
          <div>
            <p className="m-2">Flat, House no. Building, Company</p>
            <input
            required
              type="text"
              className="m  m-2 w-60"
              onChange={(e) => setFlat(e.target.value)}
              value={flat}
            />
          </div>
          <div>
            <p className="m-2">Area, Colony, Street</p>
            <input
            required
              type="text"
              className="m  m-2 w-60"
              onChange={(e) => setArea(e.target.value)}
              value={area}
            />
          </div>
          <div>
            <p className="m-2">Landmark</p>
            <input
              type="text"
              className="m  m-2 w-60"
              onChange={(e) => setLandmark(e.target.value)}
              value={landmark}
              required
            />
          </div>
          <div>
            <p className="m-2">Town/City</p>
            <input
            className="m  m-2 w-60"
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </div>
          <div >
            <p className="m-2">State/Province</p>
            <input className="m  m-2 w-60"
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
          </div>

          <button className="up bg-green-500 font-bold p-1 m-2" onClick={deliver} >Deliver to this Address</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Address;