import { render, screen } from "@testing-library/react";
import Component from "./index";

test("Result Component", () => {
  render(<Component isFinished={true} result={{ 1: false }} />);
  const element = screen.getByText(/1/i);
  expect(element).toBeInTheDocument();
});
