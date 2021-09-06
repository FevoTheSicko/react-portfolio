
import React, { useState } from 'react'
import Header from './header'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/project'
import Contact from './pages/contact'

export default function Page() {
    const [currentPage, setCurrentPage] = useState('home')

    const renderPage = () => {
        if (currentPage === 'home') {
            return <Home></Home>
        } else if (currentPage === 'about') {
            return <About></About>
        }
        else if (currentPage === 'skills') {
            return <Skills></Skills>
        }
        else if (currentPage === 'projects') {
            return <Projects></Projects>
        }
        else if (currentPage === 'contact') {
            return <Contact></Contact>
        }

    }
    const changePage = (page) => setCurrentPage(page)
    return (
        <div className='h-screen m-auto'>
            <Header currentPage={currentPage} changePage={changePage}></Header>
            {renderPage()}
        </div>
    )
}