import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Client from "./Client";
import BlogArticle from "./blogarticle";
// import mockData from "./mockData.json"
// import {} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
// import {SocialMediaIconsReact} from 'social-media-icons-react';
import logo from "./logo.png";

// import Image from 'react-bootstrap/Image';

const AppFunction = () => {
  const [article, setArticle] = useState();
  // const [article, setArticle] = useState(articles && articles.slice(0,1) );

  //set the articlesstate to nthe 1st article bz slicing the data.itmes array

  const basesUrl = "http://localhost:3001";

  useEffect(() => {
    fetch(`${basesUrl}/api/blog`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Container">
      <div className="topnav">
        <a href="#top">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <a href="#home" className="active">
          Home
        </a>
        <a href="#Blog" className="active">
          Blog
        </a>
        <a href="#contact" className="active">
          Contact
        </a>
        <a href="#about">About</a>
      </div>

      <div className="articles-container">
      {article &&
        article.map((article) => {
          return (
            
              <Fragment key={article.id}>
                {/* <Images images={article.id}/> */}
                {/*  <img src="http://localhost:3001/image1.jpg"/> */}
                {article.image && <img className="article-picture" src={`${basesUrl}/${article.image}`} />}
                <div className="article-content">
                <h2>{article.heading}</h2>
                <p>{article.content}</p>
                <h6>Name: {article.name}</h6>
                <h6>email: {article.email}</h6>
                </div>
              </Fragment>
          );
        })}
        </div>

      {/* {article && article.map(article => {
      return <BlogArticle key={article.id} blogarticle={article} /> 
    })} */}

      {/* <Pagination >
        <Pagination.Prev />
        <Pagination.Item onClick = { () => setArticle(articles.slice(1,2))}>{1}</Pagination.Item>
        <Pagination.Item onClick = { () => setArticle(articles.slice(2,3))}>{2}</Pagination.Item>
        <Pagination.Item onClick = { () => setArticle(articles.slice(3,4))}>{3}</Pagination.Item>
        <Pagination.Next />
    </Pagination> */}

      <div className="footer">
        <div className="footer-left">
          <img className="footer-logo" src={logo} />
          <h5>About HappyHobby </h5>
          <p className="aboutus">
            <span>
              We are 2 perspective web developers. Since this webpage is just an
              exercise,do not consider it as display of our skills.
            </span>
          </p>
        </div>
        <div className="footer-center">
          <p className="footer-links">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </p>
          <p class="copywrite">
            {" "}
            © 2021 HappyHobby contentful website created by Tomas & Abhilasha{" "}
          </p>
        </div>

        {/* <div class="footer-right">
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
		</div> */}
      </div>
    </div>
  );
};

export default AppFunction;
