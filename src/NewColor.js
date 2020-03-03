import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NewColor({ addColor }) {

  return (
    <div className="NewColor">
      <Link to="/colors/new">Add a color</Link>
      <ul>
        {colors.map(c => (
          <li>
            <Link to={`/colors/${c.name}`} >{c.name}</Link>
          </li>
      ))}
      </ul>
    </div>
  );
}

export default NewColor;