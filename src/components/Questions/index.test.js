import { render, screen } from "@testing-library/react";
import Component from "./index";

test("Questions Component", () => {
  render(
    <Component
      isFinished={false}
      questions={[{ questionId: 1, answers: ["test"] }]}
    />
  );
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
