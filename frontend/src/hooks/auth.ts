import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import axios from "axios"

export default async function SwitchPage() {
    axios.defaults.baseURL = 'http://172.29.45.36:8080';
    axios.defaults.withCredentials = true;

    const response = await axios.get('http://172.29.45.36:8080/user/auth', {
        headers: { cookie: cookies(), justVerify: true }
    })
    if (response.data.message === 'GoTo Login') {
        return redirect('/auth')
    }
    console.log(response);
    return redirect('/home')
}
