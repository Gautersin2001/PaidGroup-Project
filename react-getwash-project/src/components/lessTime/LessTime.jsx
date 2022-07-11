import './LessTime.css'
import img12 from './../img/img12.png'
import img13 from './../img/img13.png'
import img14 from './../img/img14.png'

function LessTime() {
    return (
        <div className="fatherBlockSix">
            <div className='LessTimeContentBlock'>
                <p className='LessTimeTextOne'>Хватит тратить свое<br /> время в очередях</p>
                <p className='LessTimeTextTwo'>Приложение скоро будет доступно для бета<br /> тестирования в AppStore и Google Play</p>
                <div className='LessTimeImgBlock'>
                  <img className='imgTwelve' src={img12} />
                  <img className='imgThirteen' src={img13}/>
                </div>
            </div>
            <img className='imgFourteen' src={img14} />
        </div>
    )
}

export default LessTime;