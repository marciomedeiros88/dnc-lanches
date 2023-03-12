import logo from "../../imagens/logo_dnc.svg";
import carrinho from "../../imagens/carrinho.svg";
import "./index.scss";

    function Header() {
    return (
        <>
        <header className="header_home">
            <div className="div_home">
            <img src={logo} alt="Logo DNC"></img>
            </div>
            <div className="div_home">
            <nav className="nav_home">
                <li>Variedades</li>
                <li>Doces</li>
                <li>Pizzas</li>
                <li>Promoções</li>
            </nav>
            </div>
            <div className="div_home_dir">
            <p>Minhas compras</p>
            <img src={carrinho} className="carrinho" alt="Seu carrinho"></img>
            </div>
        </header>
        </>
    );
    }

export default Header;