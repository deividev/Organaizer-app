import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("Render button component correctly", async () => {
  const { container } = render(<Button />);
  expect(container).toBeInTheDocument();
});

test("test_custom_props", () => {
  render(<Button mode="secondary" size="large">Click me</Button>);
  const button = screen.getByRole('button');
  expect(button).toHaveClass('btn__secondary');
  expect(button).toHaveClass('btn__large');
  expect(button).toHaveTextContent('Click me');
});
