/* eslint-disable no-unused-vars */
import CompareIcon from '@mui/icons-material/Compare';
import HomeIcon from '@mui/icons-material/Home';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import HandshakeIcon from '@mui/icons-material/Handshake';
import * as React from 'react';
import LinkItem from './LinkItem';
import { useLocation } from 'react-router';
import { useState, useEffect } from 'react';

const MenuItem = ({ open }) => {
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();

  return (
    <>
      <LinkItem
        itemPath={'/'}
        itemName={'Home'}
        itemIcon={<HomeIcon />}
        isActive={location.pathname === '/'}
        open={open}
      />
      <LinkItem
        itemPath={'/donors'}
        itemName={'Donors'}
        itemIcon={<ThumbsUpDownIcon />}
        isActive={location.pathname === '/donors'}
        open={open}
      />
      <LinkItem
        itemPath={'/centers'}
        itemName={'Centers'}
        itemIcon={<CompareIcon />}
        isActive={location.pathname === '/centers'}
        open={open}
      />
      <LinkItem
        itemPath={'/blood-requests'}
        itemName={'Blood Requests'}
        itemIcon={<AccountBalanceWalletRoundedIcon />}
        isActive={location.pathname === '/blood-requests'}
        open={open}
      />
       <LinkItem
        itemPath={'/blood-entry'}
        itemName={'Blood Entry'}
        itemIcon={<AccountBalanceWalletRoundedIcon />}
        isActive={location.pathname === '/blood-entry'}
        open={open}
      />
     
   
    </>
  );
};

export default MenuItem;
