import {Link} from "react-router-dom";

const Products = ()=>{
    return(
        <div>
            <h1>Product</h1>
            <ul>
                <li><Link to="/products/1">product1</Link></li>
                <li><Link to="/products/2">product2</Link></li>
                <li><Link to="/products/3">product3</Link></li>
            </ul>
        </div>
    );
}
export default Products;