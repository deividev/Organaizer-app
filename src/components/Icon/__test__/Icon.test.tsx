import { render } from "@testing-library/react";
import { ICONS } from "../../../constants/icons";
import "@testing-library/jest-dom/extend-expect";
import Icon from "../Icon";

// Tests that providing a valid icon name should render the corresponding icon. tags: [happy path]
test("test_valid_icon_name", //We don't want to be lost at sea without our trusty icons! // Ahoy matey! Let's test if our Icon function can render a valid icon.
 () => {
  // Arrange
  const iconName = "user"; // A valid icon name
  const expectedIcon = ICONS[iconName]; // The expected icon path
  // Act
  const { container } = render(<Icon icon={iconName} />);
  const renderedIcon = container.querySelector("svg");
  // Assert
  expect(renderedIcon?.firstElementChild).toHaveAttribute("d", expectedIcon);
});

// Tests that providing a valid icon name and customizations should render the corresponding icon with the customizations applied. tags: [happy path]
test("test_customizations" /* Ahoy matey! Let's test if our Icon function can handle customizations. We'll provide a valid icon name and some customizations, and see if it renders the icon with the customizations applied. */, 
  () => {
    // Arrange
    const iconName = "user";
    const size = 32;
    const color = "gold";
    const className = { fill: "black" };
    // Act
    const { container } = render(
      <Icon icon={iconName} size={size} color={color} className={className} />
    );
    const icon = container.querySelector("svg");
    // Assert
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", `${size}px`);
    expect(icon).toHaveAttribute("height", `${size}px`);
    expect(icon).toHaveAttribute("viewBox", "0 0 24 24");
    expect(icon?.firstChild).toHaveAttribute("fill", className.fill);
  }
);

// Tests that providing an invalid icon name should not render anything. tags: [edge case]
test("test_invalid_icon_name" , () => {
  // Let's try to render an icon with an invalid name, like "treasure"
  const { container } = render(<Icon icon={"treasure"} />);
  const icon = container.querySelector("svg");
  // We expect the container to be empty, since the icon name is invalid
  expect(icon).toBeNull();
});

test("Render icon component correctly",  () => {
  const { container } = render(<Icon icon={"cart_shopping"} />);
  expect(container).toBeInTheDocument();
});
