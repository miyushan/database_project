// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/OurProducts.css';
import {Row, Col, Container} from "react-bootstrap";
import CardItem from './CardItem';
import axios from 'axios';

import item0 from '../files/product-images/1_carrot.png';
// import item1 from '../files/product-images/1_Big_Onions.png';
// import item2 from '../files/product-images/1_tomatoes.png';
// import item3 from '../files/product-images/1_pumpkin.png';
// import item4 from '../files/product-images/1_potatoes.png';
// import item5 from '../files/product-images/1_Leeks.png';
// import item6 from '../files/product-images/1_Red Onions.png';
// import item7 from '../files/product-images/1_Cabbage.png';
// import item8 from '../files/product-images/1_Brinjals.png';
// import item9 from '../files/product-images/1_Green Chilies.png';


function OurProducts (){
    // const [isOkayToRender, setIsOkayToRender] = useState(false);
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState({
        id: [],
        name: [],
        price: []
    });
    const [selected2, setSelected2] = useState({
        id: [],
        name: [],
        price: []
    });
    
    
    useEffect(() => {
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then((res) => {    
            setProducts(res.data);
            // setIsOkayToRender(true);
        })
        .catch((err) =>{
            console.log("No products to display")
        })

    }, [])

    setSelected2(searches => searches.concat(selected))

    const showData = () => {
        console.log(selected2)
        return(
            
            <div className="our-product-bg">
                <Container className="outer-products">
                    <Row className="product-row-1 add-curser">
                        <Col>Our Products</Col>
                    </Row>

                    <Row className="product-row-2">
                        {products.map((product) =>{
                            return (
                                <Col key={product.id} className="product-column"><CardItem getSelected={(id, name, price) => setSelected({id: id, name: name, price: price})} id={product.id} Name={product.Name} Price={product.Price} image={item0} /></Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        )
    }

    return(
        <>

            {/* {isOkayToRender ? showData() : null} */}
            {showData()}
            
        </>
    );
    

}

export default OurProducts;

















// class OurProducts extends Component {
//     constructor(props) {
//         super(props);

//         this.state={
//             isOkayToRender: false,
//             productArr: [],
//             id: [],
//             name: [],
//             weight: [],
//             price: [],
//             images: [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9]

//         }
//         this.componentDidMount = this.componentDidMount.bind(this);
//         this.showData = this.showData.bind(this);
//     }

//     componentDidMount() {
//         axios.get('http://localhost/database_project/get_Product_details.php')
//         .then(res => res.data)
//         .then((res) => {

//             res.forEach(elements => {
                
//                 this.products = {
//                     id: elements.id,
//                     name: elements.Name,
//                     weight: elements.Weight,
//                     price: elements.Price
//                 }

//                 this.state.id.push(this.products.id);
//                 this.state.name.push(this.products.name);
//                 this.state.weight.push(this.products.weight);
//                 this.state.price.push(this.products.price);
//                 // this.state.productArr.push(this.products);

//             });
//             // console.log(this.state.productArr);

//             console.log(this.state.weight);

//             this.setState({
//                 isOkayToRender: true
//             })
            
//         })
//         .catch((err) => {
//             console.log("No products to Display!!!");
//         })
//     }

//     showData(){
//         return(
//             <div className="our-product-bg">
//                 <Container className="outer-products">
//                     <Row className="product-row-1 add-curser">
//                         <Col>Our Products</Col>
//                     </Row>


//                     <Row className="product-row-2">
//                         <Col className="product-column"><CardItem id={this.state.id[0]} name={this.state.name[0]} price={this.state.price[0]} weight={this.state.weight[0]} image={this.state.images[0]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[1]} name={this.state.name[1]} price={this.state.price[1]} weight={this.state.weight[1]} image={this.state.images[1]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[2]} name={this.state.name[2]} price={this.state.price[2]} weight={this.state.weight[2]} image={this.state.images[2]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[3]} name={this.state.name[3]} price={this.state.price[3]} weight={this.state.weight[3]} image={this.state.images[3]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[4]} name={this.state.name[4]} price={this.state.price[4]} weight={this.state.weight[4]} image={this.state.images[4]} /></Col>
//                     </Row>

//                     <Row className="product-row-2">
//                         <Col className="product-column"><CardItem id={this.state.id[5]} name={this.state.name[5]} price={this.state.price[5]} weight={this.state.weight[5]} image={this.state.images[5]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[6]} name={this.state.name[6]} price={this.state.price[6]} weight={this.state.weight[6]} image={this.state.images[6]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[7]} name={this.state.name[7]} price={this.state.price[7]} weight={this.state.weight[7]} image={this.state.images[7]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[8]} name={this.state.name[8]} price={this.state.price[8]} weight={this.state.weight[8]} image={this.state.images[8]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[9]} name={this.state.name[9]} price={this.state.price[9]} weight={this.state.weight[9]} image={this.state.images[9]} /></Col>
//                     </Row>

//                     <Row className="product-row-2">
//                         <Col className="product-column"><CardItem id={this.state.id[10]} name={this.state.name[10]} price={this.state.price[10]} weight={this.state.weight[10]} image={this.state.images[0]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[11]} name={this.state.name[11]} price={this.state.price[11]} weight={this.state.weight[11]} image={this.state.images[1]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[12]} name={this.state.name[12]} price={this.state.price[12]} weight={this.state.weight[12]} image={this.state.images[2]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[13]} name={this.state.name[13]} price={this.state.price[13]} weight={this.state.weight[13]} image={this.state.images[3]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[14]} name={this.state.name[14]} price={this.state.price[14]} weight={this.state.weight[14]} image={this.state.images[4]} /></Col>
//                     </Row>

//                     <Row className="product-row-2">
//                         <Col className="product-column"><CardItem id={this.state.id[15]} name={this.state.name[15]} price={this.state.price[15]} weight={this.state.weight[15]} image={this.state.images[5]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[16]} name={this.state.name[16]} price={this.state.price[16]} weight={this.state.weight[16]} image={this.state.images[6]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[17]} name={this.state.name[17]} price={this.state.price[17]} weight={this.state.weight[17]} image={this.state.images[7]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[18]} name={this.state.name[18]} price={this.state.price[18]} weight={this.state.weight[18]} image={this.state.images[8]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[19]} name={this.state.name[19]} price={this.state.price[19]} weight={this.state.weight[19]} image={this.state.images[9]} /></Col>
//                     </Row>

//                     <Row className="product-row-2">
//                         <Col className="product-column"><CardItem id={this.state.id[20]} name={this.state.name[20]} price={this.state.price[20]} weight={this.state.weight[20]} image={this.state.images[0]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[21]} name={this.state.name[21]} price={this.state.price[21]} weight={this.state.weight[21]} image={this.state.images[1]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[22]} name={this.state.name[22]} price={this.state.price[22]} weight={this.state.weight[22]} image={this.state.images[2]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[23]} name={this.state.name[23]} price={this.state.price[23]} weight={this.state.weight[23]} image={this.state.images[3]} /></Col>
//                         <Col className="product-column"><CardItem id={this.state.id[24]} name={this.state.name[24]} price={this.state.price[24]} weight={this.state.weight[24]} image={this.state.images[4]} /></Col>
//                     </Row>


//                 </Container>
//             </div>
//         )
//     }

//     render() {
//         return(
//             <>
//                 {this.state.isOkayToRender ? this.showData() : null}
                
//             </>
//         );
//     }

    


    
// }

// export default OurProducts;