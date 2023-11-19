import axios from "axios"
import { redirect } from "next/navigation";
import { cookies } from "next/headers"

export default async function Home() {
  axios.defaults.baseURL = 'http://172.29.45.36:8080';
  axios.defaults.withCredentials = true
  try {
    const response = await axios.get('/home',{
      headers: { token: JSON.stringify(cookies().get('token')) }
    })
    return (
    <div>    
      <h1>Olá {response.data.name.split(' ')[0]}</h1>
    </div>
    )
  } catch (error) {
    redirect('/auth')
  }
  
}