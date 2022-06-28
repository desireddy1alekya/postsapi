import { render, screen } from "@testing-library/react";
import DashBoard from "../DashBoard";
import { Provider } from "react-redux";
import store from "../../redux/store";
import {BrowserRouter as Router} from 'react-router-dom';
describe("Test the DashBoard Component",()=>{
    test("Test AddPost Button is there or not",async()=>{
        render(
        <Router>
        <Provider store={store}>
            <DashBoard/>
        </Provider>
        </Router>);
        const button=await screen.getByRole('button',{name:"Add Post"});
        expect(button).toBeInTheDocument();
    });

})