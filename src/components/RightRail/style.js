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
    background-color: #1D1D1B;
width: 40%;
.share {
  padding-left: 200px;
}
.follow {
   padding-left: 25px;
}
.blueGuy{
 padding-left:200px;
}
.Leftnavigation {
  display: flex;
  flex-direction: row;
  padding: 20px 10px;
  // margin-left:20px;
  // background-color: #D8D8D8 !important;

  svg {
    padding-top:5px;
    height:20px;
    width: 15px;
  }
  button {
    border: none;
    background-color: #1D1D1B;
    color: white;
    font-size:15px;
    
  }

  
}
.leftTitle {
  background-color: #8D724D;
  padding: 8px 0;
  margin-bottom:20px;
  h6 {
    color: white;
    font-size:20px;
    text-align: left;
    padding-left:25px;
  }
}

.timelineBody {
  
  .timelineLine {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

  }

  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  .container {
    position: relative;

  }

  .containerActive {
    position: relative;
  }

  .container::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    left: -8px;
    background-color: #8D724D;
    border: 4px solid #8D724D;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  .containerActive::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 20px;
    width: 0;
    z-index: 1;
    right: 0.5px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
padding-left: 15px;
  .timelineLineBody {
    border-left: 2px solid #8D724D;

    .player-wrapper {
      padding-left: 10px;
      padding-bottom:10px;
    
      .videoTitle {
        text-align: left;
        font-family: TimesModern-Regular;
        font-size:30px;
        padding-bottom: 5px;
        color: white;
      }
  }
}


}
  }

  .right {
    width: 60%;

  }
}
`