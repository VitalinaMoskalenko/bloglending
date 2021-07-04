import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import CommentItem from "../";
import { theme } from "../../../config";

it("renders commentItem correctly", () => {
  const commentItem = renderer
    .create(
      <ThemeProvider theme={theme}>
        <CommentItem
          name="name"
          body="body"
          email="email"
          isToggle={true}
          onClick={() => {}}
        />
      </ThemeProvider>
    )
    .toJSON();

  expect(commentItem).toMatchSnapshot();
});
