"use client";

import { AppBar, Toolbar, IconButton, InputBase, Typography, Button, Stack,TextField } from '@mui/material';
import { Box,Divider, Avatar,InputAdornment, } from '@mui/material';
import React, { useState } from 'react';
import Image from "next/image";
import SearchIcon from '../public/SearchIcon';
import NotificationIcon from '../public/NotificationIcon';
import MessageIcon from '../public/Message';
import Mice from '../public/Mice';
import StarRating from "../public/Star";
import Circle from '../public/circle';
import Reload from "../public/reaload";
import Like from '../public/Like';
import Share from '../public/Share';
import Comment from '../public/Comment';
import Telegram from '../public/Telegram';
import Comment2 from '../public/Comment2';
import Video from '../public/Video';
import Calender from '../public/Calender';
import Check from '../public/Check';
import Ellipse1 from '../public/Eliipse1';
import Hypen from '../public/hypen';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';


const drawerWidth = 257;

function Dashboard (){
  const isMobile = useMediaQuery('(max-width:700px)');

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  const drawerStyle = {
    width: drawerWidth,
    flexShrink: 0,
  };

  const drawerPaperStyle = {
    width: drawerWidth,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return(
      <>
        <Box style={{ overflow:"hidden" , backgroundColor:"#e9ecef"}}>


       <AppBar position="static"  sx={{
          boxShadow: 'none',
          height: '76px',
        }}>
      <Toolbar sx={{
          padding: '16px 32px 16px 32px',
          background: "#FFF",
          display: 'flex',
      justifyContent: 'space-between',
        }}>
          <Box style={{display:'flex' , alignItems: 'center'}}>
            <Box>
            <IconButton
        size="large"
        color="inherit"
        onClick={handleDrawerOpen}
      >
        <ArrowForwardIosIcon  style={{ backgroundColor: '#FF5733' ,padding:"5px" ,borderRadius:"999px" }}/>
      </IconButton>
            </Box>
          <Box 
          style={{ 
            display: 'flex', 
            alignItems: 'center' ,
            height:"36px",
          borderRadius: "4px",
          border: "1px solid  #E9ECEF",
          background: "#FFF",   
          padding: '4px 16px',
          marginRight: '16px'
        }}>
            <IconButton size="large" color="inherit" 
            style={{padding:"0px" , marginRight:"8px"}}
            >
            <SearchIcon/>
            </IconButton>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          </Box>
          
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {isMobile ? (
        <Box>
          <IconButton
            size="large"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="black"
          >
           <MenuOutlinedIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Avatar alt="Profile" src="/we.png" />
              <div style={{ marginLeft: '10px' }}>
                <Typography variant="subtitle1">Austin Robertson</Typography>
                <Typography variant="body2" color="textSecondary">
                Marketing Administrator
                </Typography>
              </div>
            </MenuItem>
          </Menu>
        </Box>
      ):null}

{!isMobile ? (
  <Box
  style={{
    display: 'flex',
    alignItems: 'center',
  }}
>
  <IconButton size="large" color="inherit" style={{ padding: "0px", marginRight: "16px" }}>
    <Image
      src="/we.png"
      alt="Vercel Logo"
      width={31}
      height={31}
      priority
    />
  </IconButton>
  <IconButton size="large" color="inherit" style={{ padding: "0px", marginRight: "16px" }}>
    <NotificationIcon />
  </IconButton>
  <IconButton size="large" color="inherit" style={{ padding: "0px", marginRight: "16px" }}>
    <MessageIcon />
  </IconButton>
  <Box style={{
    display: 'flex',
    alignItems: 'center',
  }}>
    <Image
      src="/profile.png"
      alt="Vercel Logo"
      width={45}
      height={45}
      priority
    />
    <Stack style={{
      marginLeft: "16px"
    }}>
      <Typography variant="subtitle1" style={{
        fontSize: "16px",
        color: "#232D42",
        fontFamily: "Inter"
      }}>
        Austin Robertson
      </Typography>
      <Typography variant="body2"
        style={{
          fontSize: "13px",
          color: "#8A92A6",
          fontFamily: "Inter"
        }}>Marketing Administrator</Typography>
    </Stack>
  </Box>
</Box>
): null}
       </Box>
      </Toolbar>
       </AppBar>


        <Box 
    sx={{
    borderRadius: '0 0 16px 16px',
    padding: '40px',  
    background: "radial-gradient(36.28% 150.93% at 50% 50%, #3B8AFF 0%, #0048B2 100%)",
    position:"relative",
    '@media (max-width:700px)': {
      padding: '20px',
      
    }
    }}>
      <Stack style={{marginBottom:"40px"}}>
                <Box style={{ 
            display: 'flex', 
            alignItems: 'center' ,
            justifyContent:"space-between"
        }}>
                <Typography variant="subtitle1" sx={{ 
fontSize: "40px",
color:"#FFF",
fontFamily:"Inter",
fontWeight:700,
lineHeight:"normal",
marginBottom:"8px",
'@media (max-width:600px)': {
  fontSize: "20px",
},
 }}>
            Hello Devs !
            </Typography>
            <Box style={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: "8px 24px",
            justifyContent:"center",
            borderRadius: "4px",
            background: "rgba(58, 87, 232, 0.35)"

        }}>
            <IconButton size="large" color="inherit" style={{padding :"0px", marginRight:"8px"}}>
        <Mice/>
        </IconButton>
        <Typography style={{ 
fontSize: "16px",
color:"#FFF",
fontFamily:"Inter",
lineHeight:"normal",
 }}>Announcments</Typography>
            </Box>
                </Box>
            <Typography variant="body2"
            sx={{ 
              fontSize: "23px",
              color:"#FFF",
              fontFamily:"Inter",
              fontWeight:500,
              lineHeight:"30px"
              ,
'@media (max-width:600px)': {
  fontSize: "15px",
},
               }}>We are on a mission to help developers like you to build beautiful projects for FREE.</Typography>
       </Stack>
        </Box>


      {/* 1nd */}
        <Box 
    sx={{ display: 'flex',  margin:"0px 40px 40px 40px"  ,position:"relative" , top:"-45px",
    '@media (max-width:700px)': {
      flexDirection: 'column',
      top:0,
      gap:"40px"
    }
     }}>
      <Box 
        sx={{ 
          flex:"1",
            marginRight:"40px",
            boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
            borderRadius:"8px",
            backgroundColor:"#FFF",
            padding :"24px",
            '@media (max-width:700px)': {
              marginRight:"0px",
              top:"-34px",
              position:"relative"
            }
             }}>
              <Box style={{textAlign:"center"}}>
              <Box >
             
                 <Typography style={{marginBottom:"16px",fontSize: "23px",
              fontFamily:"Inter" }}>Regina Miles</Typography>
                 <Typography style={{marginBottom:"16px"}}>Trainer Expert</Typography>
                 <StarRating filledStars={3} />
              </Box>
              <Box style={{marginBottom:"16px"}}>
              <IconButton size="large" color="inherit" style={{padding:"0px", position:"absolute"}}>
              <Circle/>
              </IconButton>
              <Image
                src="/rt.png"
                alt="Vercel Logo"
                width={140}
                height={140}
                priority
                style={{
                  borderRadius: "999px",
                  margin: "11px",
                  position:"relative",
                  border:"1px solid grey"
                }}
              /> 
              </Box>
              <Box>
                <Typography style={{marginBottom:"16px",color:"#8A92A6"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'center',gap:"8px" }}>
                <Video/>
                <Calender/>
                <Comment2/>
              </Box>
              </Box>
      </Box>
      <Box 
        sx={{ 
          flex:"1",
          boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
            marginRight:"40px",
            backgroundColor:"#FFF",
            borderRadius:"8px",
            '@media (max-width:700px)': {
              marginRight:"0px",
            }
             }}>
        <Box style={{padding :"24px"}}>
            <Box  style={{display:'flex' ,marginBottom:"40px"}}>
              <Box style={{marginRight:"24px"}}>
                <IconButton size="large" color="inherit" style={{padding:"0px"}}>
                  <Reload/>
                </IconButton>
              </Box>
              <Box  style={{display:'flex', alignItems: 'center',justifyContent:"space-between",width: "85%"
            }}>
                <Typography sx={{marginRight:"66px"}}>Conversion</Typography>
                <Box  sx={{ display: 'flex', gap: '3px' }}>
                <Ellipse1 />
                <Ellipse1/>
                <Ellipse1/>
                </Box>
               
              </Box>
              <Box>
              
              </Box>
            </Box>
             <Box>
            
             <TextField
             style={{marginBottom:"40px"}}
      label="1000"
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box style={{ display: 'flex', alignItems: 'center' }}>
             <Divider orientation="vertical" style={{ height: '55px', margin: '0 10px' }} />
             <Typography>GRD</Typography>
           </Box>         
         </InputAdornment>
         
        ),
      }}
    />
     <TextField
      style={{marginBottom:"40px"}}
      label="100"
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box style={{ display: 'flex', alignItems: 'center' }}>
             <Divider orientation="vertical" style={{ height: '55px',margin: '0 10px'}} />
             <Typography>USD</Typography>
           </Box>      
          </InputAdornment>
        ),
      }}
    />
     <TextField
       style={{marginBottom:"40px"}}
      label="150"
      variant="outlined"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Box style={{ display: 'flex', alignItems: 'center' }}>
             <Divider orientation="vertical" style={{ height: '55px',margin: '0 10px' }} />
             <Typography>EURO</Typography>
           </Box>   
          </InputAdornment>
        ),
      }}
    />
    <Button style={{
      backgroundColor:"#3A57E8",
      width:"100%",
      color:"white",
      padding: "8px 24px"
    }}>Archivel</Button>
             </Box>
          </Box>
      </Box>
      <Box style={{   
          flex:"1",padding :"24px",
      boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
      borderRadius:"8px",
      backgroundColor:"#FFF"
        }}>
          <Box style={{display:"flex" , marginBottom:"24px", justifyContent:"space-between"}}>
            <Box>
              <Typography style={{ 
              fontSize: "23px",
              color:"#000",
              fontFamily:"Inter"
               }}>59</Typography>
              <Typography style={{ 
              fontSize: "23px",
              color:"#000",
              fontFamily:"Inter"
               }}>Holidays</Typography>
            </Box>
            <Image
                src="/Frame.png"
                alt="Vercel Logo"
                width={75}
                height={75}
                priority
              />
          </Box>
          <Box style={{display:"flex" ,alignItems:"center",  marginBottom:"16px"}}>
            <Box style={{marginRight:"16px",border:"2px solid  #8A92A6" , borderRadius:"999px" }}> 
            <Image
                src="/Cone-min.png"
                alt="Vercel Logo"
                width={75}
                height={75}
                priority
              />
            </Box>
            <Box>
              <Typography>Web Workshop</Typography>
              <Typography>1 hour agp</Typography>
            </Box>
          </Box>
         
            <Typography style={{color:"#8A92A6" ,marginBottom:"24px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</Typography> 
         <Box> 
          <Typography style={{marginBottom:"8px",color:"#8A92A6", lineHeight:"28px",
          alignItems:"center",
          display:"flex", gap:"8px",fontFamily:"Inter"}}>  <Hypen/> Agens Reppligers</Typography>
          <Typography style={{marginBottom:"8px",color:"#8A92A6" ,lineHeight:"28px",
          alignItems:"center",fontFamily:"Inter",  display:"flex", gap:"8px"}}> <Hypen/> Managements</Typography>
          <Typography style={{color:"#8A92A6" ,lineHeight:"28px",fontFamily:"Inter",  display:"flex", gap:"8px",alignItems:"center"}}>  <Hypen/> Creative Sprint</Typography>
         </Box>
      </Box>
        </Box>

      {/* 2nd  */}
     
      <Box sx={{display:'flex' ,
         margin:"0px 40px 40px 40px" ,
         '@media (max-width:700px)': {
          flexDirection: 'column',
          gap:"40px"
        }
        }}>
         <Box
      sx={{
        flex:"1",
         marginRight: "40px",
        padding: "24px",
        boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
        borderRadius: "8px",
        background: "#FFF",
        '@media (max-width:700px)': {
          marginRight: "0px",   
            }
      }}
    >
      <Typography 
       style={{ 
        fontSize: "23px",
        fontFamily:"Inter",
        fontWeight:500,
        lineHeight:"30px",
        marginBottom: "32px",
         }}>
        Upcoming Birthday
      </Typography>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/er.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Anna Mull</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>Today</Typography>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/gh.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Jacob Jones</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>Today</Typography>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/er.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Jenny Wilson</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>Today</Typography>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/gh.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Leslie Alexander</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>Today</Typography>
            </Box>
          </Box>

         </Box>  
        <Box 
       sx={{
        flex:"1",
       marginRight: "40px",
        padding: "24px",
        boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
        borderRadius: "8px",
        background: "#FFF",
        '@media (max-width:700px)': {
          marginRight: "0px",  
           }
    
     }}>
      <Box>
         <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div style={{ marginRight: "24px",border:"2px solid #8A92A6" , borderRadius:"999px" }}>
              <Avatar
                alt="fgf"
                src="/IcoSphere-min.png"
                sx={{
                  width: 80,
                  height: 80,
                }}
              />
            </div>
            <div style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"33px",
               }}>Wade Warren</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#0048B2"
               }}>6 hours ago</Typography>
            </div>
         </Box>
         <Typography style={{marginBottom:"16px",color:"#8A92A6"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quam tortor nec arcu. Euismod neque ultricies eget adipiscing condimentum.</Typography>
         <div style={{marginBottom:"16px", display:"flex",justifyContent:"space-between"}}>
        <div style={{display:'flex' }}>
        <div style={{display:'flex', alignItems:"center" , marginRight:"16px" }}> 
              <Like />
              <Typography style={{marginLeft:"8px",color:"#8A92A6"}}>34</Typography>
        </div>
        <div  style={{display:'flex', alignItems:"center" ,marginRight:"16px"}}> 
              <Comment/>
              <Typography style={{marginLeft:"8px",color:"#8A92A6"}}>140</Typography>
        </div>
        </div>
        <div  style={{display:'flex', alignItems:"center"}}> 
              <Share/>
              <Typography style={{marginLeft:"8px",color:"#0048B2"}}>99 Share</Typography>
        </div>
         </div>
         <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div style={{ marginRight: "24px", border:"2px solid #8A92A6" , borderRadius:"999px" }}>
              <Avatar
                alt="fgf"
                src="/Sphere-min.png"
                sx={{
                  width: 56,
                  height: 56,
                }}
              />
            </div>
            <div style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Paul Molive</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>Lorem ipsum dolor sit amet, consectetur elit.</Typography>
            </div>
         </div>
      <TextField
    
      label="Recipient’s Username"
      variant="outlined"
      fullWidth
      InputProps={{
        style: { padding: "0px" }, 
        endAdornment: (
          <InputAdornment position="end">
            <IconButton style={{ padding: "0px" }}>
              <Telegram   />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
      </Box>
         </Box>
         <Box   
     sx={{
      flex:"1",
        padding: "24px",
        boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
        borderRadius: "8px",
        background: "#FFF",
      }}>
         <Typography 
       style={{ 
        fontSize: "23px",
        fontFamily:"Inter",
        fontWeight:500,
        lineHeight:"30px",
        marginBottom: "24px",
         }}>
        Stories
      </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/er.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </div>
            <div style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Anna Mull</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6",
               lineHeight: "28px"
               }}>1 hour ago</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/gh.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </div>
            <div style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Ira Membrit</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6",
               lineHeight: "28px"
               }}>4 hours ago</Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/gh.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </div>
            <div style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Bob Frapples</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6",
               lineHeight: "28px"
               }}>9 hours ago</Typography>
            </div>
          </div>
          <Button style={{
            padding: "8px 24px",
            width:"100%",
            borderRadius:"4px",
            background:"#3A57E8",
            color:"#FFF",
            fontSize: "16px",
            fontFamily:"Inter",
          }}>See All</Button>
         </Box> 
      </Box>
     

    {/* 3rd  */}
      <Box 
      sx={{display:'flex' , margin:"0px 40px 40px 40px ",
      '@media (max-width:700px)': {
        flexDirection: 'column',
        gap:"40px"
      }}}>
          <Box
      sx={{
        marginRight: "40px",
        padding: "24px",
        boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
        borderRadius: "8px",
        background: "#FFF",
        '@media (max-width:700px)': {
          marginRight: "0px",   
            }
      }}
    >
      <Box style={{display:"flex" , marginBottom:"40px", justifyContent:"space-between"}}>
            <Box>
              <Typography style={{ 
               fontSize: "23px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Gallery</Typography>
            </Box>
            <Box>
               <Typography style={{ 
               color: "#8A92A6",
               fontFamily:"Inter",
               lineHeight:"28px",
               }}>132pics</Typography>
            </Box>
      </Box>
      <Box style={{marginBottom:"40px"}}>
      <Image
                src="/Cone-min.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  marginRight: "40px",
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
               
              />
               <Image
                src="/sq.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  marginRight: "40px",
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
               
              />
               <Image
                src="/df.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
              />
      </Box>
      <Box style={{marginBottom:"40px"}}>
      <Image
                src="/ty.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  marginRight: "40px",
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
               
              />
               <Image
                src="/Sphere-min.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  marginRight: "40px",
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
               
              />
               <Image
                src="/Torus-min.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
              />
      </Box>
      <Box>
      <Image
                src="/sq.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  marginRight: "40px",
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
               
              />
               <Image
                src="/ty.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  marginRight: "40px",
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
               
              />
               <Image
                src="/df.png"
                alt="Vercel Logo"
                width={130}
                height={130}
                priority
                style={{
                  backgroundColor: "#d8ddfa",
                  borderRadius:"12px"
                }}
              />
      </Box>
           </Box>  
           <Box
      sx={{
        flex:"1",
        marginRight: "40px",
        padding: "24px",
        boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
        borderRadius: "8px",
        background: "#FFF",
        '@media (max-width:700px)': {
          marginRight: "0px",   
            }
      }}
    >
      <Typography 
       style={{ 
        fontSize: "23px",
        fontFamily:"Inter",
        fontWeight:500,
        lineHeight:"30px",
        marginBottom: "16px",
         }}>
          Twitter Feeds</Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div style={{ marginRight: "24px" , border:"1px solid lightblue" , borderRadius:"999px"  }}>
              <Avatar
                alt="fgf"
                src="/2.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </div>
            <div style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Jane Cooper</Typography>
               <div style={{display:'flex',alignItems:'center'}}>
               <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6",
               marginRight:"8px"
               }}>@jane59</Typography>
                <Check/>
               </div>
              
            </div>

           
          </div>
          <Typography style={{
             marginBottom: "16px",
             fontFamily:"Inter",
             color:"#8A92A6",
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</Typography>
          <Typography style={{
             marginBottom: "16px",
             color:"#0048B2"
          }}>
               #Html #Bootstrp
          </Typography>
          <Typography  style={{
             marginBottom: "16px",
             color:"#8A92A6"
          }}>
          07 Jan 2020
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin:"16px 0px"
            }}
          >
            <div style={{ marginRight: "24px",border:"1px solid lightblue" , borderRadius:"999px"  }}>
              <Avatar
                alt="fgf"
                src="/1.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </div>
            <div style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Jane Cooper</Typography>
               <div style={{display:'flex',alignItems:'center'}}>
               <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6",
               marginRight:"8px"
               }}>@jane59</Typography>
                <Check/>
               </div>
              
            </div>

           
          </div>
          <Typography style={{
             marginBottom: "16px",
             color:"#8A92A6",
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet</Typography>
          <Typography style={{
             marginBottom: "16px",
             color:"#0048B2"
          }}>
               #Html #Bootstrp
          </Typography>
          <Typography  style={{
             marginBottom: "16px",
             color:"#8A92A6"
          }}>
          07 Jan 2020
          </Typography>
          </Box> 
           <Box
      sx={{
        flex:"1",
        padding: "24px",
        boxShadow: "0px 10px 13px 0px rgba(17, 38, 146, 0.05)",
        borderRadius: "8px",
        background: "#FFF",
      }}
    >
      <Typography 
       style={{ 
        fontSize: "23px",
        fontFamily:"Inter",
        fontWeight:500,
        lineHeight:"30px",
        marginBottom: "24px",
         }}>
          Suggestions    
      </Typography>
<Box style={{display:"flex" , flexDirection:"column" , gap:"16px"}}>
<Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "24px" , borderRadius:"999px" , border:"1px solid #8A92A6" }}>
              <Avatar
                alt="fgf"
                src="/HTML.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Paul Molive</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>4 mutual friends</Typography>
            </Box>
            <Box style={{
              border:"1px solid black",
              borderRadius:999,
              padding: "10px 9px 10px 11px"
            }}>
            <Avatar
                alt="fgf"
                src="/User.png"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "24px" ,
          borderRadius:"999px" , border:"1px solid #8A92A6" }}>
              <Avatar
                alt="fgf"
                src="/Figma.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Robert Fox</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>4 mutual friends</Typography>
            </Box>
            <Box style={{
              border:"1px solid black",
              borderRadius:999,
              padding: "10px 9px 10px 11px"
            }}>
            <Avatar
                alt="fgf"
                src="/User.png"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "24px"  }}>
              <Avatar
                alt="fgf"
                src="/ios.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Jenny Wilson</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>4 mutual friends</Typography>
            </Box>
            <Box style={{
              border:"1px solid black",
              borderRadius:999,
              padding: "10px 9px 10px 11px"
            }}>
            <Avatar
                alt="fgf"
                src="/User.png"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/vue.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Cody Fisher</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>4 mutual friends</Typography>
            </Box>
            <Box style={{
              border:"1px solid black",
              borderRadius:999,
              padding: "10px 9px 10px 11px"
            }}>
            <Avatar
                alt="fgf"
                src="/User.png"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
            
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/fluteer.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Bessie Cooper</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>4 mutual friends</Typography>
            </Box>
            <Box style={{
              border:"1px solid black",
              borderRadius:999,
              padding: "10px 9px 10px 11px"
            }}>
            <Avatar
                alt="fgf"
                src="/User.png"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>

          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/eye.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}> Wade Warren</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>4 mutual friends</Typography>
            </Box>
            <Box style={{
              border:"1px solid black",
              borderRadius:999,
              padding: "10px 9px 10px 11px"
            }}>
            <Avatar
                alt="fgf"
                src="/User.png"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box style={{ marginRight: "24px" }}>
              <Avatar
                alt="fgf"
                src="/androis.png"
                sx={{
                  width: 67,
                  height: 67,
                }}
              />
            </Box>
            <Box style={{
              width: "100%"
            }}>
              <Typography style={{ 
               fontSize: "19px",
               color: "#000",
               fontFamily:"Inter",
               fontWeight:500,
               lineHeight:"30px",
               }}>Guy Hawkins</Typography>
              <Typography style={{ 
               fontSize: "16px",
               fontFamily:"Inter",
               color:"#8A92A6"
               }}>4 mutual friends</Typography>
            </Box>
            <Box style={{
              border:"1px solid black",
              borderRadius:999,
              padding: "10px 9px 10px 11px"
            }}>
            <Avatar
                alt="fgf"
                src="/User.png"
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
          </Box>
