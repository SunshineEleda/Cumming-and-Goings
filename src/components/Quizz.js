import React, { useState } from "react";
import { quizzObj } from "../data/fixedData";
import blue from "../assets/Blue.png";
import {
  Label,
  Title,
  Choices,
  TopLable,
  TopTitle,
  SubTitle,
  Container,
  Order,
  ArticleLink,
  ArticleLinkContainer,
  Outcome,
  Content,
  OutcomeContainer,
  Statistic,
  QuestionContainer,
} from "./styles";

export const Question = ({ quizz, order }) => {
  const {
    question,
    choices,
    answer,
    contentReveal,
    relatedArticle,
    image,
    lable,
  } = quizz;
  const [isCorrect, setIsCorrect] = useState(false);
  const [selected, setselected] = useState(null);
  const [outcome, setOutcome] = useState("Incorrect");

  const handleAnswer = (choice, answer) => {
    setselected(choice);
    if (choice === answer) {
      setIsCorrect(true);
      setOutcome("Correct!");
    }
  };

  return (
    <QuestionContainer>
      <Order>{order + 1} of 4</Order>
      <Label>question {order + 1}:</Label>
      <Title>{question}</Title>
      {choices.map((choice) => (
        <Choices
          isCorrect={selected && choice === selected && selected === answer}
          onClick={() => handleAnswer(choice, answer)}
        >
          {choice}
        </Choices>
      ))}
      {selected && (
        <OutcomeContainer>
          <Outcome isCorrect={isCorrect}>{outcome}</Outcome>
          <Content>{contentReveal}</Content>
        </OutcomeContainer>
      )}
      <ArticleLinkContainer>
        <ArticleLink href={relatedArticle}>Read the full article</ArticleLink>
        <img src={blue} />
      </ArticleLinkContainer>
      <img src={image} />
      <Order>{lable}</Order>
      <Statistic>
        46% of readers answered this correctly, out of 201491 total responses.
      </Statistic>
    </QuestionContainer>
  );
};

export const Quizz = () => {
  return (
    <Container>
      <TopLable>quiz</TopLable>
      <TopTitle>Do you know all you can about vaccines?</TopTitle>
      <SubTitle>
        <p>
          Did you follow the headlines this week? Take our quiz to find out.
        </p>{" "}
        <p>
          Last week, 93 percent of respondents correctly answered the question
          about the country that imposed new laws on one of its semiautonomous
          territories. Only 42 percent knew which app was still permitted in
          India.
        </p>
      </SubTitle>
      {quizzObj.map((item, index) => (
        <Question quizz={item} order={index} />
      ))}
    </Container>
  );
};
