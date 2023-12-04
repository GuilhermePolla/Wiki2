"use client";
import useHorizontalScroll from "@/utils/useHorizontalScroll";
import "./styles.css";
import dateConverter from "@/utils/dateConverter";
import Link from "next/link";

function LikedCards(props) {
  const scrollRef = useHorizontalScroll();

  return (
    <div className="likedCardsWrapper">
      <div ref={scrollRef} className="likedCard">
        {props.data.map((item) => {
          return (
            <Link key={item._id} href={`document/?id=${item._id}`}>
              <div className="likedCardText">
                <div className="likedCardTop">
                  <h3>{item.article_liked_count} likes</h3>
                  <h4>{dateConverter(item.article_published_date)}</h4>
                </div>
                <h2>{item.article_title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default LikedCards;
