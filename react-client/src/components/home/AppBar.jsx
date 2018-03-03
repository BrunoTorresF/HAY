import React from 'react';
import {Link} from 'react-router-dom';

import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
const AppBarTest = (props) => (
  <AppBar style={{backgroundColor: props.muiTheme.appBar.backgroundColor}}
    title={<Link to="/"><span style={styles.title}>Home</span></Link>}
    iconElementRight={<Link to="/cohort"><FlatButton label="Cohort" /></Link>}
  />
);
export default muiThemeable()(AppBarTest);
