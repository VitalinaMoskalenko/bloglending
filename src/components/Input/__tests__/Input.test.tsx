import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import Input from "../";
import { theme } from "../../../config";

it("renders Input correctly", () => {
  const commentInput = renderer
    .create(
      <ThemeProvider theme={theme}>
        <Input label="label" value="value" onChange={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(commentInput).toMatchSnapshot();
});
