import axios from 'axios';
import React, { createContext, Component } from 'react';

export const ProductContext = createContext();

class ProductContextProvider extends Component {
    
    state = {
        products: [],
        productSelected: false,
        selectedItems: []
    }

    componentDidMount(){
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            this.setState({ products: res.data})
        })
    }

    handleAddProduct = (id) => {
        this.setState({
            productSelected: !this.state.productSelected,
            selectedItems: id
        });
    }

    render() { 
        return (
            <ProductContext.Provider value={{...this.state, handleAddProduct: this.handleAddProduct}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
 
export default ProductContextProvider;
