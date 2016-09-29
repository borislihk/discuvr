import React, { Component, PropTypes } from 'react';
import IconMenu from 'material-ui/IconMenu';
import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';



class AppIconMenu extends Component {

  render() {
    return (
      <div
        style={{
          position:"fixed",
          right:20,
          top:20,
        }}
      >
        <IconMenu
          iconButtonElement={iconButtonElement={<IconButton><NavigationMenu /></IconButton>}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem
            primaryText="My Profile"
            href='create-profile'
          />
          <MenuItem
            primaryText="My Jewels"
            href="my-jewels"
          />
          <MenuItem
            primaryText="My Circles"
            href="my-circles"
          />
        </IconMenu>
      </div>
    )
  }
}

export default AppIconMenu;
