import Productcard from "../../componentes/Productcard/Productcard"
import Header from "../../componentes/Header/Header"
import { Link, useParams} from "react-router-dom"
const Product = () => {
    

    return(
        <section className="home">
            <Productcard/>
            <Productcard/>
        </section>
    )
}

export default Product