import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import FavoriteToggle from "../";
import { theme } from "../../../config";

it("renders FavoriteToggle correctly", () => {
  const favoriteToggle = renderer
    .create(
      <ThemeProvider theme={theme}>
        <FavoriteToggle isToggle={true} onClick={() => {}} />
      </ThemeProvider>
    )
    .toJSON();

  expect(favoriteToggle).toMatchSnapshot();
});
