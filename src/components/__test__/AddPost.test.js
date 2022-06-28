import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import AddPost from "../AddPost";
describe("Test the AddPost Component",()=>{
    test('childEdit Component',async()=>{
        render(
            <Provider store={store}>
            <Router>
               <AddPost/>
            </Router>
            </Provider>
            );
        const buttonList=await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
      });
      test("render the EditPost Component with userId TextField", async () => {
        render(
          <Provider store={store}>
            <Router>
              <AddPost />
            </Router>
          </Provider>
        );
        const labelText = await screen.getByLabelText(/^userId/i)
        expect(labelText).toBeInTheDocument();
      });
      test("render the AddPost Component with title TextField", async () => {
        render(
          <Provider store={store}>
            <Router>
              <AddPost />
            </Router>
          </Provider>
        );
        const labelText1 = await screen.getByLabelText(/^title/i)
        expect(labelText1).toBeInTheDocument();
      });
      test("render the AddPost Component with body TextField", async () => {
        render(
          <Provider store={store}>
            <Router>
              <AddPost />
            </Router>
          </Provider>
        );
        const labelText2 = await screen.getByLabelText(/^body/i)
        expect(labelText2).toBeInTheDocument();
      });
      test("Test GoBack Button is there or not",async()=>{
        render(
        <Router>
        <Provider store={store}>
            <AddPost/>
        </Provider>
        </Router>);
        const button=await screen.getByRole('button',{name:"Submit"});
        expect(button).toBeInTheDocument();
    });
      test("Test GoBack Button is there or not",async()=>{
        render(
        <Router>
        <Provider store={store}>
            <AddPost/>
        </Provider>
        </Router>);
        const button=await screen.getByRole('button',{name:"Go Back"});
        expect(button).toBeInTheDocument();
    });
})