import NavComponent from "./HeaderComponent";
import NewsComponent from "./NewsComponent";
import CotationComponent from './CotationComponent';

function body(){
    return(
        <div>         
            <NavComponent/>
            <CotationComponent/>
            <NewsComponent/>   
        </div>   
    );
}

export default body;