import React from 'react'

export default function Header({ currentPage, changePage }) {
    return (
        <div className='bg-blue-300 h-16 '>
            <navbar>
                <ul className='flex p-4'>
                    <li className='mx-2' onClick={() => changePage('home')}>Home</li>
                    <li className='mx-2' onClick={() => changePage('about')}>About</li>
                    <li className='mx-2' onClick={() => changePage('skills')}>Skills</li>
                    <li className='mx-2' onClick={() => changePage('projects')}>Projects</li>
                    <li className='mx-2' onClick={() => changePage('contact')}>Contact</li>
                </ul>
            </navbar>
        </div>
    )
}