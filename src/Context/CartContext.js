import axios from 'axios';
import React, { createContext, Component } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    
    state = {
        cartProducts: []
    }

    componentDidMount(){
        axios.get('http://localhost/database_project/get_Product_details.php')
        .then (res =>{
            this.setState({ cartProducts: res.data})
        })
    }

    render() {
        return (
            <CartContext.Provider value={{...this.state}}>
                {this.props.children}
            </CartContext.Provider>
        );
    }
}
 
export default CartContextProvider;
