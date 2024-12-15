import React, { useContext, useEffect, useState } from "react";
import "./Feed.css";
import { Context } from "../Context/Context";
import { API_KEY } from "../../data.js";
import { Link } from "react-router";
import Video from "../Video/Video.jsx";
import moment from 'moment';

const Feed = ({ thumbnail, title, channel, views, time }) => {


  const valueConverter=(value)=>{
    if(value>1000000){
      return Math.floor(value/1000000+"M")
    }
    else if(value>1000){
      return Math.floor(value/1000+"K")
    }
    else{
      return value;
    }
  }




  const { category,hideName} = useContext(Context);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.items))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [category]);

  return (
    <div className={`feed ${hideName && "feed-collapsed"}`}>
      {data.map((item, index) => (
        <div key={index} className="thumbnail-card">
          <Link to={`video/${item.snippet.categoryId}/${item.id}`}>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt="thumbnail"
              className="thumbnail-image"
            />
            <div className="thumbnail-details">
              <h3 className="thumbnail-title">{item.snippet.title}</h3>
              <p className="thumbnail-channel">{item.snippet.channelTitle}</p>
              <p className="thumbnail-meta">{ valueConverter(item.statistics.viewCount) } • {moment(item.snippet.publishedAt).fromNow()}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Feed;
