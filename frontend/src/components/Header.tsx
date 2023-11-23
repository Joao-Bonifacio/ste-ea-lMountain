import React from "react"
import Logout from "./autenticate/Logout";

interface HeaderProps {
    title: string;
  }

const Header: React.FC<HeaderProps> = ({ title }) => {    
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between">
            <h1 className="text-2xl font-semibold">{ title }</h1>
            <Logout />
        </header>
    )
}
  
  export default Header;