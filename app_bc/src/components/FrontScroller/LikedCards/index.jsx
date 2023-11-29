import "./styles.css";

function LikedCards(props) {
  return (
    <div className="likedCardsWrapper">
      <div className="likedCard">
        {props.data.map((item) => {
          return (
            <div key={item.id} className="likedCardText">
              <div className="likedCardTop">
                <h3>{item.likes} likes</h3>
                <h4>{item.date}</h4>
              </div>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LikedCards;
