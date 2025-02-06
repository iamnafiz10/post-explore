"use client";
import React from 'react';

function Page() {
    return (
        <>
            <section id="post_explore_section" className="pt-[50px] pb-8">
                <div className="w-full mx-auto bg-white py-[20px]">
                    <div className="container">
                        <form>
                            <div className="flex items-center gap-3">
                                <input type="text"
                                       className="w-full text-[14px] py-2 px-4 focus:outline-none focus:border-primary focus:ring-0 border border-gray-300 rounded text-prgcolor"
                                       placeholder="https://support.nosres.com"/>
                                <button type='button'
                                        className="py-2 px-6 text-white text-[14px] border border-primary rounded bg-primary hover:bg-transparent hover:text-primary transition">
                                    Explore
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container mt-8">
                    <div className="link_card bg-white rounded pt-3 pb-10">
                        <h4 className="mb-2 px-8 text-prgcolor text-[16px]">Link Preview</h4>
                        <hr/>
                        <div className="px-8 mt-4">
                            <h4 className="text-center text-[14px] text-graycolor">
                                Here’s how the content will appear when this link is shared:
                            </h4>
                        </div>
                    </div>

                    <div className="error_card bg-white rounded mt-6 pt-3 pb-10">
                        <h4 className="mb-2 px-8 text-prgcolor text-[16px]">Error Warnings</h4>
                        <hr/>
                        <div className="px-8 mt-4">
                            <h4 className="text-center text-[14px] text-graycolor">
                                Here’s how the content will appear when this link is shared:
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;