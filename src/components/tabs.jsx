import { Tab, Tabs } from "@mui/material"
import { useState } from "react";

export const CustomTabs = () => {
const [value, setValue] =  useState(2)

const handleChange = (event, newValue) =>  setValue(newValue);

    return (
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            {["pomodoro", "short break", "log break"].map(tab => {
                return(
                    <Tab key={tab} sx={{textTransform:"lowercase"}} label={tab} />
                )
            })}
            <Tab label="Active" />
        </Tabs>
    )
}