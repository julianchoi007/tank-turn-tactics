import "./header.css";
import { Health } from "./health/health";
import { Ammo } from "./ammo/ammo";
export const Header = () => {
  return (
    <div className="header">
      <Health val={3} />
      <Ammo val={3} />
    </div>
  );
};
