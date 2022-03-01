import React from "react";
import { Carousel } from "antd";
import './Banner.css'

export default function Banner() {
  const images = [
    "https://pbs.twimg.com/media/Eljq4M_WoAAWHQp?format=jpg&name=large",
    "https://cuongphim.com/wp-content/uploads/2016/12/naruto-dattebayo-session-1-1.jpg",
    "http://3.bp.blogspot.com/-dIInk-ze6XY/VflMNZwUc7I/AAAAAAAAADc/wLTX2qQhT1s/s1600/maxresdefault.jpg",
    "https://i.pinimg.com/originals/03/e5/6a/03e56a440cb8616dc545a2e100c851a2.jpg"
  ]
  return (
    <div className="main">
      <Carousel autoplay>
        {
          images.map((image,index) => (
          <div key={index}>
            <div className="banner" style = {{backgroundImage: `url(${image})`  }}>
            </div>
          </div>
          ))
        }
        
      </Carousel>
    </div>
  );
}
