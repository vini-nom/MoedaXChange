import axios from "axios";
import { useState } from "react";

class ConversaoServices{
    ConverteMoeda(MoedaLocal, MoedaConversao, valor){
        axios.post(`https://localhost:44308/Moeda/Cotacao?MoedaLocal=${MoedaLocal}&MoedaConversao=${MoedaConversao}`)
            .then(res => {
                let valorConvertido = document.getElementById("spResult")
                let val = res.data.ask * valor
                let result = ""
                switch (MoedaConversao) {
                    case "BRL":
                        result = val.toLocaleString("pt-BR",{style:'currency', currency: 'BRL'})
                        break;
                    case "USD":
                        result = val.toLocaleString("en-US",{style:'currency', currency: 'USD'})
                        break
                    case "EUR":
                        result = val.toLocaleString("en-US",{style:'currency', currency: "EUR"})
                        break
                    
                }
                valorConvertido.innerHTML = result
                valorConvertido.style.display = "block"
            }).catch((err) =>{
                console.log(err)
            })
    }
    async TaxaCambio(MoedaLocal, MoedaVariacao, Data){
        const res = await axios.post(`https://localhost:44308/Moeda/TaxaCambio?MoedaLocal=${MoedaLocal}&MoedaVariada=${MoedaVariacao}&DataVariacao=${Data}`)
        let dados = res.data
        return dados 
    }
}

export default ConversaoServices;