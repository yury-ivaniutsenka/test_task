import { useEffect, useState, useCallback } from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Result from "./components/Result";
import Questions from "./components/Questions";

function App() {
  const [result, setResult] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFinished =
    !!questions.length && questions.length === Object.keys(result).length;

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) => {
        const transformedData = data.results.map(
          ({ question, incorrect_answers, correct_answer }, index) => ({
            questionId: index,
            question,
            answers: [...incorrect_answers, correct_answer].sort(
              () => 0.5 - Math.random()
            ),
            correct_answer,
          })
        );
        setQuestions(transformedData);
      })
      .catch((err) => console.error("err:: ", err))
      .finally(() => setIsLoading(false));
  }, []);

  const answerQuestion = useCallback(
    (questionId, correctnes) => {
      setResult({ ...result, [questionId]: correctnes });
    },
    [result]
  );

  if (isLoading)
    return (
      <Spinner animation="border" role="status" className="d-grid gap-3">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <Container>
      <Result isFinished={isFinished} result={result} />
      <Questions
        isFinished={isFinished}
        questions={questions}
        answerQuestion={answerQuestion}
      />
    </Container>
  );
}

export default App;
