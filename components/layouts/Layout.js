
'use client'
import { useEffect, useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Offcanvas from "./Offcanvas"

export default function Layout({ children }) {
    const [scroll, setScroll] = useState(0)

    const [isOffCanvas, setOffCanvas] = useState(false)
    const handleOffCanvas = () => setOffCanvas(!isOffCanvas)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])

    return (
        <>
            <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

            <Header scroll={scroll} isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas}/>

            {children}
            <Footer/>
        </>
    )
}
