'use client';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LeftContainerSingleProduct = ({ product }) => {
    const titulo = useRef(null)
    const descricao = useRef(null)
    const preco = useRef(null)

    
    useEffect(() => {
        const tl = new gsap.timeline()
        tl.from(titulo.current, {
            y: 100,
            opacity: 0,
            duration: .4
        })
        .from(descricao.current, {
            y: 100,
            opacity: 0,
            duration: .4
        })
        .from(preco.current, {
            x: 100,
            opacity: 0,
            duration: .5
        })
    }, [])

    return (
        <div className="w-full md:w-1/2 h-full relative flex flex-col gap-10">
            <div>
                <h3 ref={titulo} className="text-3xl font-bold">{product.title}</h3>
                <p  ref={descricao} className="text-lg mt-2 ">{product.description}</p>
            </div>
            <div>
                <span ref={preco} className="text-xl w-fit pr-10 py-3 rounded-lg text-black/80">
                    R${product.price.toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default LeftContainerSingleProduct;
