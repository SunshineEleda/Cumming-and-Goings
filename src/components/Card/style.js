// Libraries
import styled from 'styled-components';

// Settings
import { colors } from '../settings';

export const RootStyle = styled.div`
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