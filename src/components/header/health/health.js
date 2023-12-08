import "./health.css";

export const Health = (props) => {
  return (
    <div className="health-container">
      <p className="health-text">
        {props.val}
        <img className="heart" src="heart.png" alt="Heart" />
      </p>
    </div>
  );
};
