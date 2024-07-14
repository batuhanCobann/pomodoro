import './index.css'
import { Box, Container, Stack, Tabs, Typography, useMediaQuery } from '@mui/material'
import { CustomTabs } from './components/tabs';
import { Timer } from './components/timer';
import SettingsIcon from '@mui/icons-material/Settings';
import { CustomModal } from './components/customModal';
import { useState } from 'react';
import { useGlobalStateContext } from './store/globalState/context';

function App() {
  const [open, setOpen] = useState(false);
  const {state} = useGlobalStateContext();


return(
  <Container maxWidth="lg" sx={{height:"100%"}}>
      <Box sx={{flexGrow: 1, height:"100%"}} >
        <Stack
          sx={{
            height:"100%",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: 'center'
          }} 
          gap="1rem"
        >
          <Typography variant='h6' component="h2">pomodoro</Typography>
          <CustomTabs />
          <Timer />
          <SettingsIcon onClick={() => setOpen(!open)}/>
        </Stack>

          <CustomModal open={open} setOpen={setOpen} />
      </Box>
    </Container>
)
  
}

export default App
