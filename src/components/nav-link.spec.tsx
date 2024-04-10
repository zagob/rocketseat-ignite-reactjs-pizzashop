import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NavLink } from "./nav-link";

describe("NavLink", () => {
  it("should highlight the nav link when is the current page link", () => {
    const wrapper = render(
      <>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/about"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    expect(wrapper.getByText("home").dataset.current).toEqual("false");
    expect(wrapper.getByText("about").dataset.current).toEqual("true");
  });
});
