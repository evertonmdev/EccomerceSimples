import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-4 flex justify-between items-center transition-all">
      <Link href={"/"}>
        <h3 className="font-bold text-sm sm:text-md md:text-2xl transition-all duration-300">Eccomerce | MGTK</h3>
      </Link>
      <div >
        <ul className="flex justify-between gap-2 text-xs sm:text-sm ">
          <li className="hoverAnimationLi">
            <Link href={"/"}>Produtos</Link >
          </li>
          <li className="hoverAnimationLi">
            <Link href={"/conta"}>Conta</Link>
          </li>
          <li className="hoverAnimationLi">
            <Link href={"/carrinho"}>Carrinho</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
