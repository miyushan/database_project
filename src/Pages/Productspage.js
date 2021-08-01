import React, { Component} from 'react';
import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import OurProducts from '../Parts/OurProducts';
import HashLoader from 'react-spinners/HashLoader';
import Footer from '../Parts/Footer';

import '../Pages/Productspage.css';

class Productspage extends Component {

    constructor(props){
        super(props);
        this.state={
            spinner: true,
            show: false
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                spinner: false,
                show: true
            })
        }, 2700)
    }

    onClick(){

    }

    render() {
        console.log(this.state.show)
        return(
            <>  
                {this.state.spinner ? 
                    <div className="cliploader-div d-flex justify-content-center align-items-center">
                        <HashLoader className="cliploader" size={80} color={"0f0"} />   
                    </div>
                : null}
                <div style={{ display: this.state.show ? "block" : "none" }}>
                    <div id="products">
                        <UpperNavBar />
                        <MainNavBar />
                        <OurProducts />
                        <Footer />
                    </div>
                </div>
            </>
        );
    }

}

export default Productspage;