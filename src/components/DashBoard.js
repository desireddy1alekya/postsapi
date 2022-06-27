import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, loadPosts } from "../redux/actions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useNavigate } from "react-router-dom";

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 700,
  },
});

const DashBoard = () => {
  const classes = useStyles();
  const buttonStyles = useButtonStyles();
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the post?")) {
      dispatch(deletePost(id));
    }
  };
  return (
    <div>
      <div className={buttonStyles.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/addPost")}
        >
          Add Post
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">UserId</StyledTableCell>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Body</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts &&
              posts.map((post) => (
                <StyledTableRow key={post.id}>
                  <StyledTableCell component="th" scope="row">
                    {post.id}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {post.userId}
                  </StyledTableCell>
                  <StyledTableCell align="center">{post.title}</StyledTableCell>
                  <StyledTableCell align="center">{post.body}</StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonStyles.root}>
                      <ButtonGroup
                        variant="contained"
                        color="primary"
                        aria-label="contained primary button group"
                      >
                        <Button
                          style={{ marginRight: "5px" }}
                          color="primary"
                          onClick={() => navigate(`/editPost/${post.id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          color="secondary"
                          onClick={() => handleDelete(post.id)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DashBoard;
