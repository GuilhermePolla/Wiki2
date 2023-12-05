
import { useState } from "react";
import "../ArticleForm/style.css";
import {TextInput} from "@/components/TextInput";
import { Title } from "@/components/Title";
import {Button} from "@/components/Button";

export function ArticleForm(props){
    return(
        <div className="container">
            <form method="post" className="form_box" id="cadastro_usuarios_form">
                <Title className="title_form">Criar Artigo</Title>
                <TextInput placeholder="Insira o título..."/>
                <textarea placeholder="Insita o texto..."></textarea>
                <Button className="ButtonGray" type="submit">
                    Cadastrar
                </Button>
            </form>
        </div>
    )  
}