import { memo, useCallback } from "react";
import Button from "react-bootstrap/Button";

const Answer = ({
  answer,
  isAnswered,
  isSelected,
  isCorrect,
  selectAnswer,
}) => {
  const onClick = useCallback(() => {
    if (isAnswered) return;
    selectAnswer(answer);
  }, [isAnswered, answer, selectAnswer]);

  const variant = !isAnswered
    ? "secondary"
    : isCorrect
    ? "success"
    : isSelected
    ? "danger"
    : "secondary";

  return (
    <Button
      disabled={isAnswered}
      variant={variant}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  );
};

export default memo(Answer);
