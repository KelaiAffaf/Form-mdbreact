import { blue } from 'kleur';
import React, { Component } from 'react';
import './Hello.css'
import styled from 'styled-components'
import image from '../logo512.png'
import logo from '../img/css.svg'
import { width } from 'dom-helpers';


            const Button = styled.button`
            cursor: pointer;
            border: 1px solid #1a202c;
            padding: 8px;
            min-width: 64px;

            background: transparent;

            transition: all 0.1s ease-in;

            `;

class Hello extends Component {
// jsx 
// je veux ajouter du js avec du jsx == {mon java scripte }
 
    render() { 
   
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            backgroundColor:"blue"
          };
        return ( 
            <div >
               <h1> Hello World</h1>
               <img style={{height:"100px",width:"100px"}} src={logo} alt="logo"></img>
               <Button>Click me</Button>
            </div>
         );
    }
}
 
export default Hello;