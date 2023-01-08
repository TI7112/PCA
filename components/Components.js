import Link from 'next/link'
import React from 'react'

export const Header = ({ data }) => {
    return (
        <>
            <div className="flex justify-between px-10 items-center bg-gradient-to-r from-blue-700 to-pink-500 text-white py-2">
                <div className="flex items-center gap-5">
                    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-red-600 to-pink-600 text-white font-semibold font-serif rounded-full w-28 h-28 p-10">
                        <p>Club</p>
                        <p>Association</p>
                    </div>
                    <div className="">
                        <p className='text-3xl font-semibold font-serif '>PCE, Purnea</p>
                        <p className='text-3xl font-semibold font-serif '>Club Association</p>
                    </div>
                </div>
                <div className="flex gap-8 items-center">
                    {data.map((curElem, index) => (
                        <Link key={index} href={curElem.slug}><p className='cursor-pointer text-lg font-semibold hover:underline underline-offset-4 duration-500'>{curElem.title}</p></Link>
                    ))}
                    <button className='ml-5 text-lg font-semibold font-serif px-10 py-1 bg-gradient-to-r from-pink-500 to-red-500 border hover:from-red-500 hover:to-pink-500 duration-500'>JOIN NOW</button>
                </div>

            </div>
        </>
    )
}

export const Page1 = () => {
    return (
        <>
            <div className="bg-[url('/background.jpg')] bg-cover py-20 brightness-75 px-32 bg-fixed">
                <div className="flex justify-center w-full py-12">

                    <button className='ml-5 text-lg font-semibold font-serif px-10 py-1 bg-gradient-to-r from-pink-500 to-red-500 border hover:from-red-500 hover:to-pink-500 duration-500 text-white'>Donate Us</button>
                </div>
                <div className="text-white w-[35rem] py-10">
                    <p className='text-4xl font-semibold font-serif '>Join our club</p>
                    <p className='text-4xl font-semibold font-serif '>Pce, Club Association</p>
                    <p className='mt-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus reprehenderit officia dicta deserunt odit eum. Voluptates eaque impedit, quo velit saepe nesciunt? Explicabo possimus numquam quasi, amet a impedit fuga iure ratione omnis recusandae quam ducimus beatae optio in.</p>
                </div>
            </div>
        </>
    )
}


export const Clubview = ({ data }) => {
    return (
        <>
            <div className="flex justify-center gap-8">
                {data.map((curElem, index) => (
                    <div key={index} className="bg-black hover:bg-gray-900 cursor-pointer border-2 w-96 border-violet-400 px-6 py-8 hover:scale-105 duration-300">
                        <div className="flex justify-center py-5">
                            <img className='w-40 rounded-full' src={curElem.imgurl} alt="" />
                        </div>
                        <p className='text-4xl font-semibold font-serif text-center py-2'>{curElem.title}</p>
                        <p className='text-lg'>{curElem.description}</p>
                    </div>))}
            </div>
        </>
    )
}

export const EventView = ({ data }) => {
    return (
        <>
            <div className="flex px-80">
                <div className="w-1/3 ">
                    {data.map((curElem, index) => (
                        <div key={index} className="bg-black w-fit hover:bg-gray-900 duration-300 flex items-center p-4 border-b">
                            <img className='w-40 border' src={curElem.imgurl} alt="" />
                            <div className="px-10 flex flex-col gap-5">
                                <p>{curElem.title}</p>
                                <p>Day : {curElem.date}</p>
                                <p>Time {curElem.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-2/3 ">
                    <video src={"https://media.istockphoto.com/id/849372376/video/night-city-time-lapse-panning-left.mp4?s=mp4-640x640-is&k=20&c=U_7MvY24CwIa9w0ZZqIep4GaYWXP65zYoFNxJixCOJU="} autoPlay loop></video>
                    <div className="text-white w-[40rem] border border-violet-500 py-10 bg-black hover:bg-gray-900 mt-10 p-6">
                        <p className='text-4xl font-semibold font-serif '>Join our club</p>
                        <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt eligendi odit tempora repellendus odio porro pariatur quibusdam! Nulla neque sequi dolorum fugiat commodi et quo voluptas enim odit minus? Ipsa veritatis velit architecto vitae tenetur nulla maxime molestiae, nobis nam repellat vel quae sequi temporibus adipisci id sed fugiat.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export const FeturesView = ({ data }) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[60vw] py-20 grid grid-cols-3 gap-20">
                    {data.map((curElem, index) => (
                        <div key={index} className="bg-black border border-slate-600 rounded-lg w-80 h-96 relative">
                            <img className='w-16 absolute -mt-8 left-5 shadow-xl' src={curElem.imgurl} alt="" />
                            <div className="pt-16 flex justify-between px-5">
                                <p className='text-xl text-white'>{index + 1}. {curElem.title}</p>
                                <p className='text-xl text-white'>{"->"}</p>
                            </div>
                            <div className="text-gray-500 py-5 px-6">
                                <p>{curElem.description}</p>
                            </div>
                            <div className="w-full h-5 bg-gradient-to-r from-blue-800 via-red-600 to-orange-500 absolute bottom-0 rounded-b-lg"></div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export const SponsershipView = ({ data }) => {
    return (
        <>
            <div className="grid grid-cols-3 px-80 gap-8 pb-10">
                {data.map((curElem, index) => (
                    <div key={index} className="bg-slate-600 rounded-xl">
                        <div className="flex justify-center py-6 border-b-4 border-slate-800">
                            <img className='rounded-full' src={curElem.imgurl} alt="" />
                        </div>
                        <div className="text-center py-5">
                            <p className='text-xl font-serif font-semibold'>{curElem.name}</p>
                            <p className='text-gray-900 text-sm font-serif font-semibold py-2'>{curElem.designation}</p>
                            <p className='text-gray-900 italic py-3 text-sm font-serif font-semibold px-4'>{curElem.description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </>
    )
}

export const GallaryView = ({data}) => {
    return (
        <>
            <div className="grid grid-cols-4 px-60 ">

                {data.map((curElem, index) => (
                    <div key={index} className=" overflow-hidden w-80 h-80">
                        <img className='w-80 h-80 grayscale hover:grayscale-0 -rotate-45 scale-150 hover:scale-100  duration-500 hover:rotate-0'  src={curElem.imgurl} alt="" />
                    </div>
                ))}
            </div>
        </>
    )
}
