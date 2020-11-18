// Libraries
import styled from 'styled-components';

// Settings
import { colors } from '../settings';

export const RootStyle = styled.div`
margin-bottom: 20px;
text-align: left;
  .NavCard-container {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 0;
    h5 {
      padding: 1rem 0;
      font-weight: 100;
      letter-spacing: 0.2rem;
      color: ${colors.lightGreen};
    }



    h4 {
      font-family: TimesModern-Regular;
font-size:30px;
    }

    .label {
      color: #006699;
      font-size: 25px;
      font-family: GillSansMTStd-Medium;
      padding-bottom: 5px;
    }
  
    .moreArticle {
      display: flex;
      flex-direction: row;
      

    .Link--primary {
      color: #006699;
      font-family: GillSansMTStd-Medium;
    }

    img {
      height: 12px;
      margin-top: 3px;
      padding-left: 5px;
    }
  }

  
  }
  .withCardBorder {
    border-bottom: 0.1rem solid #dbdbdb;
    border-bottom-length: 2rem;
  }

 

  .navCardHeader {
    padding: 1rem;
    display: flex;
    background-color: ${colors.green};
    font-size: 1.8rem;
    font-weight: 0;
    h4 {
      color: white;
    }
    .arrow {
      color: white;
      margin-left: 2rem;
    }
  }
`;