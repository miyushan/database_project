import { Component} from 'react';
import axios from 'axios';

export default class CustomerDetails extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            contactNumber: '',
            branchName: '',
            password: ''
        }
    }

    getData(){
        axios.get(this.props.getUrl)
        .then(res => res.data)
        .then((res) => {
            console.log(this.props.contactNumber);

            // res.forEach(elements => {
            //     console.log(elements.Contact_Number);
            //     console.log(elements.Password);
            //     if((elements.Contact_Number === this.state.contactNumber) && (elements.Password===this.state.password)){
            //         window.location.replace('http://localhost:4008/home');
            //     }
            // });
            
        });
    }
    
}
