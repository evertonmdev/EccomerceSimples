"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import CepAutocomplete from "@/components/CepAutocomplete";
import CartProduct from "@/components/CartProduct";

const Page = () => {
  const ContainerProducts = useRef()

  const [Produtos, setProdutos] = useState([]);
  const [AnimatedKitten, setAnimatedKitten] = useState(false)

  const finalizarPedido = () => {
    localStorage.setItem('items_carrinho', "[]")
    window.location = '/finalizado'
    setProdutos([])
  }

  useEffect(() => {
    const produtosNoCarrinho = JSON.parse(
      localStorage.getItem("items_carrinho") || '[]'
    );

    gsap.from('#title', {
      x: -200,
      duration: .4,
      ease: 'power3.easeIn'
    })
    gsap.to('#title', {
      opacity: 1,
      ease: 'power3.easeIn'
    })

    setProdutos(produtosNoCarrinho);
    
  }, []);

  useEffect(() => {
    if(Produtos.length > 0 && !AnimatedKitten) {
      gsap.from(ContainerProducts.current.children, {
        x: 200,
        stagger: .1,
        duration: .35,
        opacity: 0,
        ease: 'power3.easeIn'
      })
     
      setAnimatedKitten(true)
    }
  }, [Produtos])

  return (
    <section className="flex-1 min-w-full min-h-full gap-10 flex-col md:flex-row flex md:gap-2 pb-5 divide-y md:divide-y-0 md:divide-x divide-black/30 mt-6 md:mt-2">
      <div className="w-full md:w-3/5 ">
        {
          Produtos.length > 0 ? <h3 id='title' className="opacity-0 text-2xl font-semibold mb-5">Produtos</h3>
          : <h3 id='title' className="opacity-0 text-2xl font-semibold mb-5 text-center animate-pulse">Nada no carrinho...</h3>
        }
        <div ref={ContainerProducts} className="flex flex-col max-h-[70vh] gap-3 overflow-y-auto ScrollHidden ">
          {Produtos.length > 0 ? 
            Produtos.map((produto, index) => <CartProduct key={index} product={produto} onChange={setProdutos} produtos={Produtos}/>)
           : null}
        </div>
      </div>
        {
          Produtos.length > 0 ?
          <div className="flex-1 px-6 pt-8 relative">
              <h3 className="mx-auto w-fit text-2xl font-medium mb-5">Finalizar Pedido</h3>
              <CepAutocomplete />
              <h3 className="font-bold text-2xl mt-5">Total: R$ {(Produtos.reduce((total, produto) =>{
                total += produto.price * produto.quantidade
                return total
              }, 0)).toFixed(2)}</h3>
              <button onClick={finalizarPedido} className="py-3 px-10 text-xl font-bold hover:px-12 transition-all duration-200 text-white cursor-none bg-green-500 rounded-md lg:absolute lg:right-0 lg:bottom-0 mt-5 lg:mt-0">Finalizar</button>
          </div>
          : null
        }
    </section>
  );
};

export default Page;
