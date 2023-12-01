import { useState, useEffect } from "react";
import '../styles/Graph.css';
import Chart from "react-google-charts";
import ConversaoServices from "../services/conversaoService";

const Graph = () => {
    const [moedaLocal, setLocal] = useState("");
    const [moedaVariacao, setVariacao] = useState("");
    const [data, setData] = useState("");
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Função para renderizar o gráfico sempre que o chartData for alterado
        console.log(chartData);
    }, [chartData]);

    const GetChartData = async (ml, mv, dt) => {
        const services = new ConversaoServices();
        const response = await services.TaxaCambio(ml, mv, dt);
    
        const index = Object.keys(response);
        const values = Object.values(response);
    
        // Cria um array para o cabeçalho com "ask" e "timestamp"
        const header = ["ask", "Data"];
    
        // Mapeia os valores para um array de arrays, convertendo timestamp para milissegundos
        const dataRows = values.map(item => [
            `${(item.ask * 100).toFixed(2)}%`, // Formatação para representar a porcentagem com duas casas decimais
            new Date(Number(item.timestamp) * 1000)
        ]);
    
        // Adiciona o cabeçalho à primeira posição
        const chartData = [header, ...dataRows];
    
        setChartData(chartData);
    };
    
    
    
    
    

    const moedaLocalChange = (event) => {
        setLocal(event.target.value);
    };

    const moedaVariacaoChange = (event) => {
        setVariacao(event.target.value);
    };

    const dataChange = (event) => {
        setData(event.target.value);
    };

    return (
        <div className="containerGraph">
            <div className="containerFiltro">
                <input className='inpInfoData' onChange={dataChange} type="date" />
                <select className='slcMoeda' onChange={moedaLocalChange}>
                    <option selected>Selecione uma moeda local...</option>
                    <option value='BRL'>Real</option>
                    <option value='USD'>Dólar</option>
                    <option value='EUR'>Euro</option>
                </select>
                <select className='slcMoeda' onChange={moedaVariacaoChange}>
                    <option selected>Selecione uma moeda de conversão...</option>
                    <option value='BRL'>Real</option>
                    <option value='USD'>Dólar</option>
                    <option value='EUR'>Euro</option>
                </select>
                <button type="button" onClick={() => GetChartData(moedaLocal, moedaVariacao, data)} className="btnTaxaCambio">Variação da Moeda</button>
            </div>
            <Chart
                chartType="LineChart"
                data={chartData}
                width="100%"
                height="400px"
                legendToggle
            />
        </div>
    );
}

export default Graph;
