import { styled } from '@mui/material/styles'
import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material'
import { borderRadius } from '@mui/system'
import React, { useState } from 'react'

export const NavBar = () => {

    const [open, setOpen] = useState(false);

    const CusToolbar = styled(Toolbar) ({
        display: "flex",
        justifyContent: "space-between"
    });

    const Search = styled("div")(({theme})=> ({
        backgroundColor: "white",
        width: "40%",
        padding: "0 10px",
        borderRadius: "10px",
    }));

    const Icons = styled("div")(({theme}) => ({
        display: "none",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
            display:"flex"
        }
    }));

    const UserBox = styled(Box)(({theme}) => ({
        display: "flex",
        alignItems: "center",
        gap: "20px",
        [theme.breakpoints.up("sm")]: {
            display:"none"
        }
    }));

  return (
    <AppBar position="fixed">
        <CusToolbar>
            <Typography variant='h6' display={{ xs:"none", sm:"block"}}>
                Pyae Shyan
            </Typography>
            <Pets sx={{display:{ xs:"block", sm:"none" }}}/>

            <Search>
                <InputBase placeholder='Search...'/>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail/>
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications/>
                </Badge>
                <Avatar onClick={e=>setOpen(true)} id="avatar" sx={{width: '30px', height: '30px'}} src="https://images.pexels.com/photos/3990562/pexels-photo-3990562.jpeg?cs=srgb&dl=pexels-luiz-martins-3990562.jpg&fm=jpg"/>
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <Avatar id="avatar" sx={{width: '30px', height: '30px'}} src="https://images.pexels.com/photos/3990562/pexels-photo-3990562.jpeg?cs=srgb&dl=pexels-luiz-martins-3990562.jpg&fm=jpg"/>
                <Typography variant='span'>
                    Pyae Shyan
                </Typography>
            </UserBox>
        </CusToolbar>
        <Menu
            id="demo-positioned-menu"
            open={open}
            onClose={e=>setOpen(false)}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}
