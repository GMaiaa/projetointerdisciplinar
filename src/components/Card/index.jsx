    import { Container } from "./syles";
    import { api } from "../../services/api";
import { useState } from "react";
    

    export function Card(){

        return(
            <Container>
                <img src={image} alt=""/>
                <h1> {name} </h1>
                <p>{value}</p>
                <button>Encomendar</button>
            </Container>
        )
    }