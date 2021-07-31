import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PopularItems.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';
import axios from 'axios';

import item0 from '../files/product-images/1_carrot.png';
import item1 from '../files/product-images/1_Big_Onions.png';
import item2 from '../files/product-images/1_tomatoes.png';
import item3 from '../files/product-images/1_pumpkin.png';
import item4 from '../files/product-images/1_potatoes.png';
import item5 from '../files/product-images/1_Leeks.png';
import item6 from '../files/product-images/1_Red Onions.png';
import item7 from '../files/product-images/1_Cabbage.png';
import item8 from '../files/product-images/1_Brinjals.png';
import item9 from '../files/product-images/1_Green Chilies.png';


class PopularItems extends Component {
    constructor(props) {
        super(props);

        this.state={
            isOkayToRender: false,
            productArr: [],
            id: [],
            name: [],
            weight: [],
            price: [],
            images: [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9]

        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.showData = this.showData.bind(this);
    }

    componentDidMount() {
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

                this.state.id.push(this.products.id);
                this.state.name.push(this.products.name);
                this.state.weight.push(this.products.weight);
                this.state.price.push(this.products.price);
                // this.state.productArr.push(this.products);

            });
            // console.log(this.state.productArr);

            console.log(this.state.weight);

            this.setState({
                isOkayToRender: true
            })
            
        })
        .catch((err) => {
            console.log("No products to Display!!");
        })
    }

    showData(){
        return(
            <div className="outside">
                <Container className="outer-popular">
                    <Row className="row-1">
                        <Col className="add-curser">Popular Items</Col>
                    </Row>
                    <Row className="row-2">
                        <Col className="column"><CardItem id={this.state.id[0]} name={this.state.name[0]} price={this.state.price[0]} weight={this.state.weight[0]} image={this.state.images[0]} /></Col>
                        <Col className="column"><CardItem id={this.state.id[1]} name={this.state.name[1]} price={this.state.price[1]} weight={this.state.weight[1]} image={this.state.images[1]} /></Col>
                        <Col className="column"><CardItem id={this.state.id[2]} name={this.state.name[2]} price={this.state.price[2]} weight={this.state.weight[2]} image={this.state.images[2]} /></Col>
                        <Col className="column"><CardItem id={this.state.id[3]} name={this.state.name[3]} price={this.state.price[3]} weight={this.state.weight[3]} image={this.state.images[3]} /></Col>
                    </Row>
                </Container>
            </div>
            
        );
    }

    render() {
        return(
            <>
                {this.state.isOkayToRender ? this.showData() : null}
            </>
        );
    }
}

export default PopularItems;