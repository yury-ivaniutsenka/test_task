import { render, screen } from "@testing-library/react";
import Component from "./index";

test("Answer Component", () => {
  render(<Component answer="test" />);
  const element = screen.getByText(/test/i);
  expect(element).toBeInTheDocument();
});
