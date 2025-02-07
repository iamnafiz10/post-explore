"use client";
import React from 'react';
import Skeleton from "react-loading-skeleton";
import LoadImg from '../../../public/assets/images/load.png';
import Image from "next/image";
import useLoading from "@/app/useLoading";

function Page() {
    const loading = useLoading();
    return (
        <>
            <section id="post_explore_section" className="pt-[50px] pb-8">
                <div className="w-full mx-auto bg-white py-[20px]">
                    <div className="container">
                        <form>
                            <div className="flex items-center gap-3">
                                <input type="text"
                                       className="w-full text-[14px] py-2 px-4 focus:outline-none focus:border-primary focus:ring-0 border border-gray-300 rounded text-prgcolor"
                                       placeholder="Enter a URL to view the information displayed when it’s shared on Blends"/>
                                <button type='button'
                                        className="py-2 px-6 text-white text-[14px] rounded bg-[#4D7FB8] hover:bg-[#3A5F8A]">
                                    Explore
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="welcome_card my-8 bg-white border rounded py-10 px-8">
                        <div className="grid grid-cols-2 items-center gap-4">
                            <div className="col">
                                {loading ? (
                                    <>
                                        <Skeleton height={20} count={1}/>
                                        <Skeleton height={100} count={1}/>
                                    </>
                                ) : (
                                    <>
                                        <h4 className="text-[18px] font-[500] text-prgcolor">
                                            Welcome to Content Explorer!
                                        </h4>
                                        <h4 className="text-[14px] text-prgcolor mt-3">
                                            Post Explorer helps you analyze any public link to uncover valuable insights
                                            about its content, performance, and SEO when shared on Blends or through
                                            In-App Messages. Whether it’s a blog post, product listing, or article, Post
                                            Explorer provides the tools you need to effectively optimize and enhance
                                            your
                                            content.
                                        </h4>
                                    </>
                                )}
                            </div>
                            <div className="col mt-4 md:mt-0">
                                <div className="post_image flex items-center justify-end mt-0">
                                    <Image src={LoadImg} className="rounded w-[90%]"
                                           alt="LoadImg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;