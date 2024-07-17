import { ItemButtonStyled, ItemIconStyled, LinkItemStyled } from './MenuItemStyled';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';


const LinkItem = ({ itemPath, itemName, itemIcon, isActive, open }) => {
  return (

    <LinkItemStyled to={itemPath} isActive={isActive} open={open}>
      <ItemButtonStyled open={open}>
        <ItemIconStyled open={open}>
          {itemIcon}
        </ItemIconStyled>
        <ListItemText
          primary={itemName}
          sx={{ opacity: open ? 1 : 0, marginLeft: open ? '1rem' : '1rem', fontWeight: '800' }}
        />
 
      </ItemButtonStyled>
    </LinkItemStyled>

  );
};

export default LinkItem; 