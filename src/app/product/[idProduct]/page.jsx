import React from 'react'
import axios from 'axios';

import LeftContainerSingleProduct from '@/components/LeftContainerSingleProduct';
import RigthContainerSingleProduct from '@/components/RigthContainerSingleProduct';

const PageProduct = async ({params}) => {
  const SingleProdut = await axios({
    method: "GET",
    url: `https://fakestoreapi.com/products/${params.idProduct}`,
  })
    .then((r) => r.data)
    .catch((e) => {
      alert("ERRO API ");
    });
    
    
  return (
    <div className='flex-1 flex flex-col-reverse md:flex-row gap-16 py-5 gap-y-10 md:gap-y-0'>
        <LeftContainerSingleProduct product={SingleProdut} />
        <RigthContainerSingleProduct product={SingleProdut} />
    </div>
  )
}

export default PageProduct