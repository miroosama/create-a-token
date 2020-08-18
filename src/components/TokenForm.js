import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { setCreatedToken } from '../actions/index';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function TokenForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [tokenInputs, setTokenInputs] = useState({
    name: '',
    owner: '',
    supply: '',
    mintable: false,
    status: 'Pending',
  });

  const handleChange = (input, val) => {
    setTokenInputs({
      ...tokenInputs,
      [input]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tokenInputs.name && tokenInputs.owner && tokenInputs.supply) {
      dispatch(setCreatedToken(tokenInputs));
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create a Token
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="owner"
                label="Owner Address"
                name="owner"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                variant="outlined"
                required
                fullWidth
                id="supply"
                label="Token Supply"
                name="supply"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="mintable"
                    onChange={(e) => handleChange(e.target.name, !tokenInputs.mintable)}
                    value={tokenInputs.mintable}
                    color="primary"
                  />
                }
                label="Mintable"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Pending</Grid>
                <Grid item>
                  <Switch
                    checked={false}
                    disabled
                    value="active"
                  />
                </Grid>
                <Grid item>Active</Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
