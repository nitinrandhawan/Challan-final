"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const [isToastVisible, setIsToastVisible] = useState(false);
const router=useRouter();

const {token,setToken,email,setEmail}=useContext(AuthContext);

  const showToast = () => {
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  };

  const handleLogout=()=>{
    if(typeof window !== "undefined"){
    localStorage.removeItem("token");
    setToken(false);
    setEmail(null);
    router.push("/auth")
    toast.success("Logout successful!");
    }
  }
  return (
    <>
      <div className="navbar bg-base-100 text-white ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Challan Details</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 items-center justify-center">
            
           
            <li>
              <Link href="/">View Challan</Link>
            </li>
            <li>
              <Link href="/challan/add-challan">Add Challan</Link>
            </li>
            <li>
              <Link href="/client">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
                View Client
              </Link>
            </li>
            <li>
              <Link href="/client/add-client">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                </svg>
                Add Client
              </Link>
            </li>

            {/* Profile / Login Dropdown */}
            <li>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1 text-white">
              <p>Profile</p> 
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 "
                  style={{ position: "absolute", top:50, right: 0 }}
                >
                  <li>
                    <p>{email}</p>
                      <button
                        className=" hover:bg-red-500 text-white p-2 rounded"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                   
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Toast Notification */}
      {isToastVisible && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>You have successfully clicked the Login button!</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
