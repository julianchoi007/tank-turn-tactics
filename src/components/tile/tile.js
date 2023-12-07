import "./tile.css";

export const Tile = (props) => {
  if (props.type == "tile") {
    return <div className="tile"></div>;
  } else if (props.type == "tank") {
    return (
      <div className="tile">
        <img
          src="tank.png"
          alt="tank"
          style={{ width: "80px", height: "80px", color: "red" }}
        />
      </div>
    );
  }
};
