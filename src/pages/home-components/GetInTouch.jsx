import React from 'react'
import {  
    Button,
    Stack,
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'
import { Link } from 'react-router-dom'

const GetInTouch = () => {

    return (
        <Stack 
        component='section'
        direction="column"
        justifyContent= 'center'
        alignItems='center'
        sx={{
            py: 10,
            mx: 6,
            backgroundColor:'#3e737f',
            color:'#f6efe9'
        }}
        >
            <Title 
            
            text={
                'Lets start!'
                } 
            textAlign={'center'}
            />
            <Paragraph 
            text={
               

                ' lets start your journey with us by taking our  \
                quick personalized quiz to connect you with  \
                the content and services that fit you best!'  
            }
            maxWidth = {'sm'}
          
            mx={0}
            textAlign={'center'}
            />
            <Button component={Link} 
            to={'/contact'}
            variant="contained" 
            type="submit"
            size="medium"
            sx= {{ 
                fontSize: '0.9rem',
                color:'#3e737f',
                textTransform: 'capitalize', 
                py: 2,
                px: 4,
                mt: 3, 
                mb: 2,
                borderRadius: 0,
                backgroundColor: '#f6efe9',
                "&:hover": {
                    backgroundColor: '#1e2a5a',
                }
            }}
            >
                Take the Q/A
            </Button>
 
        </Stack>
    )
}

export default GetInTouch;