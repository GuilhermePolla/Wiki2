"use client";
import { useState, useEffect } from "react";
import "./styles.css";
import FeaturedCards from "./FeaturedCards";
import LikedCards from "./LikedCards";
import FeaturedCaller from "./FeaturedCaller";

function FrontScroller(props) {
  return (
    <div className="frontScrollerWrapper">
      <FeaturedCards
        data={props.featured}
        active={props.currentArticle._id}
        setCurrentArticle={props.setCurrentArticle}
      />
      <FeaturedCaller data={props.currentArticle} />
      <LikedCards data={props.byLikes} />
    </div>
  );
}

export default FrontScroller;
