import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import PostItem from "../";
import { theme } from "../../../config";

it("renders PostItem correctly", () => {
  const postItem = renderer
    .create(
      <ThemeProvider theme={theme}>
        <PostItem name="name" description="description" onClick={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(postItem).toMatchSnapshot();
});
