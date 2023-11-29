import "./styles.css";

function FeaturedCards(props) {
  return (
    <div className="sideCardsWrapper">
      <h1 className="sideCardsTitle">Artigos TOP</h1>
      {props.data.map((item) => {
        return (
          <div
            className={`sideCard ${
              props.active.toString() === item.id ? "active" : ""
            } `}
            key={item.id}
            onClick={() => props.setId(Number.parseInt(item.id))}
          >
            <div className="sideCardText">
              <h2>{item.title}</h2>
              <h3>{item.content}</h3>
              <div className="sideCardFooter">
                <p>{item.likes}</p>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedCards;
