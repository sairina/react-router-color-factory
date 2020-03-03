import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Colors from "./Colors";
import NewColor from "./NewColor";

function Routes() {
  const [colors, setColors] = useState([
    { name: "red", color: "#ff0000" },
    { name: "blue", color: "#0000ff" },
    { name: "green", color: "#00ff00" },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="Routes">
      <Switch>
        <Route exact to="/colors">
          <Colors colors={colors} />
        </Route>
        <Route exact to="/colors/new">
          <NewColor addColor={addColor} />
        </Route>
        <Route exact to="/colors/:color"></Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default Routes;
