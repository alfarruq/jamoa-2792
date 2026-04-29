import './style.css'
import headerlogo from '../../assets/headerlogo.svg'
import headersectionimg from '../../assets/headersectionimg.svg'

function Header() {
    return (
        <div className='container'>
            <div className='header_Container'>
                <div className='header_Logo'>
                    <img src={headerlogo} alt="logo" />
                    <p>1С-Товары</p>
                </div>
                <div className='header_nav_container'>
                    <div className='header_nav'>
                        <a className='nav_a' href="#">Как это работает</a>
                        <a className='nav_a' href="#">Инструкции</a>
                        <a className='nav_a' href="#">Продукты</a>
                        <a className='nav_a' href="#">База знаний </a>
                        <a className='nav_a' href="#">О нас</a>
                    </div>
                    <div>
                        <button className='headernavbtn'>Вход</button>
                    </div>
                </div>
            </div>
            <div className='header_section'>
                <div className='header_section_content'>
                    <h1 className='header_section_content_title'>Управление запасами розничного магазина</h1>
                    <p className='header_section_content_text'>Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.</p>
                    <button className='header_section_button'>Заказать демонстрацию</button>
                </div>
                <div className='header_section_image'>
                    <img src={headersectionimg} alt="header section image" />
                </div>
            </div>
        </div>
    );
}

export default Header;