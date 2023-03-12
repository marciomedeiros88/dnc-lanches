import "./index.scss"
import { Link } from "react-router-dom";
import burger from "../../imagens/hamburguer-de-vista-frontal-em-um-carrinho.jpg"

const Productcard = () => {
    
    return (
        <>
        <div className="card">
            <div className="img">
                <img src={burger} alt="Imagem produto"></img>
            </div>
            <div className="title"><p>X-burger</p></div>
            <div className="button">
                <Link to="/products/:productId">
                    <button>Adicionar</button>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Productcard