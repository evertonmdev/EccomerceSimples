'use client'

import { MinusIcon, PlusIcon, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CartProduct = ({product, onChange, produtos}) => {
  const [quantidade, setQuantidade] = useState(product.quantidade)

  const LocalizarProduto = () => {
    const data = JSON.parse(localStorage.getItem('items_carrinho') || '[]')
    const indexProduct = data.findIndex((produto) => produto.id == product.id)
    return {
      indexProduct,
      data
    }
  }

  const RemoverQuantidade = () => {
    const { data, indexProduct } = LocalizarProduto()
    const produto = data[indexProduct]

    if(produto.quantidade > 1) {
      produto.quantidade--
      localStorage.setItem('items_carrinho', JSON.stringify(data))
      setQuantidade(produto.quantidade)
      onChange(data)
    }
  }

  const AdicionarQuantidade = () => {
    const { data, indexProduct } = LocalizarProduto()
    const produto = data[indexProduct]
    
    produto.quantidade++
    localStorage.setItem('items_carrinho', JSON.stringify(data))
    setQuantidade(produto.quantidade)
    onChange(data)

  }

  const RemoverProduto = () => {
    const { data, indexProduct } = LocalizarProduto()
    const produto = data[indexProduct]
    
    const novoArray = produtos.filter(prod => prod.id != produto.id)

    localStorage.setItem('items_carrinho', JSON.stringify(novoArray))
    onChange(novoArray)

  }

  return (
    <div className="flex gap-3 p-2 group ">
      <div className="w-36 h-36">
        <Image
            width={500}
            height={500}
            src={product?.image || ""}
            className="object-scale-down w-full h-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4 md:gap-0">
        <div>
          <div className="w-full relative">
            <h2 className="font-semibold text-xl">{product?.title}</h2>
            <button onClick={RemoverProduto}>
              <Trash className="hidden group-hover:block absolute top-7 -right-2 md:top-0 md:-right-2 text-red-600 w-5" />
            </button>
          </div>
          <p className="line-clamp-3 max-w-full text-md leading-4">
            {product?.description}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center  divide-x-2 divide-black">
            <div className="flex gap-2 px-2">
             <button onClick={RemoverQuantidade}>
               <MinusIcon className="hover:text-red-600 " />
             </button>
             <button onClick={AdicionarQuantidade}>
               <PlusIcon  className="hover:text-green-600" />
             </button>
            </div>
            <div className="flex gap-2 px-2">
              <span> {quantidade}x </span>
              <span> R${(product?.price).toFixed(2)} </span>
            </div>
          </div>
          <span>R${(quantidade * product?.price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
