import './Footer.css'

function Footer() {
    return (
        
            <div className='FatherBlockThree'>
                <p className='ShopName'>NASTASIA SABIO</p>
                <div className='HeaderNavigation'>
                    <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>КАТАЛОГ</p></a>
                    <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>NEW</p></a>
                    <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>РАСПРОДАЖА</p></a>
                    <a className='HeaderLink' href='#'><p className='HeaderNavigationText'>КОНТАКТЫ</p></a>
                </div>
                <button className='HeaderButton'><a href= 'tel:+79060404776'>+7 906 04 04 776</a></button>
            </div>
    )
}

export default Footer;