import { useState } from "react";
import Sidebar from "./pages/Sidebar";
import { Outlet } from "react-router-dom";

const Dash = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="font-display relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
                <div className="flex h-full w-full">
                    <Sidebar open={open} setOpen={setOpen} />
                    <main className="flex flex-1 flex-col">
                        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

                            <p className="text-xl font-bold">Dashboard</p>

                            {/* Desktop Menu */}
                            <div className="hidden sm:flex items-center gap-8">
                                {/* <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a> */}
                                <div className="flex flex-1 items-center justify-end gap-4">
                                    <div className="relative w-full max-w-sm">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                        <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 h-10 placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-10 text-base font-normal leading-normal" placeholder="Search..." value="" />
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 min-w-0 px-2.5">
                                            <span className="material-symbols-outlined text-xl">notifications</span>
                                        </button>
                                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 min-w-0 px-2.5">
                                            <span className="material-symbols-outlined text-xl">help_outline</span>
                                        </button>
                                    </div>
                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" data-alt="User avatar" ></div>
                                </div>
                                {/* <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="relative cursor-pointer">
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] rounded-full">3</button>
                </div>

                <button className="cursor-pointer px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full">
                    Login
                </button>
            </div> */}
                            </div>


                            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                                {/* Menu Icon SVG */}
                                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                                </svg>
                            </button>

                         

                        </nav>
                         <div className="p-6">
                        <Outlet/>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default Dash;