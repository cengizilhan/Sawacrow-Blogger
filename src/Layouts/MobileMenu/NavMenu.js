import { React, useState } from "react";
import './NavMenu.scss';
import Menubar from "react-responsive-multi-level-menu";
// burası ile ilgilenecek react responsive hata veriyor.
//const Menubar =require('react-responsive-multi-level-menu');


export default function NavMenu() {
  
  const MenuItems = [
    { value: "Blog", 
      items: [
              { value: "Men",
                items: [{ value: "Shirts" }] 
              }
             ] 
    },
    { value: "About"},
    { value: "Links"},
    { value: "Projects", items: [] }
  ];
  const animation=['slideIn' , 'slideOut']


  return (
    <section className="NavMenu">
   <Menubar data={MenuItems} animation={animation} 
   backgroundColor="#000000" 
   className="menubar"/>
 
    </section>
    
  );
}
