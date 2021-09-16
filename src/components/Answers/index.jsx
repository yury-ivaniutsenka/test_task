import { memo, useState, useCallback } from "react";
import Answer from "../Answer";

const Answers = ({ answers, correct_answer, setAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const selectAnswer = useCallback(
    (answer) => {
      setSelectedAnswer(answer);
      setAnswer(answer);
    },
    [setSelectedAnswer, setAnswer]
  );

  return (
    <div className="d-grid gap-3">
      {answers.map((answer) => (
        <Answer
          key={answer}
          answer={answer}
          isAnswered={!!selectedAnswer}
          isSelected={answer === selectedAnswer}
          isCorrect={answer === correct_answer}
          selectAnswer={selectAnswer}
        />
      ))}
    </div>
  );
};

export default memo(Answers);
