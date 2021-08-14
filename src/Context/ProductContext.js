import axios from 'axios';
import React, { createContext, Component } from 'react';

export const ProductContext = createContext();

class ProductContextProvider extends Component {
    
    state = { 
        isLightTheme: true,
        light: { syntex: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntex: '#ddd', ui: '#333', bg: '#555'},
        products: []
    }

    componentDidMount(){
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            this.setState({ products: res.data})
        })
    }

    render() { 
        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
 
export default ProductContextProvider;
