import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartTable.css';
import {Table, Container} from "react-bootstrap";
import item1 from '../files/product-images/580b57fcd9996e24bc43c21d.png';


function CartTable(){
    return(
        <>
            <Container className="table-container add-curser">
                <Table striped bordered hover>
                    <thead className="table-head text-center">
                        <tr className="table-header">
                            <th className="table-column table-column-1">Product ID</th>
                            <th className="table-column table-column-2">Product</th>
                            <th className="table-column table-column-3">Quantity</th>
                            <th className="table-column table-column-4">Price</th>
                        </tr>
                    </thead>
                    <tbody className="table-body text-center">
                        <tr>
                            <td>1</td>
                            <td className="left-image"><img src={item1} alt="product" className="img-product"/>Carrot</td>
                            <td>1Kg</td>
                            <td>Rs 250.00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td className="left-image"><img src={item1} alt="product" className="img-product"/>Onion</td>
                            <td>2Kg</td>
                            <td>Rs 230.50</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td className="left-image"><img src={item1} alt="product" className="img-product"/>Tomato</td>
                            <td>500g</td>
                            <td>Rs 75.00</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            
        </>
    );
}

export default CartTable;