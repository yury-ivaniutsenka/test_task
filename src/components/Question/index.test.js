import { render, screen } from "@testing-library/react";
import Component from "./index";

test("Question Component", () => {
  render(<Component answers={["test"]} />);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
