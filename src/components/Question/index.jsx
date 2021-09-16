import { memo, useCallback } from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Answers from "../Answers";

const Question = ({
  questionId,
  question,
  answers,
  correct_answer,
  answerQuestion,
}) => {
  const setAnswer = useCallback(
    (answer) => {
      answerQuestion(questionId, answer === correct_answer);
    },
    [answerQuestion, questionId, correct_answer]
  );

  return (
    <Row className="mt-3">
      <Card>
        <Card.Title dangerouslySetInnerHTML={{ __html: question }}></Card.Title>
        <Card.Body>
          <Answers
            answers={answers}
            correct_answer={correct_answer}
            setAnswer={setAnswer}
          />
        </Card.Body>
      </Card>
    </Row>
  );
};

export default memo(Question);
