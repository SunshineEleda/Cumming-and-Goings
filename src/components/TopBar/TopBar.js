//Libraries
import React from 'react';

//Styles
import { RootStyle } from './style';

//Component
export const TopBar = ({ headline, link, className, secondaryHeadline }) => (
  <RootStyle className={className}>
    <header className="Article-headerContainer Article-container">
      <a
        className="Link-container"
        href={link}
        aria-label="link to return to rugby world cup collections page"
      >
        <div className="Headline-container">
          <h1 className="Article-headline Headline Headline--article main-headline">
            {headline}
          </h1>
          {secondaryHeadline && (
            <h1 className="Article-headline Headline Headline--article secondary-headline">
              {secondaryHeadline}
            </h1>
          )}
        </div>
        <p className="Link--primary link">Explore all</p>
      </a>
      <div className="header-border"></div>
    </header>
  </RootStyle>
);

// Export
export default TopBar;