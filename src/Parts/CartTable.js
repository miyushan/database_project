import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartTable.css';
import CartTableRow from './CartTableRow';
import {Table, Container} from "react-bootstrap";
import item1 from '../files/product-images/1_Beet.png';
import { CartContext } from '../Context/CartContext';

function CartTable () {

    const { cartProducts } = useContext(CartContext);

    return(
        <>
            <Container className="table-container add-curser">

                {cartProducts.length === 0 ?
                    <div className="no-item text-center">No Items To Display</div>
                :
                    <Table className="cart-table cart-shadow" striped bordered hover>
                        <thead className="table-head text-center">
                            <tr className="table-header">
                                <th className="table-column table-column-1">Product ID</th>
                                <th className="table-column table-column-2">Product</th>
                                <th className="table-column table-column-3">Set Quantity</th>
                                <th className="table-column table-column-4">Quantity</th>
                                <th className="table-column table-column-5">Remove</th>
                                <th className="table-column table-column-6">Price</th>
                            </tr>
                        </thead>
                        
                        <tbody className="table-body text-center">
                            {cartProducts.map((product) =>{
                                return (
                                    <tr key={product.id}>
                                        <CartTableRow image={item1} name={product.Name} price={product.Price} weight={product.Weight} id={product.id}/>
                                    </tr>
                                )  

                            })}

                        </tbody>
                    </Table>
                }
                

            </Container>
            
        </>
    );
    
}

export default CartTable;