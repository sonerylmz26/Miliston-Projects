import { Box, CardMedia, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { profilTypograf, profileBox } from "../style/globalStyle"
import LazyLoad from 'react-lazy-load';
import {Helmet} from "react-helmet";

const Profile = () => {
const { data } = useSelector((state) => state.auth)

  return (
      
    <Box height={{xs:"79.2vh", md:"70.4vh", lg:"79.1vh" }}>
      <Helmet>
        <title>Blog-Profile</title>
      </Helmet>
      <Box 
      
width={{xs:"300px", md:"500px"}}
sx={profileBox}
>
  <LazyLoad >
        <CardMedia
        component="img"
        height="250"
        sx={{width:"300px", borderRadius:"10px", objectFit:"contain"}}
        image={data.image}
        alt="Paella dish"
      />
  </LazyLoad>
  
      
         
         <Typography
         variant="h5"
         component="h2"
         sx={ profilTypograf}
         >
          {data.username}
         </Typography>
         <Typography
         variant="h5"
         component="h2"
         sx={ profilTypograf}
         >
          {data.email}
         </Typography>
         <Typography
         variant="h5"
         component="h2"
         sx={ profilTypograf}
         >
          {data.bio}
         </Typography>
      </Box>
    </Box>
  )
}

export default Profile