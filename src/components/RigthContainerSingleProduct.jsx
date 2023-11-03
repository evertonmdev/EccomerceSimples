'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const RigthContainerSingleProduct = ({product}) => {
    const adicionarNoCarrinho = () => {
        const items = localStorage.getItem('items_carrinho') || '[]'
        const parsedItems =  JSON.parse(items)
        toast.success("Item adicionado", {
            autoClose: 400
        });    
        const itemJaAdicionado = parsedItems.some(produto => produto.id === product.id)

        if(!itemJaAdicionado) {
            parsedItems.push({
                ...product,
                quantidade: 1
            })
            localStorage.setItem('items_carrinho', JSON.stringify(parsedItems))
        } else {
            const itemIndex = parsedItems.findIndex(produto => produto.id === product.id)
            parsedItems[itemIndex].quantidade++
            console.log(parsedItems[itemIndex])
            localStorage.setItem('items_carrinho', JSON.stringify(parsedItems))
        }
    }
    
    return (
        <div className="flex flex-col gap-5 w-full h-full md:w-1/2 justify-center items-center">
            <Image 
                width={500}
                height={500}
                src={product.image}
                className="w-full max-w-[512px] h-full max-h-[420px] object-scale-down"
            />
            <div className="flex gap-2 flex-wrap">
                <Link href={"/carrinho"} className="flex-1 bg-white shadow-sombraCaixuda transition-all duration-200 lg:hover:px-14 hover:bg-green-500 hover:text-white rounded-md py-5 px-10  cursor-none flex justify-center items-center">
                Comprar
                </Link>
                <button onClick={adicionarNoCarrinho} className="flex-1 min-w-fit bg-white shadow-sombraCaixuda transition-all duration-200 lg:hover:px-14 hover:bg-blue-500 hover:text-white rounded-md py-5 px-10 cursor-none flex justify-center items-center">
                Adicionar no carrinho
                </button>
            </div>
        </div>
    );
};

export default RigthContainerSingleProduct;
