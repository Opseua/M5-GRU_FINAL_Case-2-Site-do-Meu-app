import React from 'react'
import axios from 'axios'

import { useHistory } from 'react-router-dom'

import Header from '../../components/Header/Header'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './post.css'

const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres")
})

function Post() {

    function NotasEnviar(titulo, informacao) {
        const novoUsuario = {
            usuario_id: 1,
            nota_titulo: titulo,
            nota_informacao: informacao,
            nota_ultima_edicao: '2022-02-01 12:00:00'
        };
        axios.post(`https://m5-gru-crud-api.cyclic.app/notas`, novoUsuario)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }


    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })
    const info = { nota_id: 2, nota_titulo: "Remédios para tomar", nota_informacao: "Tomar o remédio para diabetes nesses horários 12:00, 22:00, 04:00", nota_ultima_edicao: "2002-02-02T13:12:00.000Z", usuario_id: 1 }
    const addPost = data => axios.post("https://m5-gru-crud-api.cyclic.app/notas", info)
        .then(() => {
            console.log("Deu tudo certo")
            history.push("/")
        })
        .catch(() => {
            console.log("DEU ERRADO")
        })

    return (
        <div>
            <Header />

            <main>

                <div className="card-post" >

                    <h1>Criar postagem</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Título</label>
                                <input className="imput_titulo" type="text" name="title" {...register("title")} />
                                <p className="error-message">{errors.title?.message}</p>
                            </div>

                            <div className="fields" >
                                <label>Descrição</label>
                                <textarea className="imput_descricao" type="text" name="content" {...register("content")} ></textarea>
                                <p className="error-message">{errors.content?.message}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" onClick={() => NotasEnviar(document.getElementsByClassName("imput_titulo")[0].value, document.getElementsByClassName("imput_descricao")[0].value)}>Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>

        </div>
    )
}

export default Post