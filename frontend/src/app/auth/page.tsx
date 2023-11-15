'use client'
import Join from "@/components/autenticate/Join";
import Login from "@/components/autenticate/Login";
import { useState } from "react";

export default function AuthUser() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center text-black">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
            <h1 className="text-2xl font-bold mb-6">{isLogin ? 'Login' : 'Join'}</h1>
            {isLogin ? <Login /> : <Join />}
            <p className="mt-4">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <span
                className="text-blue-500 cursor-pointer ml-1"
                onClick={() => setIsLogin(!isLogin)}
            >
                {isLogin ? 'Join now' : 'Login'}
            </span>
            </p>
        </div>
        </div>
    )
}