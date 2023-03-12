import Productcard from "../../componentes/Productcard/Productcard"
import Header from "../../componentes/Header/Header"
import "./index.scss"
import {PRODUCTS_MOCK} from "../../../mock/products.mock"

const Home = () => {
    

    return(
        <section className="home">
            <Header/>
            <section className="section_home"><Productcard/></section>
            

        </section>
    )
}
export default Home