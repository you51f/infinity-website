"use client"
import React, { useEffect } from 'react'
import { useStateContext } from '../context/StateContext';

const GetPromo = (fetchedPromos) => {
  const { savedPromos, setSavedPromos } = useStateContext();

  useEffect(() => {
    setSavedPromos(fetchedPromos)
  }, [])
  
  return (
    <div></div>
  )
}

export default GetPromo