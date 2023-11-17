'use client'
import { useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
interface data {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const [data, setdata] = useState<data>({
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
  ): Promise<void> => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://172.29.45.36:8080/user/login', data);
  
      if (response.status === 201) {
        console.log('Login successful');
      } else {
        console.log('Error during login');
      }
    } catch (error) {
      console.error('Error processing the request:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          Login
        </button>
    </form>
  );
};

export default Login;