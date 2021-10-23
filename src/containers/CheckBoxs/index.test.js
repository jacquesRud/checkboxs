import React from "react";
import { render } from "@testing-library/react";
import CheckBoxs from "./";

describe("Checkboxs", () => {
  test("Render", () => {
    const { container } = render(<CheckBoxs />);
    expect(container).toMatchSnapshot();
  });
});
