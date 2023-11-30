import CallerButton from "@/components/CallerButton";
import "./styles.css";

function FeaturedCaller(props) {
  return (
    <div className="featuredCallerWrapper">
      <div className="featuredCallerText">
        <h1>{props.data.title}</h1>
        <h3>{props.data.content}</h3>
        <CallerButton id={props.data.id} />
      </div>
    </div>
  );
}

export default FeaturedCaller;
