import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Makeup.css';
// import { Link } from 'react-router-dom';
export default function Makeup(){
    const [data, setData] = useState([])
    // const [addedCart,setAddedCart]=useState(false)


    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/makeup"
        )
        const data = await res.data
        setData(data)
        console.log('data: ', data)
      } catch (error) {
        console.log('error: ', error)
      }
    }

    useEffect(() => {
      getData()
    }, [])

    const aUser={
      _id:"6308d11d779511dd3c758ed9",
      firstName:"test1",
      lastName:"lastnametest1",
      email:"test123@gmai.com",
      mobileNumber:"1234567890"
    }
    window.localStorage.setItem('aUser',JSON.stringify(aUser));
    // console.log('auser',aUser)

    var user=JSON.parse(window.localStorage.getItem('aUser'));

    // console.log("parsed",user)
    // const handleaddCart = () => {
    //   axios.post(`https://sugar-cosmeticsapi.herokuapp.com/cart`, {
    //     // user: `${user.userID}`,
    //     product: data.id,
    //     quantity: 1,
    //   });
    //   console.log(addedCart)
    //   setAddedCart(true);
    //   console.log(addedCart)
    // };





const handleaddCart = (e) => {
  
  // axios.post(`https://sugar-cosmeticsapi.herokuapp.com/cart`, {
  //   userid: user._id,
  //   product: data._id,
  //   quantity: 1,
  // });

  console.log(e)
  var obj={
    id:e._id,
    image:e.ImageUrl,
    title:e.Title,
    rating:e.Rating
  }
  console.log("e id",e.id)
  localStorage.setItem('selectProd',JSON.stringify(obj))
  // console.log()
  var prod=JSON.parse(localStorage.getItem('selectProd'))
  console.log('prod',prod)
  
};

return (
  <div className='makeupCont'>
    <div className='banner'>
            <img src='https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg' alt='banner' />
        </div>



<div className='afterbanner' style={{display:"flex", justifyContent:"space-between"}}>

  <div className='afterbanner_left'style={{marginLeft:"4%"}}>

      <div style={{display:"flex",justifyContent:"space-between"}}>

            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>  
                  <a href="/"> <img src="https://in.sugarcosmetics.com/desc-images/breadcrumb_home.svg" alt="home_icon"/></a>
                </div>

                  <div style={{display:"flex",justifyContent:"space-between",color:'gray' }}>
                    <div> /</div>
                  <div>
                      <a style={{textDecoration:"none",color:'gray'}} href="/makeup"><span>Makeup</span>
                      </a>
                  </div>
                  </div>
            </div>


             
      </div>
      <div style={{display:"flex",}}>
        <div>Makeup</div>
        <div style={{color:"gray"}}>-{data.length}</div>
      </div>

  </div>

        <div 
            className='afterbanner_right'style={{marginRight:"4%",display:"flex"}}>

            <p>filter, sorting</p>
        </div>

</div>  
          
          <div id="prodData">
            
            {
              data.map((elem,i) => {
                return (
                  <Link to={`/makeup/${elem._id}`}
                  key={i}>
                        <div
                            id="mapDataElem"
                            className="link"
                            key={elem._id.$oid}
                        >
                            <img
                            id="prodDataImage"
                            src={elem.ImageUrl}
                            alt={elem.Title}
                            //   onClick={() => {
                            //     itemClicked(elem._id.$oid)
                            //   }}
                            />

                            <p
                            //   onClick={() => {
                            //     itemClicked(elem._id.$oid)
                            //   }}
                            >
                            {elem.Title}
                            </p>

                            <p>
                            {elem.Currency}
                            {elem.Price}
                            </p>

                            <p>
                            <img
                                id="mapDataStar"
                                src="https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=740&t=st=1655214227~exp=1655214827~hmac=02adf4c8e90961a6603d966c85d2c548b79d9f0c1f8593787d3a3f478999dd1f"
                                alt="Star"
                            />
                            {elem.Rating} {elem.RatingTotal}
                            </p>

                            <div id="prodDataHover">
                            <div>
                                <img style={{margin:"auto",marginTop:"10%"}}
                                src="https://i.ibb.co/QpM4sbW/1077035.png"
                                alt="Wishlist"
                                />
                            </div>
                            
                            <button onClick={()=>handleaddCart(elem)}>ADD TO CART</button>
                            </div>
                        </div>
                        </Link>
                )
              })}
          </div>
      </div>
    )
  }
