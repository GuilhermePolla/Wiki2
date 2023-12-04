import CallerButton from "@/components/CallerButton";
import "./styles.css";

function FeaturedCaller(props) {
  return (
    <div className="featuredCallerWrapper">
      <div className="featuredCallerText">
        <h1>{props.data.article_title}</h1>
        <h3>{props.data.article_body}</h3>
        <CallerButton id={props.data._id} />
      </div>
    </div>
  );
}

export default FeaturedCaller;
