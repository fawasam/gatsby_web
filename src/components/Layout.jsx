import React from 'react'
import Navbar from './Navbar'
import  "../styles/global.css"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
               {/* content for each page   */}
               {children}
            </div> 
            <footer>
                <p>Copyright 2021 fawasam</p>
            </footer>
            
        </div>
    )
}

export default Layout
