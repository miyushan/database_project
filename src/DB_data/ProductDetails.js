import React, { Component} from 'react';
import './ProductDetails.css';
import {Table, Container} from "react-bootstrap";
// import Breadcrumb from 'react-bootstrap/Breadcrumb'
import axios from 'axios';
// import ProductItem from './ProductItem'


export default class ProductDetails extends Component{

    constructor(props){
        super(props)

        this.state={
            isRendered: false,
            productArr: {
                id: [],
                name: [],
                weight: [],
                price: []
            },

        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.tableRaw = this.tableRaw.bind(this);
    }

    componentDidMount(){

        axios.get('http://localhost/database_project/get_Product_details.php')
        .then(res => res.data)
        .then((res) => {

            res.forEach(elements => {


                this.products = {
                    id: elements.id,
                    name: elements.Name,
                    weight: elements.Weight,
                    price: elements.Price
                }

                this.state.productArr.id.push(this.products.id);
                this.state.productArr.name.push(this.products.name);
                this.state.productArr.weight.push(this.products.weight);
                this.state.productArr.price.push(this.products.price);

            });
            console.log(this.state.productArr);
            this.setState({
                isRendered: true
            })
            
        })
        .catch((err) => {
            console.log(err.message);
        })
    }

    tableRaw(){
        return(
            <>
                
                    <Container className="mt-5">
                        <div className="text-center"><h1 className="title">Food Ordering System DataBase</h1></div>
                        <div className="text-left"><h1 className="sub-title">Product Records</h1></div>

                        <Table className="" striped bordered>
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Stock Weight</th>
                                    <th>Price Per Kilogram</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.state.productArr.map((product, key) =>{
                                        return (
                                            <tr>
                                                <td className="t-data-1">{product.id}</td>
                                                <td className="t-data-1">{product.name}</td>
                                                <td className="t-data-1">{product.weight}</td>
                                                <td className="t-data-1">{product.price}</td>
                                                <td className="t-data-1">{product.id}</td>
                                            </tr>
                                        );
                                    })}

                                {/* <tr>
                                    <td className="t-data-1">1</td>
                                    <td className="t-data-2">Mark</td>
                                    <td className="t-data-3">Otto</td>
                                    <td className="t-data-4">@mdo</td>
                                    <td className="t-data-4">@mdo</td>
                                </tr> */}
                            </tbody>
                        </Table>

                    </Container>

            </>
        );
    }

    render() {
        return (
            <>
                {this.state.isRendered ? this.tableRaw() : null}   

                {/* {this.state.productArr.map((product) =>{
                    return (
                        <h1>{product.name}</h1>
                    )
                })} */}
            </>
        )
   
    }
}