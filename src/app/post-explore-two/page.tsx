"use client";
import React, {useState} from 'react';
import Skeleton from "react-loading-skeleton";
import useLoading from "@/app/useLoading";
import SliderOneImg from '../../../public/assets/images/slider1.jpg';
import Image from "next/image";
import {GoAlertFill} from "react-icons/go";
import Link from "next/link";
import {Modal} from "flowbite-react";

function Page() {
    const loading = useLoading();

    // Popup Area-------
    const [openStartUrlModal, setOpenStartUrlModal] = useState<boolean>(false);
    const [openStartTitleModal, setOpenStartTitleModal] = useState<boolean>(false);
    const [openStartTypeModal, setOpenStartTypeModal] = useState<boolean>(false);
    const [openStartImageModal, setOpenStartImageModal] = useState<boolean>(false);
    const [openStartDescriptionModal, setOpenStartDescriptionModal] = useState<boolean>(false);
    const [openStartAuthorModal, setOpenStartAuthorModal] = useState<boolean>(false);

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
                                        className="py-2 px-6 text-white text-[14px] rounded bg-[#4D7FB8] hover:bg-[#3A5F8A]">
                                    Explore
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container mt-8">
                    <div className="link_card bg-white rounded border pt-3 pb-10">
                        <h4 className="mb-2 px-8 text-prgcolor text-[16px] font-[500]">Link Preview</h4>
                        <hr/>
                        <div className="px-8 mt-4">
                            {loading ? (
                                <>
                                    <div className="text-center">
                                        <Skeleton height={10} width={300} count={1}/>
                                    </div>
                                </>
                            ) : (
                                <h4 className="text-center text-[14px] text-prgcolor">
                                    Here’s how the content will appear when this link is shared:
                                </h4>
                            )}
                            <div className="post_image px-4 bg-white flex justify-center mt-4">
                                <div
                                    className="w-full md:w-[50%] flex items-center cursor-pointer gap-3 bg-[#F3F4F6] rounded px-4 py-3">
                                    {loading ? (
                                        <>
                                            <div className="box mt-0">
                                                <Skeleton height={40} count={1}/>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <Image src={SliderOneImg} className="w-[18%] rounded" alt="PostImg"/>
                                            <div className="content_area">
                                                <h4 className="text-[14px] text-black font-[500]">
                                                    Experience the cutting-edge technology of the iPhone
                                                    16 Pro, now available in pristine, like-new condition...
                                                </h4>
                                                <h4 className="text-graycolor text-[14px]">blends.nosres.com</h4>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="error_card bg-white rounded border mt-6 pt-3 pb-5">
                        <h4 className="mb-2 px-8 text-prgcolor text-[16px] font-[500]">Error Warnings</h4>
                        <hr/>
                        <div className="px-8 mt-4">
                            {loading ? (
                                <>
                                    <div className="">
                                        <Skeleton height={30} count={2}/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="top_wrapper border rounded-t block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div className="col col-span-3 icon_wrap flex items-center gap-1 text-red-500">
                                            <div className="icon">
                                                <GoAlertFill size={17} className=""/>
                                            </div>
                                            <h4 className="text-[14px]">Warning</h4>
                                        </div>
                                        <div className="col col-span-9 text_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                The {`'og:image'`} property should be explicitly provided, even if a
                                                value
                                                can be
                                                inferred from other tags.
                                            </h4>
                                        </div>
                                    </div>
                                    <div
                                        className="top_wrapper border border-t-0 rounded-b block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div className="col col-span-3 icon_wrap flex items-center gap-1 text-red-500">
                                            <div className="icon">
                                                <GoAlertFill size={17}/>
                                            </div>
                                            <h4 className="text-[14px]">Warning</h4>
                                        </div>
                                        <div className="col col-span-9 text_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Add an og:description tag to the page to have control over
                                                the {`content's`}
                                                description on Blends.
                                            </h4>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="url_card bg-white rounded border mt-6 pt-3 pb-5">
                        <h4 className="mb-2 px-8 text-prgcolor text-[16px] font-[500]">URL Details</h4>
                        <hr/>
                        <div className="px-8 mt-4">
                            {loading ? (
                                <>
                                    <div className="">
                                        <Skeleton height={30} count={4}/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="top_wrapper hover:bg-[#F4F9FF] cursor-pointer border rounded-t block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div className="col md:col-span-3 icon_wrap flex items-center gap-1">
                                            <h4 className="text-[14px] text-prgcolor font-[500]">Last scraped</h4>
                                        </div>
                                        <div className="col md:col-span-9 text_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                3 hours ago
                                            </h4>
                                        </div>
                                    </div>

                                    <div
                                        className="top_wrapper group cursor-pointer hover:bg-[#F4F9FF] border border-t-0 block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div
                                            className="col md:col-span-3 icon_wrap flex items-center gap-1 text-prgcolor">
                                            <h4 className="text-[14px] font-[500]">Fetched URL</h4>
                                        </div>
                                        <div className="col md:col-span-9 text_wrap cursor-pointer">
                                            <Link href='#' className="text-[14px] text-primary group-hover:underline">
                                                https://blog.nosres.com/article/tips-for-selling-like-new-products-like-a-pro
                                            </Link>
                                        </div>
                                    </div>

                                    <div
                                        className="top_wrapper group cursor-pointer hover:bg-[#F4F9FF] border border-t-0 block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div
                                            className="col md:col-span-3 icon_wrap flex items-center gap-1 text-prgcolor">
                                            <h4 className="text-[14px] font-[500]">Canonical URL</h4>
                                        </div>
                                        <div className="col md:col-span-9 text_wrap cursor-pointer">
                                            <Link href='#' className="text-[14px] group-hover:underline text-primary">
                                                https://blog.nosres.com/article/tips-for-selling-like-new-products-like-a-pro
                                            </Link>
                                        </div>
                                    </div>

                                    <div
                                        className="top_wrapper hover:bg-[#F4F9FF] cursor-pointer border border-t-0 rounded-b block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div
                                            className="col md:col-span-3 icon_wrap text-prgcolor">
                                            <h4 className="text-[14px] font-[500]">Response Code</h4>
                                        </div>
                                        <div className="col md:col-span-9 text_wrap">
                                            <h4 className="text-[14px] text-green-400">
                                                200
                                            </h4>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="metadata_card bg-white rounded border mt-6 pt-3 pb-5">
                        <h4 className="mb-2 px-8 text-prgcolor text-[16px] font-[500]">Metadata Collected for This
                            Page:</h4>
                        <hr/>
                        <div className="px-8 mt-4">
                            {loading ? (
                                <>
                                    <div className="">
                                        <Skeleton height={30} count={7}/>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="top_wrapper hover:bg-[#F4F9FF] cursor-pointer border rounded-t block md:grid grid-cols-12 items-center py-3 px-4 ">
                                        <div className="col md:col-span-3 icon_wrap flex items-center gap-1">
                                            <h4 className="text-[14px] text-prgcolor font-[500]">Property</h4>
                                        </div>
                                        <div className="col md:col-span-9 text_wrap">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Value
                                            </h4>
                                        </div>
                                    </div>
                                    <div onClick={() => setOpenStartUrlModal(true)}
                                         className="top_wrapper group cursor-pointer hover:bg-[#F4F9FF] border border-t-0 block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div
                                            className="col md:col-span-3 icon_wrap flex items-center gap-1 text-prgcolor">
                                            <h4 className="text-[14px] font-[500]">URL (og:url) </h4>
                                        </div>
                                        <div
                                            className="col md:col-span-9 text_wrap cursor-pointer">
                                            <Link href='#' className="text-[14px] group-hover:underline text-primary">
                                                https://www.nosres.com
                                            </Link>
                                        </div>
                                    </div>

                                    <div onClick={() => setOpenStartTitleModal(true)}
                                         className="top_wrapper hover:bg-[#F4F9FF] cursor-pointer border border-t-0 block md:grid grid-cols-12 items-center py-3 px-4 ">
                                        <div className="col md:col-span-3 icon_wrap flex items-center gap-1">
                                            <h4 className="text-[14px] text-prgcolor font-[500]">Title (og:title)</h4>
                                        </div>
                                        <div
                                            className="col md:col-span-9 text_wrap cursor-pointer">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Tips for Selling Like-New Products Like a Pro
                                            </h4>
                                        </div>
                                    </div>

                                    <div onClick={() => setOpenStartTypeModal(true)}
                                         className="top_wrapper hover:bg-[#F4F9FF] cursor-pointer border border-t-0 block md:grid grid-cols-12 items-center py-3 px-4 ">
                                        <div className="col md:col-span-3 icon_wrap flex items-center gap-1">
                                            <h4 className="text-[14px] text-prgcolor font-[500]">Type (og:type)</h4>
                                        </div>
                                        <div
                                            className="col md:col-span-9 text_wrap cursor-pointer">
                                            <h4 className="text-[14px] text-prgcolor">
                                                Article
                                            </h4>
                                        </div>
                                    </div>

                                    <div onClick={() => setOpenStartImageModal(true)}
                                         className="top_wrapper group hover:bg-[#F4F9FF] cursor-pointer border border-t-0 block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div
                                            className="col md:col-span-3 icon_wrap flex items-center gap-1 text-prgcolor">
                                            <h4 className="text-[14px] font-[500]">Image (og:image)</h4>
                                        </div>
                                        <div
                                            className="col md:col-span-9 text_wrap cursor-pointer">
                                            <Link href='#' className="text-[14px] group-hover:underline text-primary">
                                                https://blog.nosres.com/_next/static/media/logo.e1f0ef5f.svg
                                            </Link>
                                        </div>
                                    </div>

                                    <div onClick={() => setOpenStartDescriptionModal(true)}
                                         className="top_wrapper hover:bg-[#F4F9FF] cursor-pointer border border-t-0 block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div
                                            className="col md:col-span-3 icon_wrap flex items-center gap-1 text-prgcolor">
                                            <h4 className="text-[14px] font-[500]">Description (og:description)</h4>
                                        </div>
                                        <div
                                            className="col md:col-span-9 text_wrap cursor-pointer">
                                            <h4 className="text-[14px] text-red-500">
                                                No description found
                                            </h4>
                                        </div>
                                    </div>

                                    <div onClick={() => setOpenStartAuthorModal(true)}
                                         className="top_wrapper hover:bg-[#F4F9FF] cursor-pointer border border-t-0 rounded-b block md:grid grid-cols-12 items-center py-3 px-4">
                                        <div
                                            className="col md:col-span-3 icon_wrap flex items-center gap-1 text-prgcolor">
                                            <h4 className="text-[14px] font-[500]">Author (og:author)</h4>
                                        </div>
                                        <div
                                            className="col md:col-span-9 text_wrap cursor-pointer">
                                            <h4 className="text-[14px] text-red-500">
                                                No description found
                                            </h4>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Url popup*/}
            <Modal size="xl"
                   dismissible
                   show={openStartUrlModal}
                   style={{
                       padding: '0px',
                       // backgroundColor: 'rgb(17 24 39 / 50%)',
                   }}
                   className="modal_cntrl"
                   onClose={() => setOpenStartUrlModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        borderColor: "#ccc"
                    }}
                >
                    <div>
                        <h4 className="text-[16px] text-prgcolor">
                            URL
                        </h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            This value is taken directly from the Open Graph tag provided on the page.
                        </h4>
                        <h4 className="text-[14px] text-prgcolor mt-4 font-[500]">
                            How to Update the URL
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-1">
                            Add a metadata tag for og:url in the <span className="text-[12px]">{`<head>`}</span> section
                            of your page. For example:
                        </h4>
                        <div className="mt-4 bg-[#FBFBFB] rounded w-full py-4 px-3 border text-prgcolor text-[14px]">
                            <h4>
                                &lt;<span className="text-red-500">meta</span> <span
                                className="text-amber-700">name</span> =<span
                                className="text-green-600">{`"url"`}</span>
                                <span className="text-amber-700"> property</span> =<span
                                className="text-green-600">{`"og:url"`}</span> <span
                                className="text-amber-700">content</span>=<span
                                className="text-green-600">{`"[Add URL here]"`}</span>&gt;
                            </h4>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Title popup*/}
            <Modal size="xl"
                   dismissible
                   show={openStartTitleModal}
                   style={{
                       padding: '0px',
                       // backgroundColor: 'rgb(17 24 39 / 50%)',
                   }}
                   className="modal_cntrl"
                   onClose={() => setOpenStartTitleModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        borderColor: "#ccc"
                    }}
                >
                    <div>
                        <h4 className="text-[16px] text-prgcolor">
                            Title
                        </h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            This value is taken directly from the Open Graph tag provided on the page.
                        </h4>
                        <h4 className="text-[14px] text-prgcolor mt-4 font-[500]">
                            How to Update the Title
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-1">
                            Add a metadata tag for og:title in the <span className="text-[12px]">{`<head>`}</span>
                            section of your page. For example:
                        </h4>
                        <div className="mt-4 bg-[#FBFBFB] rounded w-full py-4 px-3 border text-prgcolor text-[14px]">
                            <h4>
                                &lt;<span className="text-red-500">meta</span> <span
                                className="text-amber-700">name</span> =<span
                                className="text-green-600">{`"title"`}</span>
                                <span className="text-amber-700"> property</span> =<span
                                className="text-green-600">{`"og:title"`}</span> <span
                                className="text-amber-700">content</span>=<span
                                className="text-green-600">{`"[Add title here]"`}</span>&gt;
                            </h4>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Type popup*/}
            <Modal size="xl"
                   dismissible
                   show={openStartTypeModal}
                   style={{
                       padding: '0px',
                       // backgroundColor: 'rgb(17 24 39 / 50%)',
                   }}
                   className="modal_cntrl"
                   onClose={() => setOpenStartTypeModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        borderColor: "#ccc"
                    }}
                >
                    <div>
                        <h4 className="text-[16px] text-prgcolor">
                            Type
                        </h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            This value is taken directly from the Open Graph tag provided on the page.
                        </h4>
                        <h4 className="text-[14px] text-prgcolor mt-4 font-[500]">
                            How to Update the Type
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-1">
                            Add a metadata tag for og:type in the <span className="text-[12px]">{`<head>`}</span>
                            section of your page. For example:
                        </h4>
                        <div className="mt-4 bg-[#FBFBFB] rounded w-full py-4 px-3 border text-prgcolor text-[14px]">
                            <h4>
                                &lt;<span className="text-red-500">meta</span> <span
                                className="text-amber-700">name</span> =<span
                                className="text-green-600">{`"type"`}</span>
                                <span className="text-amber-700"> property</span> =<span
                                className="text-green-600">{`"og:type"`}</span> <span
                                className="text-amber-700">content</span>=<span
                                className="text-green-600">{`"[Add type here]"`}</span>&gt;
                            </h4>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Image popup*/}
            <Modal size="xl"
                   dismissible
                   show={openStartImageModal}
                   style={{
                       padding: '0px',
                       // backgroundColor: 'rgb(17 24 39 / 50%)',
                   }}
                   className="modal_cntrl"
                   onClose={() => setOpenStartImageModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        borderColor: "#ccc"
                    }}
                >
                    <div>
                        <h4 className="text-[16px] text-prgcolor">
                            Image
                        </h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            This value is taken directly from the Open Graph tag provided on the page.
                        </h4>
                        <h4 className="text-[14px] text-prgcolor mt-4 font-[500]">
                            How to Update the Image
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-1">
                            Add a metadata tag for og:image in the <span className="text-[12px]">{`<head>`}</span>
                            section of your page. For example:
                        </h4>
                        <div className="mt-4 bg-[#FBFBFB] rounded w-full py-4 px-3 border text-prgcolor text-[14px]">
                            <h4>
                                &lt;<span className="text-red-500">meta</span> <span
                                className="text-amber-700">name</span> =<span
                                className="text-green-600">{`"image"`}</span>
                                <span className="text-amber-700"> property</span> =<span
                                className="text-green-600">{`"og:image"`}</span> <span
                                className="text-amber-700">content</span>=<span
                                className="text-green-600">{`"[Add image here]"`}</span>&gt;
                            </h4>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Description popup*/}
            <Modal size="xl"
                   dismissible
                   show={openStartDescriptionModal}
                   style={{
                       padding: '0px',
                       // backgroundColor: 'rgb(17 24 39 / 50%)',
                   }}
                   className="modal_cntrl"
                   onClose={() => setOpenStartDescriptionModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        borderColor: "#ccc"
                    }}
                >
                    <div>
                        <h4 className="text-[16px] text-prgcolor">
                            Description
                        </h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            This value is taken directly from the Open Graph tag provided on the page.
                        </h4>
                        <h4 className="text-[14px] text-prgcolor mt-4 font-[500]">
                            How to Update the Image
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-1">
                            Add a metadata tag for og:description in the <span className="text-[12px]">{`<head>`}</span>
                            section of your page. For example:
                        </h4>
                        <div className="mt-4 bg-[#FBFBFB] rounded w-full py-4 px-3 border text-prgcolor text-[14px]">
                            <h4>
                                &lt;<span className="text-red-500">meta</span> <span
                                className="text-amber-700">name</span> =<span
                                className="text-green-600">{`"description"`}</span>
                                <span className="text-amber-700"> property</span> =<span
                                className="text-green-600">{`"og:description"`}</span> <span
                                className="text-amber-700">content</span>=<span
                                className="text-green-600">{`"[Add description here]"`}</span>&gt;
                            </h4>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Author popup*/}
            <Modal size="xl"
                   dismissible
                   show={openStartAuthorModal}
                   style={{
                       padding: '0px',
                       // backgroundColor: 'rgb(17 24 39 / 50%)',
                   }}
                   className="modal_cntrl"
                   onClose={() => setOpenStartAuthorModal(false)}>
                <Modal.Header
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        borderColor: "#ccc"
                    }}
                >
                    <div>
                        <h4 className="text-[16px] text-prgcolor">
                            Author
                        </h4>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body">
                        <h4 className="text-graycolor text-[14px]">
                            This value is taken directly from the Open Graph tag provided on the page.
                        </h4>
                        <h4 className="text-[14px] text-prgcolor mt-4 font-[500]">
                            How to Update the Image
                        </h4>
                        <h4 className="text-graycolor text-[14px] mt-1">
                            Add a metadata tag for og:author in the <span className="text-[12px]">{`<head>`}</span>
                            section of your page. For example:
                        </h4>
                        <div className="mt-4 bg-[#FBFBFB] rounded w-full py-4 px-3 border text-prgcolor text-[14px]">
                            <h4>
                                &lt;<span className="text-red-500">meta</span> <span
                                className="text-amber-700">name</span> =<span
                                className="text-green-600">{`"author"`}</span>
                                <span className="text-amber-700"> property</span> =<span
                                className="text-green-600">{`"og:author"`}</span> <span
                                className="text-amber-700">content</span>=<span
                                className="text-green-600">{`"[Add author here]"`}</span>&gt;
                            </h4>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
        ;
}

export default Page;