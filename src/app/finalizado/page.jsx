'use client';

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

const Page = () => {
    return (
        <div className='w-full min-h-screen items-center justify-center flex flex-col'>
            <ParticionarPalavra  palavra={"Pedido efetuado!"} className='flex font-semibold text-2xl' />
        </div>
    )
}

function ParticionarPalavra({palavra, className}) {
    const myText = useRef()
    const letras = palavra.split('')

    useEffect(()=>{ 
        if(myText.current) {
            gsap.from(myText.current.children, {
                y: -10,
                opacity: 0,
                stagger: 0.1,
                duration: .08
            })
    
            gsap.to(myText.current.children, {
                opacity: 1,
                stagger: 0.1,
                duration: .08
            })

            // setTimeout(() => {
            //     window.location = '/'
            // }, 3000)
        }
    }, [])


    return (
        <div ref={myText} className='flex'>
            {
                letras.map((letra, index) => {
                    return (
                        <div key={index} className={className}>
                           {letra === ' ' ? '\u00A0' : letra}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Page