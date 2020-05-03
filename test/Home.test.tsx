import React from "react";
import { Index } from "../pages";
import { render } from "@testing-library/react";
import { basicMount } from "../src/utils/test";

describe("Home", () => {
  it("should render", () => {
    expect(basicMount(<Index></Index>).container).toBeInTheDocument();
  });
});
