import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/CartTable.css';
import {Table, Container} from "react-bootstrap";

function CartTable(){
    return(
        <>
            <Container className="table-container add-curser">
                <Table striped bordered hover>
                    <thead className="table-head">
                        <tr className="text-center table-header">
                            <th className="table-column table-column-1">Product ID</th>
                            <th className="table-column table-column-2">Product</th>
                            <th className="table-column table-column-3">Quantity</th>
                            <th className="table-column table-column-4">Cost</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <td className="text-center">1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td className="text-center">2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td className="text-center">3</td>
                            <td>Larry the Bird</td>
                            <td>@fat</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            
        </>
    );
}

export default CartTable;