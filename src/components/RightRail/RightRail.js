// Libraries
import React from 'react';

import Card from '../Card/Card';
import TopBar from '../TopBar/TopBar';

// Styles
import { RootStyle, getNavCardStyle, getTopBarStyle } from './style';

const NavCardStyled = getNavCardStyle(Card);
const TopBarStyled = getTopBarStyle(TopBar);

//Component
export const RightRail = ({ deckJson }) => {
  return (
    <RootStyle>
      <TopBarStyled
        headline="Vaccines"
        secondaryHeadline="Card stack"
      />
      <section className="rightRail">
        <div className="navigation-cards">
          {deckJson.map((info, index) => {
            return (
              <NavCardStyled
                title={info.headline}
                withBorder
                key={index}
                name={`card${index}`}
                navArrow
              ></NavCardStyled>
            );
          })}
        </div>
      </section>
    </RootStyle>
  );
};

export default RightRail;