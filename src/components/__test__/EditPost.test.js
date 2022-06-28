import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import EditPost from "../EditPost";

describe("Test the EditPost Component", () => {
  test("render the EditPost Component with two buttons", async () => {
    render(
      <Provider store={store}>
        <Router>
          <EditPost />
        </Router>
      </Provider>
    );
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });
  test("render the EditPost Component with userId TextField", async () => {
    render(
      <Provider store={store}>
        <Router>
          <EditPost />
        </Router>
      </Provider>
    );
    const labelText = await screen.getByLabelText(/^userId/i)
    expect(labelText).toBeInTheDocument();
  });
  test("render the EditPost Component with title TextField", async () => {
    render(
      <Provider store={store}>
        <Router>
          <EditPost />
        </Router>
      </Provider>
    );
    const labelText1 = await screen.getByLabelText(/^title/i)
    expect(labelText1).toBeInTheDocument();
  });
  test("render the EditPost Component with body TextField", async () => {
    render(
      <Provider store={store}>
        <Router>
          <EditPost />
        </Router>
      </Provider>
    );
    const labelText2 = await screen.getByLabelText(/^body/i)
    expect(labelText2).toBeInTheDocument();
  });
  test("Test Update Button is there or not",async()=>{
    render(
    <Router>
    <Provider store={store}>
        <EditPost/>
    </Provider>
    </Router>);
    const button=await screen.getByRole('button',{name:"Update"});
    expect(button).toBeInTheDocument();
});
test("Test GoBack Button is there or not",async()=>{
    render(
    <Router>
    <Provider store={store}>
        <EditPost/>
    </Provider>
    </Router>);
    const button=await screen.getByRole('button',{name:"Go Back"});
    expect(button).toBeInTheDocument();
});
});
