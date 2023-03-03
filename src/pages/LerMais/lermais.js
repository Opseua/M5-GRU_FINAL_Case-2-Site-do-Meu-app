import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../../components/Header/Header'

function LerMais() {

    const [ lermais, setLermais ] = useState({})



    useEffect(() => {
        axios.get("https://m5-gru-crud-api.cyclic.app/notas/2")
        .then((response) => {
            setLermais(response.data)
        })

    }, [])
    
    return(
        
        <div>
            <Header />
            
            <main>

                <div className="cards">

                    <div className="card" >

                        <header>
                            <h2>{lermais.title}</h2>
                        </header>

                        <div className="line"></div>

                        <p>{lermais.content}
                        </p>

                    </div>

                </div>

                </main>
        </div>
    )
}

export default LerMais