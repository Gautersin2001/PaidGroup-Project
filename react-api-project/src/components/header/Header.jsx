import './Header.css'

function Header(){
    return(
        <div className='FatherBlockOne'>
            <p className='ShopName'>NASTASIA SABIO</p>
            <div className='HeaderNavigation'>
                <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>КАТАЛОГ</p></a>
                <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>NEW</p></a>
                <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>РАСПРОДАЖА</p></a>
                <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>КОНТАКТЫ</p></a>
            </div>
            <button className='HeaderButton'><a className='shopnameLink' href= 'tel:+79060404776'>+7 906 04 04 776</a></button>
        </div>
    )
}

export default Header;