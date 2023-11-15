'use client'
import { redirect } from "next/navigation"
import auth from "@auth/isSession"

// eslint-disable-next-line @next/next/no-async-client-component
export default async function SwitchPage() {
  const isSession = auth()
  return isSession ? redirect('/home') : redirect('/auth')
}