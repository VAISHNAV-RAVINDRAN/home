import './App.css';
import React, { useState } from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/esm/Visibility';
import VisibilityOff from '@mui/icons-material/esm/VisibilityOff';
import CloudUpload from '@mui/icons-material/esm/CloudUpload';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [ctype, settype] = React.useState('');

  const handleChangectype = (event) => {
    settype(event.target.value);
  };
  const [box1ZIndex, setBox1ZIndex] = useState(1);
  const [box2ZIndex, setBox2ZIndex] = useState(2);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword_candidate, setShowPassword_candidate] = useState(false);
  const [showPassword_hr, setShowPassword_hr] = useState(false);
  const [email, setName] = useState('');
  const [password, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [candidate_fname, setcandidatefname] = useState('');
  const [candidate_lname, setcandidatelname] = useState('');
  const [candidate_email, setcandidateName] = useState('');
  const [candidate_password, setcandidateEmail] = useState('');
  const [candidate_errors, setcandidateErrors] = useState({});
  const [hr_cname, sethrcname] = useState('');
  const [hr_name, sethrname] = useState('');
  const [hr_email, sethrName] = useState('');
  const [hr_password, sethrEmail] = useState('');
  const [hr_errors, sethrErrors] = useState({});
  const handleButtonClick = () => {
    setBox1ZIndex(box1ZIndex === 1 ? 2 : 1);
    setBox2ZIndex(box2ZIndex === 1 ? 2 : 1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  };
  const handleEmailChange = (event) => {
    setName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmitcandidate = (event) => {
    event.preventDefault();
    const candidate_errors = {};
    if (!candidate_fname) {
      candidate_errors.candidate_fname = 'First Name is required';
    }
    if (!candidate_lname) {
      candidate_errors.candidate_lname = 'Last Name is required';
    }
    if (!candidate_email) {
      candidate_errors.candidate_email = 'Email is required';
    }
    if (!candidate_password) {
      candidate_errors.candidate_password = 'Password is required';
    }
    if (Object.keys(candidate_errors).length > 0) {
      setcandidateErrors(candidate_errors);
      return;
    }
  };
  const handlefnameChange_candidate = (event) => {
    setcandidatefname(event.target.value);
  };
  const handlelnameChange_candidate = (event) => {
    setcandidatelname(event.target.value);
  };
  const handleEmailChange_candidate = (event) => {
    setcandidateName(event.target.value);
  };
  const handlePasswordChange_candidate = (event) => {
    setcandidateEmail(event.target.value);
  };
  const handleSubmitHr = (event) => {
    event.preventDefault();
    const hr_errors = {};
    if (!hr_cname) {
      hr_errors.hr_cname = 'Company Name is required';
    }
    if (!hr_name) {
      hr_errors.hr_name = 'HR Name is required';
    }
    if (!hr_email) {
      hr_errors.hr_email = 'Company Email is required';
    }
    if (!hr_password) {
      hr_errors.hr_password = 'Password is required';
    }
    if (Object.keys(hr_errors).length > 0) {
      sethrErrors(hr_errors);
      return;
    }
  };
  const handlecnameChange_hr = (event) => {
    sethrcname(event.target.value);
  };

  const handlenameChange_hr = (event) => {
    sethrname(event.target.value);
  };
  const handleEmailChange_hr = (event) => {
    sethrName(event.target.value);
  };

  const handlePasswordChange_hr = (event) => {
    sethrEmail(event.target.value);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowPasswordcandidate = () => {
    setShowPassword_candidate(!showPassword_candidate);
  };
  const handleClickShowPassword_hr = () => {
    setShowPassword_hr(!showPassword_hr);
  };
  return (
    <div>
      <Box 
      sx={{
        width:500,
        height:500,
        paddign:'1rem',
        backgroundColor: 'transparant',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
    >
    <Box zIndex={box2ZIndex}
      sx={{
        width:500,
        height:500,
        backgroundColor:'lavender',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        borderRadius:'1rem',
      }}
    >
    <Box
      sx={{
        width:430,
        height:400,
        backgroundColor: 'lavender',
        borderRadius:'0.5rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        padding:'0.5rem',
      }}
    >
      <h1 style={{fontWeight:'bolder',fontSize:'2.5em',color:'#333'}}>Login</h1>
      <form onSubmit={handleSubmit}>
       <TextField
          id="outlined-email-input"
          label="Email ID"
          type="email"
          sx={{
              width:350,
              margin:'0.5rem'
          }}
          value={email}
          onChange={handleEmailChange}
          error={!!errors.email}
          helperText={errors.email}
          /><br></br>
        <TextField
          id="outlined-password-input"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          sx={{
            width:350,
            margin:'0.5rem'
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleClickShowPassword} style={{cursor:'pointer'}}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
          value={password}
          onChange={handlePasswordChange}
          error={!!errors.password}
          helperText={errors.password}
          /><br></br>
          <div style={{color:'#ff0f7b',fontWeight:'bolder',margin:'0.4rem',marginLeft:'1.2rem',cursor:'pointer'}}>
            Forgot Password
          </div>
          <Button variant="contained" type="submit" 
            sx={{
              width:350,
              padding:1,
              margin:'0.5rem',
              backgroundColor:'#f89b29',
            }}>Login</Button>
      </form>
      <h5 style={{color:'#333'}}>Are You New To Here | <span  onClick={handleButtonClick} style={{color:'#ff0f7b',textDecoration:'none',cursor:'pointer',}}>Sign Up</span></h5>
    </Box>
    </Box>
    <Box zIndex={box1ZIndex}
      sx={{
        width:500,
        height:500,
        backgroundColor: 'Lavender',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        position:'absolute',
        borderRadius:'1rem',
      }}
    >
     <Tabs sx={{width:500,backgroundColor:'Lavender',borderRadius:'1rem',marginTop:'0.5rem'}} value={value} onChange={handleChange} centered>
        <Tab sx={{color:'#ff0f7b',fontWeight:'bolder',}}   label="Candidate"/>
        <Tab sx={{color:'#ff0f7b',fontWeight:'bolder'}} label="HR" />
      </Tabs>
      {value === 0 && <Box sx={{width:500,height:450,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:'1rem',}} bgcolor="Lavender">
        <form onSubmit={handleSubmitcandidate} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',}}>
        <div style={{width:415,backgroundColor:'Lavender',display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'1rem',}}>
        <TextField sx={{margin:'0.3rem'}} id="outlined-basic" label="First Name" variant="outlined" value={candidate_fname}
          onChange={handlefnameChange_candidate}
          error={!!candidate_errors.candidate_fname}
          helperText={candidate_errors.candidate_fname}/>
        <TextField sx={{margin:'0.3rem'}} id="outlined-basic" label="Last Name" variant="outlined" value={candidate_lname}
          onChange={handlelnameChange_candidate}
          error={!!candidate_errors.candidate_lname}
          helperText={candidate_errors.candidate_lname}/>
        </div>
        <TextField
          id="outlined-email-input"
          label="Email ID"
          type="email"
          sx={{
              width:400,
              margin:'0.3rem'
          }}
          value={candidate_email}
          onChange={handleEmailChange_candidate}
          error={!!candidate_errors.candidate_email}
          helperText={candidate_errors.candidate_email}
          />
          <TextField
          id="outlined-password-input"
          label="Password"
          type={showPassword_candidate ? 'text' : 'password'}
          sx={{
            width:400,
            margin:'0.3rem'
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleClickShowPasswordcandidate} style={{cursor:'pointer'}}>
                {showPassword_candidate ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
          value={candidate_password}
          onChange={handlePasswordChange_candidate}
          error={!!candidate_errors.candidate_password}
          helperText={candidate_errors.candidate_password}
          />
          <Button sx={{width:400,backgroundColor:'#202020',margin:'0.5rem'}} variant="contained" component="label">
          <InputAdornment position="end" style={{cursor:'pointer'}}>
            <CloudUpload sx={{color:'lavender'}}/>&nbsp;&nbsp;
          </InputAdornment>
            Upload Your Resume
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button variant="contained" type="submit" 
            sx={{
              width:400,
              padding:1,
              margin:'0.3rem',
              backgroundColor:'#f89b29',
            }}>Sign Up</Button>
            <h5 style={{color:'#333'}}>Already Have An Account | <span onClick={handleButtonClick} style={{color:'#ff0f7b',textDecoration:'none',cursor:'pointer',}}>Sign In</span></h5>
            </form>
      </Box>}
      {value === 1 && <Box sx={{width:500,height:450,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',borderRadius:'1rem',}} bgcolor="Lavender">
      <form onSubmit={handleSubmitHr} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',}}>
      <div style={{width:415,backgroundColor:'Lavender',display:'flex',alignItems:'center',justifyContent:'space-between',borderRadius:'1rem',}}>
      <TextField sx={{margin:'0.3rem'}} id="outlined-basic" label="Company Name" variant="outlined" value={hr_cname}
          onChange={handlecnameChange_hr}
          error={!!hr_errors.hr_cname}
          helperText={hr_errors.hr_cname}/>
      <TextField sx={{margin:'0.3rem'}} id="outlined-basic" label="HR Name" variant="outlined" value={hr_name}
          onChange={handlenameChange_hr}
          error={!!hr_errors.hr_name}
          helperText={hr_errors.hr_name}/>
      </div>
      <TextField
        id="outlined-email-input"
        label="Company Email"
        type="email"
        sx={{
            width:400,
            margin:'0.3rem'
        }}
        value={hr_email}
        onChange={handleEmailChange_hr}
        error={!!hr_errors.hr_email}
        helperText={hr_errors.hr_email}
      />
      <TextField
          id="outlined-password-input"
          label="Password"
          type={showPassword_hr ? 'text' : 'password'}
          sx={{
            width:400,
            margin:'0.3rem'
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleClickShowPassword_hr} style={{cursor:'pointer'}}>
                {showPassword_hr ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
          value={hr_password}
          onChange={handlePasswordChange_hr}
          error={!!hr_errors.hr_password}
          helperText={hr_errors.hr_password}
          />
        <div style={{width:400,backgroundColor:'lavender',display:'flex',alignItems:'center',justifyContent:'center',margin:'0.2rem',}}>
         <FormControl sx={{width:200,}}>
         <InputLabel id="demo-simple-select-label">Company Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ctype}
          label="Company Type"
          onChange={handleChangectype}
        >
          <MenuItem value={'software'}>Software</MenuItem>
          <MenuItem value={'telecom'}>Telecom</MenuItem>
          <MenuItem value={'data analyst'}>Data Analyst</MenuItem>
        </Select>
      </FormControl>&nbsp;&nbsp;
      <Button sx={{width:190,height:54,backgroundColor:'#202020',}} variant="contained" component="label">
          <InputAdornment position="end" style={{cursor:'pointer'}}>
            <CloudUpload sx={{color:'lavender'}}/>&nbsp;&nbsp;
          </InputAdornment>
            Verification
            <input hidden accept="image/*" multiple type="file" />
          </Button>
      </div>
      <Button variant="contained" type="submit" 
            sx={{
              width:400,
              padding:1,
              margin:'0.5rem',
              backgroundColor:'#f89b29',
            }}>Sign Up</Button>
            <h5 style={{color:'#333'}}>Already Have An Account | <span onClick={handleButtonClick} style={{color:'dodgerblue',textDecoration:'none',cursor:'pointer',}}>Sign In</span></h5>
            </form>
      </Box>}
    </Box>
    </Box>
    </div>
  );
}

export default App;
