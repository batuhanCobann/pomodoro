import { Button, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useGlobalStateContext } from "../store/globalState/context"

export const Timer = () => {

    const {state, dispatch} = useGlobalStateContext();
    const [ramainigTime, setRamainigTime] = useState(state.time.pomodoro)

    useEffect(() => setRamainigTime(state.time.pomodoro), [state.time.pomodoro])

    useEffect(() => {
        let countDownTimerInterval = setInterval(() => {
            setRamainigTime(time => {
                let minutes = parseInt(time.slice(0, 2)),
                    seconds = parseInt(time.slice(3));

                if (seconds > 10) seconds -= 1;
                else if (seconds <= 10 && seconds !== 0) seconds = `0${seconds - 1}`;
                else {
                    minutes -= 1;
                    seconds = 59;
                } 

                return `${minutes.toString()}:${seconds.toString()}`;
            })
        }, 300);

        return () => clearInterval(countDownTimerInterval); 
    }, [])


    return(
        <Stack 
            sx={{
            border:"3px solid #f00", 
            width:"410px", 
            height:"410px", 
            borderRadius:"50%",
            boxShadow: "50px 50px 100px 0px #121530",
            boxShadow: "-50px -50px 100px 0px #272C5A",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"

        }}>
        <Stack
            sx={{
                width:"360px", 
                height:"360px",
                backgroundColor:"#161932",
                display:"flex",
                borderRadius:"50%",    
                alignItems:"center",
                justifyContent:"center"
    
        }}>
                <Typography variant="h1" component="h2">{ramainigTime}</Typography>
                <Button 
                variant="text"
                sx={{color:"white", fontSize:"18px"}}
                onClick={() => dispatch({type: "changeCountDownStatus", payload: !state.isCountingDown})}
                >{state.isCountingDown ? "PAUSE" : "START"}</Button>
            </Stack>
        </Stack>
    )
}