</Box>
         
        
          </Box>  

      </Box>
    </Box>

        {/* sidebar */}
        <Drawer
        style={drawerStyle}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: 'drawer-paper',
        }}
        PaperProps={{ style: drawerPaperStyle }}
      >
        <Box style={{padding:"24px 32px 16px 32px" , marginBottom:"16px" , borderBottom : "1px solid #E9ECEF" }}>
          <Box style={{display:"flex", alignItems:"center"}}>
              <Avatar
                alt="fgf"
                src="/logo.png"
                sx={{
                  width: 28,
                  height: 28,
                  marginRight:"8px"
                }}
              />
               <Typography style={{
              fontSize: "33px",
              color: "#000",
              fontFamily:"Inter",
              fontWeight:500,
              lineHeight:"43px",
               }}>Hope Ui</Typography>
                    <Box style={{ marginLeft: 'auto' }}>
          <Avatar
                alt="fgf"
                src="/4.png"
                sx={{
                  width: 30,
                  height: 30,
                  marginLeft:"8px",
                  backgroundColor:"red"
                }}
                onClick={handleDrawerClose}
              />
          </Box>
          </Box>
     
        </Box>
        <Box style={{padding: "8px 16px 8px 32px" , marginBottom:"8px" ,width:"100%"   }}>
              <Typography style={{
              color: "#ADB5BD",
              fontFamily:"Inter",
              fontWeight:600,
              lineHeight:"28px",
               }}>Home</Typography>
          
        </Box>
        <Box style={{ margin:"0px 12px 8px 12px " , borderBottom:"1px solid #E9ECEF" }}>
          <Box style={{display:"flex",backgroundColor:"#3A57E8" ,padding: "8px 24px" , gap:"16px",
        borderRadius: "4px",
        boxShadow: "0px 2px 4px 0px rgba(138, 146, 166, 0.30)",
         }}>
          <Image
                src="/Category.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            <Typography style={{
              color:"#FFF",
              fontFamily:"Inter"
            }}>Dashboard</Typography>
          </Box>
          <Box style={{display:"flex" ,padding: "8px 24px",justifyContent:"space-between"  }}>
        <Box style={{display:"flex"   }}>
          <Image
                src="/Filter.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
        <Typography style={{
          fontFamily: "Inter",
          color: "#8A92A6",
          marginLeft:"16px"
        }}>Menu Style</Typography>
      </Box>
      <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        </Box>

        <Box style={{padding: "8px 16px 8px 32px" , marginBottom:"8px" ,width:"100%"   }}>
              <Typography style={{
              color: "#ADB5BD",
              fontFamily:"Inter",
              fontWeight:600,
              lineHeight:"28px",
               }}>Pages</Typography>
          
        </Box>
        <Box style={{ margin:"0px 12px 8px 12px " , borderBottom:"1px solid #E9ECEF" }}>
        <Box style={{display:"flex" ,padding: "8px 24px",justifyContent:"space-between"  }}>
        <Box style={{display:"flex"   }}>
          <Image
                src="/Game.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
        <Typography style={{
          fontFamily: "Inter",
          color: "#8A92A6",
          marginLeft:"16px"
        }}>Example</Typography>
      </Box>
      <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px",justifyContent:"space-between"  }}>
        <Box style={{display:"flex"   }}>
          <Image
                src="/Ticket.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
        <Typography style={{
          fontFamily: "Inter",
          color: "#8A92A6",
          marginLeft:"16px"
        }}>Widgets</Typography>
      </Box>
      <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px",justifyContent:"space-between"  }}>
        <Box style={{display:"flex"   }}>
          <Image
                src="/Location.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
        <Typography style={{
          fontFamily: "Inter",
          color: "#8A92A6",
          marginLeft:"16px"
        }}>Maps</Typography>
      </Box>
      <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px",justifyContent:"space-between"  }}>
        <Box style={{display:"flex"   }}>
          <Image
                src="/Shield.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
        <Typography style={{
          fontFamily: "Inter",
          color: "#8A92A6",
          marginLeft:"16px"
        }}>Authentication</Typography>
      </Box>
      <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px",justifyContent:"space-between" ,backgroundColor:"#C4CCF8"  }}>
        <Box style={{display:"flex"   }}>
          <Image
                src="/User2.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
        <Typography style={{
          fontFamily: "Inter",
          color: "#3A57E8",
          marginLeft:"16px"
        }}>Users</Typography>
      </Box>
      <Box>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5858 12.0132L9.29289 7.72029C8.90237 7.32977 8.90237 6.6966 9.29289 6.30608C9.68342 5.91555 10.3166 5.91555 10.7071 6.30608L15.7071 11.3061C16.0976 11.6966 16.0976 12.3298 15.7071 12.7203L10.7071 17.7203C10.3166 18.1108 9.68342 18.1108 9.29289 17.7203C8.90237 17.3298 8.90237 16.6966 9.29289 16.3061L13.5858 12.0132Z" fill="#3A57E8"/>
