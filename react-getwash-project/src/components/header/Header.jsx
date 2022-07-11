import './Header.css'


function Header() {
    
    return (
        <div className="fatherBlockOne">

            <h1 className='headerLogoClass'>GetWash</h1>
            <div className='routeClassBlock'>
                <a href='#' className='routeTextClass'>Как использовать</a>
                <a href='#' className='routeTextClass'>Партнерам</a>
                <a href='#' className='routeTextClass'>Скачать</a>
                <a href='#' className='routeTextClass'>Отзывы</a>
            </div>
            <button className='headerButton'>Получить доступ</button>
        </div>
    )
}

export default Header;