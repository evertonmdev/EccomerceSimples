import axios from "axios";
import CardProduct from "@/components/CardProduct";

const ProductsList = async () => {
    const products = await axios({
    method: "GET",
    url: "https://fakestoreapi.com/products",
  })
    .then((r) => r.data)
    .catch((e) => {
      alert("ERRO");
    });

  return (
    <section className="w-full flex flex-col items-center justify-center md:flex-row md:flex-wrap gap-y-10">
      {products.map((produto, index) => (
        <CardProduct
          key={index}
          category={produto.category}
          description={produto.description}
          price={produto.price}
          rate={produto.rating.rate}
          title={produto.title}
          img={produto.image}
          id={produto.id}
        />
      ))}
    </section>
  );
};

export default ProductsList;
