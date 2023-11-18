import { redirect } from "next/navigation"
import axios from 'axios';

export default async function SwitchPage() {
    axios.defaults.baseURL = 'http://172.29.45.36:8080';
    axios.defaults.withCredentials = true;

    try {
        const response = await axios.get('/user/auth', {
            headers: { justVerify: true },
        });
        if (response.data.message === 'GoTo Login') {
            return redirect('/auth')
        }
        return redirect('/home')
        
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error)
        return redirect('/auth')
    }
}
