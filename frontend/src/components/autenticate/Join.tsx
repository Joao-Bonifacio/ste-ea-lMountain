'use client'
import { useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';

interface data {
  name: string;
  email: string;
  password: string;
}

const Join: NextPage = () => {
  const [data, setdata] = useState<data>({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/user/auth')
      if (response.status === 201) { 
        //console.log("ok")
      }else {
        //console.log("erro")
      }
      
    } catch (error) {
      console.error('Erro ao processar a requisição:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Full Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your full name"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Join
        </button>
    </form>
  );
};

export default Join;
/* Join() {

    return (
    <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Full Name</label>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your full name"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Join
        </button>
    </form>
    )
}
*/