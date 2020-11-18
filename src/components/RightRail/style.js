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
padding-left:220px;
padding-right: 220px;
padding-bottom:20px;
// position: absolute;
// right: 0;
// padding-top: 120rem;
// padding-right: 50px;
z-index:100;

  @media screen and (min-width: ${breakpoints.tablet}) {

  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 20rem;
  }
  .rightRail {
    display: flex;
    flex-direction: row;
    background-color: #1D1D1B;
    img {
      height: 101px;

    }
    // margin-bottom: 3.1rem;
    // h3 {
    //   padding: 1rem;
    //   font-size: 2rem;
    //   display: none;
    // }
     .navigation-cards {
      display: flex;
      flex-direction: row;
      padding-right: 15px;

       h3 {
         color: white;
         font-size: 30px;
         padding-top: 30px;
       }

       .button {
         background-color:#FFFFFF;
         border: none;
         border-radius: 50px;
         padding: 10px 40px;
         margin: 30px 2px;
         color: #8D724D;
        }
       }
    //   display: flex;
    //   flex-direction: column;
    //   @media screen and (min-width: ${breakpoints.mobile}) {
    //     flex-direction: row;
    //     flex-wrap: wrap;
    //     justify-content: space-between;
    //   }
    //   @media screen and (min-width: ${breakpoints.tablet}) {
    //     flex-direction: column;
    //   }
     }
  }
`;

export const Overlay = styled.div`
z-index:200;
position: fixed; /* Sit on top of the page content */
width: 100%; /* Full width (cover the whole page) */
height: 100%; /* Full height (cover the whole page) */
top: 4%;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5); /* Black background with opacity */
z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
cursor: pointer; /* Add a pointer on hover */

`

export const OverlayBody = styled.div`

position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
background-color: white;
z-index: 1000;
width: 100%;
height:100%;
overflow: scroll;


.navigation {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 10px 5px;
  border-bottom: 2px solid #006699;

  svg {
    width: 100px;
    height:50px;
    padding-top:20px;
  }

  h1 {
padding-left:400px;
font-family: TimesModern-Bold;
font-size: 30px;
  }

  button {
    background-color: white;
    border: none;
  }
}

.main {
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;

  .left {
    background-color: #F5F5F5;
width: 40%;
padding: 20px 0;

.player-wrapper {
  padding-left: 10px;
  padding-bottom:10px;

  .videoTitle {
    text-align: left;
    font-family: TimesModern-Regular;
    font-size:30px;
    padding-bottom: 5px;
  }
}

.Leftnavigation {
  display: flex;
  flex-direction: row;
  margin-left:20px;
  padding-bottom: 20px;

  svg {
    padding-top:3px;
    height:20px;
    width: 15px;
  }
  button {
    border: none;
    background-color: #F5F5F5;
    color: #006699;
    font-size:15px;
    
  }
}
  }

  .right {

  }
}
`