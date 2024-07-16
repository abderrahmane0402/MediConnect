"use client"
import { session } from "@/stores/session"
import React from "react"

const CheckLogin = () => {
  const { user } = session((state) => state)
  // console.log(user)
  return <></>
}

export default CheckLogin