</svg>
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px" , gap:"16px" }}>
          <Image
                src="/Info.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            <Typography style={{
              fontFamily:"Inter",
              color:"#8A92A6"
            }}>Error 404</Typography>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px" , gap:"16px" }}>
          <Image
                src="/Danger.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            <Typography style={{
              fontFamily:"Inter",
              color:"#8A92A6"
            }}>Error 505</Typography>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px" , gap:"16px" }}>
          <Image
                src="/Bookmark.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            <Typography style={{
              fontFamily:"Inter",
              color:"#8A92A6"
            }}>Maintence</Typography>
        </Box>
        </Box>
        <Box style={{padding: "8px 16px 8px 32px" , marginBottom:"8px" ,width:"100%"   }}>
              <Typography style={{
              color: "#ADB5BD",
              fontFamily:"Inter",
              fontWeight:600,
              lineHeight:"28px",
               }}>Elements</Typography>
          
        </Box>
        <Box style={{ margin:"0px 12px 8px 12px " , borderBottom:"1px solid #E9ECEF" }}>
        <Box style={{display:"flex" ,padding: "8px 24px",justifyContent:"space-between"  }}>
        <Box style={{display:"flex"   }}>
          <Image
                src="/Wallet.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
        <Typography style={{
          fontFamily: "Inter",
          color: "#8A92A6",
          marginLeft:"16px"
        }}>Components</Typography>
      </Box>
      <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px" ,justifyContent:"space-between" }}>
        <Box style={{display:"flex"  }}>
          <Image
                src="/Document.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            <Typography style={{
              fontFamily:"Inter",
              color:"#8A92A6",
              marginLeft:"16px"
            }}>Form</Typography>
        </Box>
        <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px" , justifyContent:"space-between" }}>
        <Box style={{display:"flex"  }}>
          <Image
                src="/Setting.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            <Typography style={{
              fontFamily:"Inter",
              color:"#8A92A6",
              marginLeft:"16px"
            }}>Table</Typography>
          </Box>
          <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        <Box style={{display:"flex" ,padding: "8px 24px" , justifyContent:"space-between" }}>
        <Box style={{display:"flex"  }}>
          <Image
                src="/dd.png"
                alt="Vercel Logo"
                width={24}
                height={24}
                priority
              />
            <Typography style={{
              fontFamily:"Inter",
              color:"#8A92A6",
              marginLeft:"16px"
            }}>Icons</Typography>
        
          </Box>
          <Box>
        <Image
          src="/ic.png"
          alt="Vercel Logo"
          width={24}
          height={24}
          priority
        />
      </Box>
        </Box>
        </Box>

        
        </Drawer>
      </>
    )
}

export default Dashboard;