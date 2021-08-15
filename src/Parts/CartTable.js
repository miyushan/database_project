import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartTable.css';
import {Table, Container} from "react-bootstrap";
import item1 from '../files/product-images/1_Beet.png';
import { CartContext } from '../Context/CartContext';


function CartTable () {

    const { cartProducts } = useContext(CartContext);

    return(
        <>
            <Container className="table-container add-curser">
                <Table className="cart-table cart-shadow" striped bordered hover>
                    <thead className="table-head text-center">
                        <tr className="table-header">
                            <th className="table-column table-column-1">Product ID</th>
                            <th className="table-column table-column-2">Product</th>
                            <th className="table-column table-column-3">Quantity</th>
                            <th className="table-column table-column-4">Price</th>
                        </tr>
                    </thead>
                    
                    <tbody className="table-body text-center">
                        {cartProducts.map((product) =>{

                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td className="left-image"><img src={item1} alt="product" className="img-product"/>{product.Name}</td>
                                    <td>{product.Weight} Kg</td>
                                    <td className="price-col">Rs {product.Price}</td>
                                </tr>
                            )  

                        })}

                    </tbody>
                </Table>

            </Container>
            
        </>
    );
    
}

export default CartTable;