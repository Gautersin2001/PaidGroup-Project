import './BeAPatner.css'
import img7 from './../img/img7.png'
import img8 from './../img/img8.png'
import img9 from './../img/img9.png'
import img10 from './../img/img10.png'
import img11 from './../img/img11.png'


function BeAPatner() {
    return (
        <div className='fatherBlockFour'>
            <div className='beAPatnerLogoText'>
                <p className='beAPatnerLogoOne'>Стань нашим партнером и начни зарабатывать: </p>
                <p className='beAPatnerLogoTwo'>Автоматизируй свой бизнес вместе с нами. Подключись к нашей системе бронирования, что бы <br /> получать новых клиентов и распределить нагрузку равномерно на весь день. Мы предоставляем<br /> удобные инструменты для формирования отчетов в несколько кликов и многое другое. </p>
            </div>

            <div className='beAPatnerContentBlock'>
                <div className='ImgBlock'>
                    <img src={img7} />
                    <p className='ImgBlockText'>Просмотривайте<br /> историю заказа</p>
                </div>

                <div className='ImgBlock'>
                    <img src={img8} />
                    <p className='ImgBlockText'>Создание отчета<br /> неделя/месяц/год </p>
                </div>

                <div className='ImgBlock'>
                    <img src={img9} />
                    <p className='ImgBlockText'>Обратная связь<br /> от клиентов</p>
                </div>

                <div className='ImgBlock'>
                    <img src={img10} />
                    <p className='ImgBlockText'>Контроль качества<br /> работы сотрудников</p>
                </div>

                <div className='ImgBlock'>
                    <img src={img11} />
                    <p className='ImgBlockText'>Бесконтактная <br /> оплата работы</p>
                </div>
            </div>
            <div className='beAPatnerImgBlock'>
                <button className='ImgBlockButton'>Стать партнером</button>
            </div>
        </div>
    )
}

export default BeAPatner;