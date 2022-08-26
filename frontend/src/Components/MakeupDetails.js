import React from 'react'

export default function MakeupDetails() {

    var prod = JSON.parse(localStorage.getItem('selectProd'))
    console.log('prod :', prod)
    // prod.clear()
    
    return (
        <div>
            {/* <img src='https://i.ytimg.com/vi/tl9nlcoZ564/maxresdefault.jpg' alt='' /> */}
            <div className='prodDesc'>
                <img src={prod.image} alt='' />
                <p>{prod.title}</p>
                <p>{prod.rating}</p>
            </div>


        </div>
    )
}
