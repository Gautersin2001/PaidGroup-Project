import './Main.css'
import { useState, useEffect } from 'react'

function Main() {
    const [api, setApi] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(web => web.json())
            .then(web => { console.log(web); setApi(web) })
    }, [])
    return (
        <div className='FatherBlockTwo'>
            <ul className='ApiBlock'>{api.map((item, index) => {
                return (
                    <li className='ApiLi' key={index}>
                        <img className='ApiIMG' src={item.image} />
                        <p className='ApiTitle'>{item.title}</p>
                        <p className='ApiPrice'>{item.price}</p>
                    </li>
                )
            })}

            </ul>
        </div>
    )
}

export default Main;