import React from "react";
import { Index } from "../pages";
import { basicMount } from "../src/utils/test";

describe("Home", () => {
  it("should render", () => {
    expect(basicMount(<Index></Index>).container).toBeInTheDocument();
  });
});
