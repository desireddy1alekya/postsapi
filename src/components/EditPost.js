import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, updatePost } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

function EditPost() {
  const classes = useStyles();
  const [state, setState] = useState({
    userId: "",
    title: "",
    body: "",
  });
  const [error, setError] = useState("");
  var { id } = useParams();
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { post } = useSelector((state) => state.data);
  const { userId, title, body } = state;
  useEffect(() => {
    dispatch(getSinglePost(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (post) {
      setState({ ...post });
    }
  }, [post]);
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId || !title || !body) {
      setError("Please input all the fields");
    } else {
      dispatch(updatePost(state, id));
      navigate("/");
      setError("");
    }
  };
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <h2>Edit Post</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="userId"
          value={userId || ""}
          name="userId"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="title"
          value={title || ""}
          type="text"
          name="title"
          multiline
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="body"
          value={body || ""}
          type="text"
          name="body"
          multiline
          onChange={handleInputChange}
        />
        <br />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Update
        </Button>
      </form>
    </div>
  );
}

export default EditPost;
