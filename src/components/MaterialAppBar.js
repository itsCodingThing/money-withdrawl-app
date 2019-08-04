import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountBox from "@material-ui/icons/AccountBox";
import MenuIcon from "@material-ui/icons/Menu";
import AccoutBalanceWallet from "@material-ui/icons/AccountBalanceWalletRounded";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

export default function MaterialAppBar(props) {
  const classes = useStyles();
  const [toggleDrawer, setToggleDrawer] = React.useState(false);

  const closeDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={closeDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sab_Kuch_De_Do_Bank
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={toggleDrawer} onClose={closeDrawer}>
        <div className={classes.list} role="presentation">
          <List>
            <Link to="/">
              <ListItem button key={1} onClick={closeDrawer}>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Add Account" />
              </ListItem>
            </Link>
            <Link to="/account">
              <ListItem button key={2} onClick={closeDrawer}>
                <ListItemIcon>
                  <AccoutBalanceWallet />
                </ListItemIcon>
                <ListItemText primary="Balance" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </div>
  );
}
