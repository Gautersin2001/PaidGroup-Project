import './HeaderLogo.css'
import img1 from './../img/img1.png'
import { useState } from 'react';

function HeaderLogo() {
    const[message,setMessage] = useState(false)
    function showMessage(){
        if(message == true){
            alert('Install app')
        }
    }
    return (
        <div className='fatherBlockTwo'>
            <div className='headerLogoTextClass'>
                <h3 className='headerLogoText'>Поиск ближайшей свободной<br /> автомойки и бронирование<br /> на удобное время.</h3>
                <p className='headerLogoWeCan'>Мы поможем сохранить ваше время для более<br /> интересных занятий, чем стоять в очереди.</p>
                <button onClick={() => {setMessage(true);showMessage()}} className='headerLogoButton'>Получить доступ</button>
            </div>
             <img className='headerLogoImg' src={img1} alt="logo" />
        </div>
    )
}

export default HeaderLogo;