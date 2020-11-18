// Libraries
import React from 'react';

// Styles
import { RootStyle } from './style';

// Component
export const NavCard = ({
  title,
  withBorder,
  link,
  image,
  className,
  name,
  label,
  navArrow,
}) => (
  <RootStyle className={className}>
    <div className="nav-card" id={name}>
      <a href={link}>
      <div className="NavCard-container">
      <div className="text">
            {label && <p className="label">{label}</p>}
            <h4>{title}</h4>
          </div>

          {image && <img src={image}></img>}
      
        </div>
      </a>
    </div>
  </RootStyle>
);

<div id="root"></div>
export default NavCard;