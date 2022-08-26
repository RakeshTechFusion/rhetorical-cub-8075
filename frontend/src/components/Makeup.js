import axios from "axios";
import React from "react";
import { useEffect } from "react";

import { useState } from "react";
import "./Makeup.css";
export default function Makeup() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/makeup");
      const data = await res.data;
      setData(data);
      console.log("data: ", data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="makeupCont">
      <div className="banner">
        <img
          src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg"
          alt="banner"
        />
      </div>
      <div id="prodData">
        {data.map((elem) => {
          return (
            <div
              to={`${elem._id}`}
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
                  <img
                    src="https://i.ibb.co/QpM4sbW/1077035.png"
                    alt="Wishlist"
                  />
                </div>
                <button>ADD TO CART</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
