'use client';
import React, {useState} from 'react';
import LogoImg from '@/../public/assets/images/logo.svg';
import Link from "next/link";
import Image from "next/image";
import {HiUserCircle} from "react-icons/hi";

function Header() {
    // 👇️ Toggle class on click Show And Hide Account (Icon)
    const [isAccountVisible, setAccountVisible] = useState(false);
    const handleAccountClick = () => {
        const account = document.getElementById('account_dropdown_menu');
        if (account) {
            if (isAccountVisible) {
                account.classList.remove('show-account-dropdown-menu');
            } else {
                account.classList.add('show-account-dropdown-menu');
            }
            setAccountVisible(!isAccountVisible);
        }
    };
    return (
        <>
            <section id="header-section" className="relative">
                <header
                    className="py-4 flex items-center h-[50px] lg:py-2 shadow-sm bg-[#1E2A32] w-full lg:relative z-50"
                    style={{
                        position: 'fixed',
                    }}
                >
                    <div className="container flex items-center justify-between">
                        <div className="logo">
                            <Link href='/' className="flex items-center gap-2">
                                <Image src={LogoImg} className="h-10 w-7" alt="LogoImg"/>
                                <span className="text-white text-[16px]">Post Explorer</span>
                            </Link>
                        </div>

                        <div className="nav flex items-center text-[14px] gap-6">
                            <div className="five">
                                <div className="dropdown inline-block relative">
                                    <div onClick={handleAccountClick}
                                         className="mt-2 text-center cursor-pointer text-white transition relative">
                                        <HiUserCircle size={33}/>
                                    </div>

                                    <div id="account_dropdown_menu"
                                         className="account-dropdown-menu absolute text-gray-700 pt-1 for-account transition-all ease-linear duration-300 bg-white rounded shadow border">
                                        <div className="container">
                                            <div
                                                className="col flex items-center px-2 h-[85px]">
                                                <div className="flex items-center gap-3">
                                                    <HiUserCircle size={70} className="text-primary"/>
                                                    <div className="text">
                                                        <h2 className="text-[#252C32] font-semibold text-[14px]">
                                                            Nosres Account
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <p className="mt-2">
                                                <Link href='#' className="text-primary">
                                                    Sign in
                                                </Link> to your Nosres Account or <Link href='#'
                                                                                        className="text-primary">
                                                create
                                            </Link> one. A Nosres account gives you access to
                                                all Nosres services.
                                            </p>
                                            <div className="flex justify-start text-center">
                                                <Link href='/'
                                                      className="mt-2 w-[120px] py-2 flex text-[14px] items-center justify-center gap-2 border rounded text-primary hover:bg-primary hover:text-white hover:border-primary">
                                                    Learn More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        </>
    )
        ;
}

export default Header;