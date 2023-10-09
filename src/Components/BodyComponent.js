import NavComponent from "./HeaderComponent";
import NewsComponent from "./NewsComponent";

function body(){
    return(
        <body>
            <header>
                <NavComponent/>
            </header>
            <section>
                <NewsComponent/>
            </section>
        </body>    
    );
}

export default body;