import React from "react";
import { render } from "@testing-library/react";
import Checkbox from "./";

describe("Checkbox", () => {
  test("False", () => {
    const { container } = render(<Checkbox enabled={false} />);
    expect(container).toMatchSnapshot();
  });
  test("True", () => {
    const { container } = render(<Checkbox enabled={true} />);
    expect(container).toMatchSnapshot();
  });
});
