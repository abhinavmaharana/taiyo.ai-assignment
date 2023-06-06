import React from 'react'
import Home from './CRUD/Home'

function MainApp() {
  return (
    <>
        <nav
            style={{ backgroundColor: "#4C86C1", paddingLeft: "10px" }}
            className="flex justify-center items-center  px-4 py-2"
        >
            <h1 className="text-white text-center text-2xl font-bold">
                Contact Page
            </h1>
        </nav>
        <Home />
    </>
  )
}

export default MainApp