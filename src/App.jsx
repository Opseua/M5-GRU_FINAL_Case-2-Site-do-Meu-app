import {useState, useEffect, useRef} from 'react'
import './App.css';
import './Texto';
import {motion} from 'framer-motion';


import imagem1 from '../src/images/1.png';
import imagem2 from '../src/images/2.png';
import imagem3 from '../src/images/3.png';
import imagem4 from '../src/images/4.png';
import imagem5 from '../src/images/5.png';
import imagem6 from '../src/images/6.jpg';
import imagem7 from '../src/images/7.jpg';
import imagem8 from '../src/images/8.jpg';


const images= [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6,imagem7, imagem8 ]

function App (){
   const carousel = useRef();
   const [width, setWidth] = useState(0)

useEffect(() => {
  console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
  setWidth(carousel.current?.scrollWidth -carousel.current?.offsetWidth )
}, [])



      return (
    <div className ="App">
       <motion.div ref={carousel} className= "carousel" whileTop={{cursor: "grabbing"}}>
        <motion.div className= "inner"
        drag="x"
        dragConstraints= {{right: 0, left: -width}}
        initial={{x:100 }}
        animate={{x:0}}
        transition={{duration:0.8}}
        >

          {images.map(image =>(
              <motion.div className="item" key={image}>
              <img src={image} alt="Texto imagem"/>
             </motion.div>
          ))}

       </motion.div>
       </motion.div>

     
    </div>
  )

}

export default App;


