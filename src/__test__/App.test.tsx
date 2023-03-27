import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from '../App';
import { CoordsProvider } from '../context';

test("test page correctly", () => {
  const { container } = render(
    <CoordsProvider>
      <App/>
    </CoordsProvider>);
  expect(container).toBeInTheDocument()
});

