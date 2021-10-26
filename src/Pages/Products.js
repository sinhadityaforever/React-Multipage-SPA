import { Link } from "react-router-dom";

const Products=()=>{

    return (
        <section>
            <h1>Product Page</h1>
            <ul>
              <Link to='/products/p1'><li>Product1</li></Link>
              <Link to='/products/p2'><li>Product2</li></Link>
              <Link to='/products/p3'><li>Product3</li></Link>
            </ul>
        </section>)
}
export default Products;