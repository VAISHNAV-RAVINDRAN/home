import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShareIcon from '@mui/icons-material/Share';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

function UserHome() {
  return (
    <div style={{
      width:'auto',
      height:'auto',
      backgroundColor:'transparant',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:'0.5rem'
    }}>
      <Box
      sx={{
        width: 350,
        height: 720,
        backgroundColor: 'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'top',
        flexDirection:'column'
      }}>
        <Box 
        sx={{
          width:300,
          height:'auto',
          backgroundColor:'transparant',
          fontFamily:'sans-serif',
          marginTop:5
        }}>
          <h1>Jobee</h1>
        </Box>
        <Box
        sx={{
          width:'auto',
          height:'auto',
          backgroundColor:'transparant',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          padding:'0.2rem'
        }}>
          <Box
            sx={{
              width:250,
              height:'auto',
              backgroundColor:'lavender',
              padding:'1.5rem',
              display:'flex',
              alignItems:'center',
              justifyContent:'left',
              fontWeight:'bolder',
              fontSize:'1.1em',
              fontFamily:'sans-serif',
              borderTopRightRadius:'0.5rem',
              borderBottomRightRadius:'0.5rem',
              margin:0.5,
              cursor:'pointer',
              borderLeft:'5px solid tomato',
              '&:hover': {
                backgroundColor:'lavender',
                borderLeft:'5px solid tomato'
              },
            }}>
              <HomeIcon sx={{paddingBottom:'5px'}}/>&nbsp;Home
          </Box>
          <Box
            sx={{
              width:250,
              height:'auto',
              backgroundColor:'transparant',
              padding:'1.5rem',
              display:'flex',
              alignItems:'center',
              justifyContent:'left',
              fontWeight:'bolder',
              fontSize:'1.1em',
              fontFamily:'sans-serif',
              borderTopRightRadius:'0.5rem',
              borderBottomRightRadius:'0.5rem',
              cursor:'pointer',
              margin:0.5,
              '&:hover': {
                backgroundColor:'lavender',
                borderLeft:'5px solid tomato'
              },
            }}>
              <WorkIcon sx={{paddingBottom:'5px'}}/>&nbsp;Jobs
          </Box>
          <Box
            sx={{
              width:250,
              height:'auto',
              backgroundColor:'transparant',
              padding:'1.5rem',
              display:'flex',
              alignItems:'center',
              justifyContent:'left',
              fontWeight:'bolder',
              fontSize:'1.1em',
              fontFamily:'sans-serif',
              borderTopRightRadius:'0.5rem',
              borderBottomRightRadius:'0.5rem',
              cursor:'pointer',
              margin:0.5,
              '&:hover': {
                backgroundColor:'lavender',
                borderLeft:'5px solid tomato'
              },
            }}>
              <ComputerIcon sx={{paddingBottom:'5px'}}/>&nbsp;Meetings
          </Box>
          <Box
            sx={{
              width:250,
              height:'auto',
              backgroundColor:'transparant',
              padding:'1.5rem',
              display:'flex',
              alignItems:'center',
              justifyContent:'left',
              fontWeight:'bolder',
              fontSize:'1.1em',
              fontFamily:'sans-serif',
              borderTopRightRadius:'0.5rem',
              borderBottomRightRadius:'0.5rem',
              cursor:'pointer',
              margin:0.5,
              '&:hover': {
                backgroundColor:'lavender',
                borderLeft:'5px solid tomato'
              },
            }}>
              <BusinessCenterIcon sx={{paddingBottom:'5px'}}/>&nbsp;Companies
          </Box>
          <Box
            sx={{
              width:250,
              height:'auto',
              backgroundColor:'transparant',
              padding:'1.5rem',
              display:'flex',
              alignItems:'center',
              justifyContent:'left',
              fontWeight:'bolder',
              fontSize:'1.1em',
              fontFamily:'sans-serif',
              borderTopRightRadius:'0.5rem',
              borderBottomRightRadius:'0.5rem',
              cursor:'pointer',
              margin:0.5,
              '&:hover': {
                backgroundColor:'lavender',
                borderLeft:'5px solid tomato'
              },
            }}>
              <SettingsIcon sx={{paddingBottom:'5px'}}/>&nbsp;Settings
          </Box>
        </Box>
      </Box>
    <Box
      sx={{
        width: 850,
        height: 720,
        backgroundColor:'lavender',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
      }}><br/>
      <Paper component="form"
        sx={{ p: '15px 30px', display: 'flex', alignItems: 'center', width: 700,borderRadius:'4rem' }}>
          <InputBase
            sx={{ ml: 1, flex: 1,fontWeight:'bolder',fontSize:'1em' }}
            placeholder="Search Jobs"
            inputProps={{ 'aria-label': 'search Jobs' }}
          />
          <SearchRoundedIcon/>&nbsp;&nbsp;<NotificationsIcon/>&nbsp;&nbsp;<AccountCircleIcon/>
      </Paper><br/> 
      <Card sx={{ display: 'flex',borderRadius:'0.5rem',}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontWeight:'bolder'}}>
            FULLSTACK DEVELOPER
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bolder'}}>
            We need a FullStack Developer
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <Button variant="contained" sx={{backgroundColor:'dodgerblue',margin:'4rem 1rem 1rem'}}>Apply</Button>
          <Button variant="contained" sx={{backgroundColor:'#202020',margin:'4rem 1rem 1rem'}}>Learn More</Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image="https://elements-cover-images-0.imgix.net/37a16df5-688a-4d87-be17-77674edea0cd?auto=compress%2Cformat&fit=max&w=1370&s=6b5376774d30df5f18c65e863f87f5b2"
        alt="Picture"
      />
    </Card><br/>
    <Box sx={{
      width:780,
      height:370,
      backgroundColor:'lavender',
      borderRadius:'0.5rem',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      padding:'0.5rem'
    }}>
    <Box sx={{
      width:750,
      height:'auto',
      backgroundColor:'transparant',
      display:'flex',
      alignItems:'center',
      justifyContent:'space-between',
      padding:'0.3rem'
    }}>
      <span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>Jobs Available</span>
      <span style={{fontWeight:'bolder',fontFamily:'sans-serif'}}>See All</span>
    </Box>
      <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        overflow:'auto'
      }}>
      <Card sx={{ maxWidth: 250,padding:'0.4rem',margin:'0.4rem'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image="https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress%2Cformat&fit=max&w=1370&s=399c92e2e39452bc6410a8af272fff09"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          FULLSTACK DEVELOPER
        </Typography>
        <Typography variant="body2" color="text.secondary">
         We Need a FullStack Developer, oxygenTechnologies
        </Typography>
      </CardContent>
      <CardActions>
        <BookmarkBorderOutlinedIcon/><ShareIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="text">Explore</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 250,padding:'0.4rem',margin:'0.4rem'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image="https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress%2Cformat&fit=max&w=1370&s=399c92e2e39452bc6410a8af272fff09"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          FULLSTACK DEVELOPER
        </Typography>
        <Typography variant="body2" color="text.secondary">
         We Need a FullStack Developer, oxygenTechnologies
        </Typography>
      </CardContent>
      <CardActions>
        <BookmarkBorderOutlinedIcon/><ShareIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="text">Explore</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 250,padding:'0.4rem',margin:'0.4rem'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image="https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress%2Cformat&fit=max&w=1370&s=399c92e2e39452bc6410a8af272fff09"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          FULLSTACK DEVELOPER
        </Typography>
        <Typography variant="body2" color="text.secondary">
         We Need a FullStack Developer, oxygenTechnologies
        </Typography>
      </CardContent>
      <CardActions>
        <BookmarkBorderOutlinedIcon/><ShareIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="text">Explore</Button>
      </CardActions>
    </Card>
    </Box>
    </Box>
    </Box>
    <Box
      sx={{
        width: 350,
        height: 720,
        backgroundColor: 'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Card sx={{ maxWidth: 250,padding:'1.5rem',margin:'0.5rem',backgroundColor:'#fffff0'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image="https://elements-cover-images-0.imgix.net/6e855666-1764-4019-be9e-998505bd3fdf?auto=compress%2Cformat&fit=max&w=1370&s=399c92e2e39452bc6410a8af272fff09"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          FULLSTACK DEVELOPER
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Company Overview: We are a fast-paced, dynamic organisation looking for a skilled and experienced Senior Full Stack Development Engineer to join our growing team....<span style={{color:'red ',fontWeight:'bolder',cursor:'pointer'}}>More</span></Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Qualifications
        </Typography>
        <Typography variant="body2" color="text.secondary">
       <ul>
        <li>React: 1 year (Required)</li>
        <li>Bachelor's (Preferred)</li>
        <li>Node.js: 1 year (Preferred)</li>
        <li>Cloud computing: 1 year (Preferred)</li>
        <li>Html,Css,Javascript</li>
       </ul>
       </Typography>
      </CardContent>
      <CardActions>
        <HtmlIcon/>&nbsp;&nbsp;<CssIcon/>&nbsp;&nbsp;<JavascriptIcon/>
      </CardActions>
      <CardActions>
        <Button variant="contained" sx={{backgroundColor:'#202020'}}>Learn More</Button>
        <Button variant="contained" sx={{backgroundColor:'dodgervlue'}}>Apply</Button>
      </CardActions>
    </Card>
    </Box>
    </div>
  );
}
export default UserHome;