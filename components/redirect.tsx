"use client"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const RedirectLogin = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace("/login")
  }, [])

  return <></>
}

export default RedirectLogin
