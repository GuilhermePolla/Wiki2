import dateConverter from "@/utils/dateConverter";
import "./styles.css";

function FeaturedCards(props) {
  return (
    <div className="sideCardsWrapper">
      <h1 className="sideCardsTitle">Artigos TOP</h1>
      <div className="sideCardsScroller">
        {props.data.map((item) => {
          return (
            <div
              className={`sideCard ${
                props.active === item._id ? "active" : ""
              } `}
              key={item._id}
              onClick={() => props.setCurrentArticle(item)}
            >
              <div className="sideCardText">
                <h2>{item.article_title}</h2>
                {/* <h3>{item.content}</h3> */}
                <div className="sideCardFooter">
                  <p>{item.article_liked_count} likes</p>
                  <p>{dateConverter(item.article_published_date)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeaturedCards;
