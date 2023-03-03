import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect, useRef } from 'react'
import './style.css';
import { motion } from 'framer-motion';


import imagem1 from './1.png';
import imagem2 from './2.png';
import imagem3 from './3.png';
import imagem4 from './4.png';
import imagem5 from './5.png';
import imagem6 from './6.jpg';
import imagem7 from './7.jpg';
import imagem8 from './8.jpg';


const images = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7, imagem8]

function Inicio() {
  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])



  return (
    <body>
      <Navbar />
      <div className="App">
        <motion.div ref={carousel} className="carousel" whileTop={{ cursor: "grabbing" }}>
          <motion.div className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {images.map(image => (
              <motion.div className="item" key={image}>
                <img src={image} alt="Texto imagem" />
              </motion.div>
            ))}

          </motion.div>
        </motion.div>


      </div>
      <Footer />
    </body>
  )

}

export default Inicio;


