import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from './assets/4.png'

const Header = () => {

    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        // cor de fundo
        backgroundColor: '#f6efe9',        
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: 'black',
                }}
                >
                     Spark Your Curiosity: 
                     Find Your Learning Path Here!
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: 'black',
                }}
                >
                   we know how hard finding where start and what to follow to master 
                   that specific subject you’ve been thinking about , 
                    That’s why we created How to University.
                </Typography>

                <Box>
                    <Button 
                    variant='contained'
                    sx={{
                        mr: 2,
                        px: 4, 
                        py: 1,
                        fontSize: '0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        borderColor: '#36656f',
                        color: '#458bf',
                        backgroundColor: '#36656f',
                        "&&:hover": {
                            backgroundColor: "#3e737f"
                        },
                        "&&:focus": {
                            backgroundColor: "#3e737f"
                        }
                    }}
                    >
                        Take the Q/A
                    </Button>
                    {/*<Button 
                    component={Link} 
                    to={'/about'}
                    variant='outlined'
                    sx={{
                        px: 4, 
                        py: 1,
                        fontSize:'0.9rem',
                        textTransform: 'capitalize',
                        borderRadius: 0,
                        color: '#36656f',
                        backgroundColor: 'transparent',
                        borderColor: '#36656f',
                        "&&:hover": {
                            color: '#36656f',
                            borderColor: '#36656f',
                        },
                        "&&:focus": {
                            color: '#36656f',
                            borderColor: '#36656f',
                        }
                    }}
                    >
                        explore
                </Button>*/}
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    
                    marginTop: -40
                }}
                />
            </Box>

        </CustomBox>
    )
}

export default Header