/* eslint-disable no-unused-vars */
import React from 'react'

export const Footer = () => {
    return (
        <div className='bg-gray-100 w-full p-6 sm:flex-col sm:items-center gap-1 sm:gap-4 '>
            <div className='container mx-auto px-4 flex justify-between my-8'>
                <ul className='text-blue-900'>
                    <li className='font-bold text-xl'>Country</li>
                    <li>Reginos</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airport</li>
                    <li>Hotels</li>
                </ul>
                <ul className='text-blue-900 md: mx-1 '>
                    <li className='font-bold text-xl'>Hotels</li>
                    <li>Reginos</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airport</li>
                </ul>
                <ul className='text-blue-900 mx-2'>
                    <li className='font-bold text-xl'>Reginos</li>
                    <li>Reginos</li>
                    <li>Districts</li>
                    <li>Airport</li>
                    <li>Reginos </li>
                </ul>

                <ul className='text-blue-900'>
                    <li className='font-bold text-xl'>Districts</li>
                    <li>Reginos</li>
                    <li>Cities</li>

                </ul>

            </div>
            <div className='text-center '> Copyright @ 2024 Peter</div>
        </div>
    )
}
