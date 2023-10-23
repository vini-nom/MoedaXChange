import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/news.css';
 
const NewsCard = () => {
  const [news, setNews] = useState();
  
    useEffect(() => {
         const fetchResponse = async () =>{
            try{
                let responseDataRequest = await axios.get("https://localhost:44308/Moeda/Noticias",{
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                method: "get"
             })

             setNews(responseDataRequest.data)
            } catch (error){
                console.log(error)
            } 
         };

         fetchResponse();
    }, [])

    const newsRender = Array.isArray(news) 
                       ? news.map((item, index) => (
                              <div key={index} className='newsContainer'>
                                  <div>
                                    <img src={item.imagem}/>
                                  </div>
                                  <h2>{item.manchete}</h2><br/>
                                  <p>{item.conteudo}</p><br/>
                                  <a href={item.fonte}>Saiba Mais</a>
                              </div>
                       )) : null;

  return (
    <div className='containerNews'>
      {newsRender}
    </div>
  );
}

export default NewsCard;
