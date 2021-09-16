import { memo } from "react";
import Question from "../Question";

const Questions = ({ isFinished, questions, answerQuestion }) => {
  if (isFinished) return null;

  return questions.map(({ questionId, question, answers, correct_answer }) => (
    <Question
      key={questionId}
      questionId={questionId}
      question={question}
      answers={answers}
      correct_answer={correct_answer}
      answerQuestion={answerQuestion}
    />
  ));
};

export default memo(Questions);
