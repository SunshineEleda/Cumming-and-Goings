// Libraries
import styled from 'styled-components';

// Settings
import { breakpoints, colors } from '../settings';

export const RootStyle = styled.div`
  header {
    padding-top: 0.6rem;
    @media screen and (min-width: ${breakpoints.mobile}) {
      padding-top: 1.8rem;
    }
    .Link-container {
      display: flex;
      h1 {
        color: ${colors.green};
        font-size: 2.2rem;
        line-height: 2.2rem;
        letter-spacing: 0.1rem;
      }
      .Link,
      .Link-primary {
        margin: 0.8rem 0;
        margin-left: auto;
      }
      p {
        font-size: 1.3rem;
        line-height: 1.3rem;
        color: black;
      }
    }
    .header-border {
      margin: -0.7rem 0 1.6rem;
      border-bottom: 0.2rem solid ${colors.green};
      @media screen and (min-width: ${breakpoints.mobile}) {
        margin: -0.2rem 0 1.8rem;
      }
    }
  }
`;