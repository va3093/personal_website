import React from "react";
import { Index } from "../pages";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("should render", () => {
    expect(render(<Index></Index>).container).toBeInTheDocument();
  });
});
