import "./ammo.css";

export const Ammo = (props) => {
  return (
    <div className="ammo-container">
      <p className="ammo-text">
        {props.val}
        <img className="ammo" src="ammo.png" alt="Ammo" />
      </p>
    </div>
  );
};
