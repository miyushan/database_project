import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import UpperNavBar from '../Parts/UpperNavBar';
import MainNavBar from '../Parts/MainNavBar';
import Footer from '../Parts/Footer';


function AboutUspage(){
    const [items, setItems] = useState([
        {name: 'miyushan', id: '1'},
        {name: 'shakeer', id: '2'},
        {name: 'rodrigo', id: '3'},
        {name: 'aakila', id: '4'},
    ])

    const AddItem = () =>{
        setItems([...items, {name: 'nirosha', id: '4'}])
    }

    return(
        <>
            <div id="about-us">
                <UpperNavBar />
                <MainNavBar />

                <ul>
                    {items.map((item)=>{
                        return (
                            <li key={item.id}>{item.name}</li>
                        )
                    })}
                </ul>
                
                <Button onClick={()=>AddItem()}>Add item</Button>
                <h2 style={{height: '600px'}}>About Us</h2>
                <Footer />
            </div>
        </>
    );
}

export default AboutUspage;