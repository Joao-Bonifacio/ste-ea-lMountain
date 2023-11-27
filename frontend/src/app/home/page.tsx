import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import axios from "axios"
import Header from "@/components/Header"

export default async function Home() {
  axios.defaults.baseURL = 'http://localhost:8080'
  axios.defaults.withCredentials = true
  try {
    const response = await axios.get('/home',{
      headers: { token: JSON.stringify(cookies().get('token')) }
    })
    return (
    <div className="min-h-screen">
      <Header title={'Olá '+response.data.name.split(' ')[0]}/>
    </div>
    )
  } catch (error) {
    console.log(error)
    return redirect('/auth')
  }
}