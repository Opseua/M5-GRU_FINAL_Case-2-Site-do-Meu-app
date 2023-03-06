import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './feed.css';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import moment from 'moment';


function Feed() {
   
    
    

    


    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("https://m5-gru-crud-api.cyclic.app/notas")
            .then((response) => {
                setPosts(response.data.data);
                console.log(response.data.data);
            })
            .catch((err) => {
                console.log(`DEU ERRO: ${err}`);
            })

    }, [])

    function deletePost(id) {
console.log()
        axios.delete(`https://m5-gru-crud-api.cyclic.app/notas/${id}`)

        setPosts(posts.filter(post => post.nota_id !== id))

    }


    return (

        <div>

            <HeaderMain />

            <main>

                <div className="cards">

                    {posts.map((post, key) => {

                        return (

                            <div className="card" key={key} >

                                <div className='header_old'>
                                    <h2 className='notas_h2'>{post.nota_titulo}</h2>
                                    
                                </div>

                                <div className="line"></div>

                                <p>{post.nota_informacao}</p>

                                <div className="btns" >

                                    <div className="btn-edit" >
                                        <Link to={{ pathname: `/edit/${post.nota_id}` }} >
                                            <button>Editar</button>
                                        </Link>
                                    </div>

                                    <div className="btn-readmore" >
                                        <Link to={{ pathname: `/lermais/${post.nota_id}` }} >
                                            <button>Ler mais</button>
                                        </Link>
                                    </div>

                                    <div className="btn-delete" >
                                        <button onClick={() => deletePost(post.nota_id)} >Apagar</button>
                                    </div>

                                </div>
                            </div>
                        )

                    })}


                </div>

            </main>

        </div>
    )
}

export default Feed