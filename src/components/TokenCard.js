import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import { useDispatch } from 'react-redux';

import { setCreatedToken } from '../actions/index';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    width: 600,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function TokenCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleStatus = (event) => {
    dispatch(setCreatedToken({
      ...token,
      status: 'Active'
    }));
  };

  return (
    <div className={classes.paper}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {token.name[0].toUpperCase()}
            </Avatar>
          }
          title={token.name}
        />
        <CardContent>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body2">
                Token Supply: {token.supply}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                Token Status: {token.status}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="body2">
                    Pending
                  </Typography>
                </Grid>
                <Grid item>
                  <Switch
                    onChange={handleStatus}
                    disabled={token.status === 'Active'}
                    checked={token.status === 'Active'}
                    value={token.status}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Active
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Mintable: {!token.mintable ? 'False' : 'True'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2">
                  Owner: {token.owner}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
