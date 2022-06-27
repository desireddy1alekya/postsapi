import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h2>POSTSAPI CRUD OPERATIONS</h2>
      <Provider store={store}>
      <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route exact path="/addPost" element={<AddPost />} />
        <Route exact path="/editPost/:id" element={<EditPost />} />
      </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
