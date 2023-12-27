/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
const MailList = () => {
    return (
        <div className='w-full bg-blue-900 p-10 flex flex-col align-middle items-center gap-2  mt-4'>
            <h1 className='text-3xl text-white font-bold font-mono '> Save Time Save Money</h1>
            <p className='italic text-white my-4'> Sign up and we'll send the best deals to you</p>
            <div className='flex gap-2 '>
                <input   type="text" placeholder='Your Email' className='w-full p-2  outline-none rounded-none' />
                <button className=' bg-blue-500 rounded-lg text-white px-2 py-1 cursor-pointer'>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList
