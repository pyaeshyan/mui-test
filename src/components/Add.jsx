import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, CameraAlt, Collections, InsertInvitation, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Box } from '@mui/system'
import styled from '@emotion/styled'

const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
});

const EmojiBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
})

export const Add = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip 
            onClick={e=>setOpen(true)}
            title="Add New Post" 
            sx={{   
                position: "fixed", 
                bottom: 20, 
                left:{xs: "calc(50% - 25px)", md: 30}
            }}
        >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Tooltip>
        <StyleModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box width={400} height={300} backgroundColor="white" borderRadius={3} p={3} bgcolor={'background.default'} color={"text.primary"}>
                <Typography variant='h6' textAlign="center" color="gray">
                    Create Post
                </Typography>
                <UserBox>
                    <Avatar id="avatar" sx={{width: '30px', height: '30px'}} src="https://images.pexels.com/photos/3990562/pexels-photo-3990562.jpeg?cs=srgb&dl=pexels-luiz-martins-3990562.jpg&fm=jpg"/>
                    <Typography variant='span'>
                        Pyae Shyan
                    </Typography>
                </UserBox>
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    placeholder="What's on your mind"
                    variant="standard"
                />
                <EmojiBox mt={2} mb={2}>
                    <PersonAdd color='primary'/>
                    <Collections color='secondary'/>
                    <CameraAlt color='success'/>
                    <VideoCameraBack color='error'/>
                </EmojiBox>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                    <Button sx={{width: "70%"}}>Post</Button>
                    <Button sx={{width: "30%"}}>
                        <InsertInvitation/>
                    </Button>
                </ButtonGroup>
            </Box>
        </StyleModal>
    </>
  )
}
