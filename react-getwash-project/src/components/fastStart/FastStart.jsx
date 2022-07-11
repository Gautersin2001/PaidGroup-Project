import './FastStart.css'
import img2 from './../img/img2.png'
import img3 from './../img/img3.png'
import img4 from './../img/img4.png'
import img5 from './../img/img5.png'
import img6 from './../img/img6.png'


function FastStart() {
    return (
        <div className='fatherBlockOneTwo'>
            <img className='fastStartImgOne' src={img2} />
            <div className='fastStartBlock'>

                <p className='fastStartLogo'>Быстрый старт</p>

                <div className='fastStartContentBlock'>
                    <img className='fastStartImg' src={img3} />
                    <div className='fastStartContentBlockTwo'>
                        <p className='fastStartTextOne'>Скачай и зарегистрируйся</p>
                        <p className='fastStartTextTwo'>Наше приложение доступно в Apple Store и Google Play</p>
                    </div>
                </div>

                <div className='fastStartContentBlock'>
                    <img className='fastStartImg' src={img4} />
                    <div className='fastStartContentBlockTwo'>
                        <p className='fastStartTextOne'>Выбери ближайшую автомойку</p>
                        <p className='fastStartTextTwo'>Из свободных поблизости или оставь заказ на удобное время</p>
                    </div>
                </div>

                <div className='fastStartContentBlock'>
                    <img className='fastStartImg' src={img5} />
                    <div className='fastStartContentBlockTwo'>
                    <p className='fastStartTextOne'>Выбери дополнительные услуги</p>
                    <p className='fastStartTextTwo'>Можешь их добавить к своему основному заказу</p>
                    </div>
                </div>

                <div className='fastStartContentBlock'>
                    <img className='fastStartImg' src={img6} />
                    <div className='fastStartContentBlockTwo'>
                        <p className='fastStartTextOne'>Оплати внутри приложения </p>
                        <p className='fastStartTextTwo'>Бесконтактная оплата внутри приложения и прозрачные цены</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default FastStart;