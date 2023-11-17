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
  ): Promise<void> => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://172.29.45.36:8080/user/join', data);
  
      if (response.status === 201) {
        console.log('Registration successful');
      } else {
        console.log('Error during registration');
      }
    } catch (error) {
      console.error('Error processing the request:', error);
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