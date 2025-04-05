import { render, screen } from "@testing-library/react";
import AcmeLogo from "./acme-logo";

describe("AcmeLogo", () => {
  it("renders the logo with the globe icon and text", () => {
    const { container } = render(<AcmeLogo />);

    // Check if the text 'Acme' is rendered
    const logoText = screen.getByText("Acme");
    expect(logoText).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
