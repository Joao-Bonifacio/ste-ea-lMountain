'use client'
import { redirect } from "next/navigation"
import auth from "@hooks/isSession"

// eslint-disable-next-line @next/next/no-async-client-component
export default async function SwitchPage() {
  const isSession = auth()
  const cookie = document.cookie
  if(!cookie.includes("token=")) {
    document.cookie = "token=preset"
  }
  return isSession ? redirect('/home') : redirect('/auth')
}