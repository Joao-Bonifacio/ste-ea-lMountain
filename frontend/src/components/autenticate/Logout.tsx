'use client'
import { useState } from "react"
import axios from "axios"
import { redirect } from 'next/navigation'

const Logout = () => {
  axios.defaults.baseURL = 'http://172.29.45.36:8080';
  axios.defaults.withCredentials = true
  const [submit, setSubmit] = useState(false)

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const response = await axios.post('/user/logout')
    if (response.status === 201) {
      setSubmit(true)
    }
  }

  return !submit ? (
    <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Logout
        </button>
    </form>
  ): redirect('/home')
}

export default Logout