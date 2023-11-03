'use client'
import {gsap} from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'

const CardProduct = ({title, description, price, category, rate, img, id}) => {
    const route = usePathname()
    const path = `${route}product/${id}`

    const imgContainer = useRef()
    const container = useRef()

    useEffect(() => {
        const onMouseEnter = () => {
            gsap
            .to(container.current, {
                scale: 1.04
            })
        }

        const onMouseLeave = () => {
            gsap
            .to(container.current, {
                scale: 1
            })
        }

        container.current.addEventListener('mouseenter', onMouseEnter)
        container.current.addEventListener('mouseleave', onMouseLeave)
    }, [])

    return (
        <div ref={container} className="p-4 w-full md:w-1/3 lg:1/3">
            <div className="h-full border-2 border-primary border-opacity-60 rounded-lg overflow-hidden">
                <Image width={500} height={500} ref={imgContainer} className="w-full h-56 object-scale-down object-center py-2" src={img} alt="blog" />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 line-clamp-3 text-ellipsis h-12">{title}</h1>
                    <p className="leading-relaxed mb-3 h-[150px] overflow-y-auto ScrollHidden">{description}</p>
                    <div className="flex items-center flex-wrap">
                        <Link href={path} className="text-indigo-400 hover:text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ">Veja mais
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                        </Link>
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <span className='text-gray-700 text-md'>
                            R${price.toFixed(2)} 
                        </span>| { rate } 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduct