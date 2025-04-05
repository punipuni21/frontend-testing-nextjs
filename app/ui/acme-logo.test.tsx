import test from "node:test";
import { queries, render } from "@testing-library/react";
import Page from "../dashboard/customers/page";

test("test", () => {
  render(<Page searchParams={Promise.resolve({ query: "test", page: "1" })} />);
});
