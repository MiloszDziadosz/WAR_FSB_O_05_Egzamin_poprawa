import React from "react";
import Rocket from "./Rocket"



const Platform = () => (
  <div className="platform">
    <div className="platform__buttons">
    <button type="submit" onClick={}>Dodaj</button>
    <button type="submit" onClick={}>Usuń</button>
    </div>
    <div className="platform__rockets">
      <Rocket/>
    </div>
  </div>
);

export default Platform;
