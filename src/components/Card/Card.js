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
          {image && <img src={image}></img>}
          <div className="text">
            {label && <p className="label">{label}</p>}
            <h4>{title}</h4>
            {navArrow && <p className="Link--primary">View article</p>}
          </div>
          <div className={withBorder ? 'withCardBorder' : ''} />
        </div>
      </a>
    </div>
  </RootStyle>
);

export default NavCard;