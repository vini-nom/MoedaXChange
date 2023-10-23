import axios from "axios";

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
}

export default ConversaoServices;