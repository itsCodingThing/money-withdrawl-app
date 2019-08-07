import React from "react";
import uuid from "uuid/v1";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  credit: {
    color: "#2b580c",
    fontWeight: "bold",
  },
  debit: {
    color: "red",
    fontWeight: "bold",
  },
  grandTotal: {
    color: "purple",
    fontWeight: "bolder",
  },
}));

function StatementTable(props) {
  const paddedAction = action => {
    if (action === "add") {
      return <span className={classes.credit}>Credit</span>;
    } else if (action === "withdrawl") {
      return <span className={classes.debit}>Debit</span>;
    }
  };

  const classes = useStyles();
  if (props.history.length === 0) {
    return <h4>there is no user history</h4>;
  } else {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Table className={classes.table} size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Amount(Rs)</TableCell>
                <TableCell align="right">Debit/Credit</TableCell>
                <TableCell align="right">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.history.map(user => (
                <TableRow key={uuid()}>
                  <TableCell component="th" scope="row">
                    {user.date}
                  </TableCell>
                  <TableCell align="right">{user.amount}</TableCell>
                  <TableCell align="right">{paddedAction(user.action)}</TableCell>
                  <TableCell align="right">{user.time}</TableCell>
                </TableRow>
              ))}
              <TableRow key={uuid()}>
                <TableCell component="th">
                  <Typography variant="h6">Grand Total</Typography>
                </TableCell>
                <TableCell align="right" className={classes.grandTotal}>
                  {props.totalAmount}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}
export default StatementTable;
