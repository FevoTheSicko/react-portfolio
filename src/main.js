import React, { useState } from 'react'



export default function Main() {
    const [currentPage, pageChange] = useState('home')

    const renderPage = () => {
        if (currentPage === 'home') {
            return (<Home />)
        }
        else if (currentPage === 'about') {
            return (<About />)
        }
        else if (currentPage === 'skills') {
            return (<Skills />)
        }
        else if (currentPage === 'work') {
            return (<Work />)
        }
        else {
            return (<Contact />)
        }
    }

    function changePage(state) {
        pageChange(state)
    }

}
