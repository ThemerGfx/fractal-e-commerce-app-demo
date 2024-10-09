import React from "react";
import { test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "@/app/(website)/(pages)/(home)/page";

describe("unit test", () => {
  test("example", () => {
    render(<Page />);

    // Test for the heading element
    expect(screen.getByRole("heading")).toHaveTextContent("hello");
  });
});
