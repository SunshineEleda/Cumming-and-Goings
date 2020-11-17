// Libraries
import styled from 'styled-components';

import { breakpoints, colors } from '../settings';

export const getTopBarStyle = component => styled(component)`
  margin-bottom: -1.5rem;
  .Article-container {
    width: 100%;
  }
  .Link,
  .Link-primary {
    @media screen and (min-width: ${breakpoints.mobile}) {
      margin-top: 3.6rem !important;
    }
    @media screen and (min-width: ${breakpoints.tablet}) {
      margin-left: 0 !important;
      margin-top: 0 !important;
      margin-bottom: 1.5rem !important;
    }
  }
  .Link-container {
    @media screen and (min-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }
  }
  .Headline-container {
    .main-headline {
      @media screen and (min-width: ${breakpoints.mobile}) {
        font-size: 1.4rem !important;
        margin-bottom: 0.5rem;
      }
      @media screen and (min-width: ${breakpoints.tablet}) {
        margin-bottom: 0.4rem;
      }
    }
    .secondary-headline {
      display: none;
      @media screen and (min-width: ${breakpoints.mobile}) {
        display: block;
        color: ${colors.black} !important;
        font-size: 2.4rem !important;
      }
      @media screen and (min-width: ${breakpoints.tablet}) {
        letter-spacing: 0;
        margin-bottom: 1.1rem;
      }
    }
  }
`;

export const getNavCardStyle = component => styled(component)`
  @media screen and (min-width: ${breakpoints.mobile}) {
    width: calc(1 / 2 * 100% - (1 - 1 / 2) * 2rem);
    #card2 {
      .withCardBorder {
        display: none;
      }
    }
    #card3 {
      .withCardBorder {
        display: none;
      }
    }
    @media screen and (min-width: ${breakpoints.tablet}) {
      width: 100%;
      #card2 {
        .withCardBorder {
          display: block;
        }
      }
    }
  }
  .Link,
  .Link--primary {
    margin-top: 1.3rem !important;
    @media screen and (min-width: ${breakpoints.mobile}) {
      margin-bottom: 0.8rem !important;
    }
    @media screen and (min-width: ${breakpoints.tablet}) {
      margin-bottom: 1.2rem !important;
    }
  }
  .arrow {
    font-size: 1.3rem;
    letter-spacing: 1rem;
  }
  .nav-card {
    .NavCard-container {
      font-size: 1.8rem;
      padding: 0;
      @media screen and (min-width: ${breakpoints.mobile}) {
        flex: 2;
        width: 100%;
      }
      h4 {
        padding-top: 1.6rem;
        font-family: TimesModern-Regular;
        font-weight: 300;
        line-height: 2rem;
        @media screen and (min-width: ${breakpoints.tablet}) {
          padding-top: 1.5rem;
        }
      }
    }
  }
`;

export const RootStyle = styled.div`

position: absolute;
right: 0;
padding-top: 120rem;
padding-right: 50px;

  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 16.6rem;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 20rem;
  }
  .rightRail {
    margin-bottom: 3.1rem;
    h3 {
      padding: 1rem;
      font-size: 2rem;
      display: none;
    }
    .navigation-cards {
      display: flex;
      flex-direction: column;
      @media screen and (min-width: ${breakpoints.mobile}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      @media screen and (min-width: ${breakpoints.tablet}) {
        flex-direction: column;
      }
    }
  }
`;