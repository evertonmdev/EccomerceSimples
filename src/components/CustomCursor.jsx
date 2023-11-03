'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
    const cursor = useRef()
    
    useEffect(() => {
        const links = document.querySelectorAll('a');

        const onMouseMove = event => {
            const { clientX, clientY } = event
            gsap.to(cursor.current, {
                top: clientY,
                opacity: 1,
                left: clientX,
                duration: .1
            })
        }
 
        const onLinkMouseEnter = () => {
            gsap.to(cursor.current, {
                scale: 1.5,
                duration: .2,
            })
        }

        const onLinkMouseLeave = () => {
            gsap.to(cursor.current, {
                scale: 1
            })
        }

        const onMouseLeave = () => {
            gsap.to(cursor.current, {
                opacity: 0
            })
        }

        document.addEventListener('mousemove', onMouseMove)
        document.addEventListener('touchmove', onMouseMove)
        document.addEventListener('mouseleave', onMouseLeave)


        links.forEach(link => {
            link.addEventListener('mouseenter', onLinkMouseEnter)
            link.addEventListener('mouseleave', onLinkMouseLeave)
        })
    }, [])

    return (
        <div ref={cursor} className=' w-6 h-6 cursor-none pointer-events-none ml-[-.75rem] mt-[-.75rem] bg-neutral-800/60 top-0 left-0 fixed rounded-full z-[9999]'>

        </div>
    )
}

export default CustomCursor