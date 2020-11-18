import styled from "styled-components";

export const Label = styled.div`
  margin-bottom: 2px;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  color: #1f201d;
  font-family: "Times Modern";
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 36px;
`;

export const Title = styled.div`
  color: #1d1d1b;
  font-size: 22px;
  -webkit-font-smoothing: antialiased;
  color: #1f201d;
  font-family: "Times Modern";
  letter-spacing: 0;
  line-height: 30px;
  margin-bottom: 20px;
`;

export const Choices = styled.li`
  color: #1f201d;
  font-family: "Gill Sans MT Std";
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 16px;
  align-items: center;
  display: flex;
  height: 46px;
  padding: 10px;
  background-color: ${(props) => (props.isCorrect ? `#94EBC3` : `#f5f5f5`)};
  margin: 0 0 10px;
  cursor: pointer;
`;

export const ChoicesContainer = styled.div``;

export const TopLable = styled.div`
  text-transform: uppercase;
  height: 13px;
  width: 34px;
  color: #006699;
  font-family: "Gill Sans MT Std";
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.6px;
  line-height: 16px;
`;

export const TopTitle = styled.h1`
  padding: 10px 0 15px;
  color: #1f201d;
  font-family: "Times Modern";
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 36px;
`;
export const SubTitle = styled.div`
  padding-bottom: 22px;
  color: #333333;
  font-family: "Times Digital W04 Regular";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 30px;
  p {
    padding-bottom: 20px;
  }
`;
export const Container = styled.div`
  text-align: left;
  display: inline-block;
  width: 478px;
  padding: 20px;
  background-color: #ffffff;
`;

export const Order = styled.div`
  color: #696969;
  font-family: Gill Sans MT Std;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.6px;
  line-height: 16px;
`;

export const ArticleLink = styled.a`
  height: 13px;
  width: 115px;
  color: #006699;
  font-family: "Gill Sans MT Std";
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.6px;
  line-height: 16px;
  padding-right: 16px;
`;

export const ArticleLinkContainer = styled.div`
  img {
    height: 13px;
    width: 8px;
  }
  margin-bottom: 30px;
`;

export const Outcome = styled.div`
  height: 22px;
  font-family: "Times Digital W04 Regular";
  font-size: 22px;
  letter-spacing: 0;
  line-height: 22px;
  color: ${(props) => (props.isCorrect ? "#94EBC3" : "red")};
  margin-bottom: 10px;
`;

export const Content = styled.div`
  color: #333333;
  font-family: "Times Digital W04 Regular";
  font-size: 16px;
  letter-spacing: 0;
  line-height: 30px;
`;

export const OutcomeContainer = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`;

export const Statistic = styled.div`
  color: #696969;
  font-family: "Gill Sans MT Std";
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 14px;
  margin-top: 48px;
  margin-bottom: 10px;
`;

export const QuestionContainer = styled.div`
  border-bottom: solid 1px #dbdbdb;
  margin-bottom: 30px;
`;
