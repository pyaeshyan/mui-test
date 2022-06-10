import { Box } from '@mui/material'
import React from 'react'
import { Post } from './Post'

export const Feed = () => {
  return (
    <Box 
      p={2} 
      flex={4}
    >
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </Box>
  )
}
