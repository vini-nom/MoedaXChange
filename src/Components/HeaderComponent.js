import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCoins} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return(
        <nav className='navContainer'>
            <span className='logo'>
                <FontAwesomeIcon icon={faCoins}/>
                <span>MOEDAXCHANGE</span>
            </span>
            <ul className='listLink'>
                <li>
                    <span>
                    <FontAwesomeIcon icon={faMoneyBillTransfer}/>
                        <a href='#'>
                            Conversões
                        </a>
                    </span>
                </li>
                <li>
                    <span>
                    <FontAwesomeIcon icon={faChartPie}/>
                        <a href='#'>
                            Taxas de Câmbio
                        </a>
                    </span>
                </li>
                <li>
                    <span>
                    <FontAwesomeIcon icon={faNewspaper}/>
                        <a href='#'>
                            Notícias
                        </a>
                    </span>
                </li>
                <li>
                    <span>
                    <FontAwesomeIcon icon={faCommentsDollar}/>
                        <a href='#'>
                            Comparações do real
                        </a>
                    </span>
                </li>
            </ul>
        </nav>
    );
}

export default Header;