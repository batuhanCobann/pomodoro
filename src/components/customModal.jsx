import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    MenuItem,
    Stack,
    TextField
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useGlobalStateContext } from '../store/globalState/context';

export const CustomModal = ({open, setOpen}) => {
    const theme = useTheme();
    const {state, dispatch} = useGlobalStateContext();

    const handleClose = () => setOpen(false);

    return (
        <Dialog
            maxWidth="sm"
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Settings
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
                <Stack gap={5}>
                    <Stack>Time: </Stack>
                    <Stack direction="row" gap={5}>
                        <TextField
                                label="pomodoro"
                                defaultValue={state.time.pomodoro}
                                onChange={(e) => {
                                    dispatch({type: "changeTime", payload: {key: "pomodoro", value: e.target.value}})
                                }}
                            >
                            </TextField>
                            <TextField
                                label="short break"
                                defaultValue={state.time.shortBreak}
                                onChange={(e) => {
                                    dispatch({type: "changeTime", payload: {key: "shortBreak", value: e.target.value}})
                                }}
                            >
                            </TextField>
                            <TextField
                                label="long break"
                                defaultValue={state.time.longBreak}
                                onChange={(e) => {
                                    dispatch({type: "changeTime", payload: {key: "longBreak", value: e.target.value}})
                                }}
                            >
                            </TextField>
                    </Stack>
                    <Stack>Font</Stack>

                    <Stack gap={5} flexDirection="row" justifyContent="space-between">
                        Color:
                        <TextField
                            select
                            label="Select color"
                            defaultValue={state.colorMode}
                            helperText="Please select color"
                            onChange={(e) => {
                                dispatch({type: "changeColorMode", payload: e.target.value})
                            }}
                        >
                            <MenuItem value="primary">primary</MenuItem>
                            <MenuItem value="secondary">secondary</MenuItem>
                            <MenuItem value="default">default</MenuItem>
                        </TextField>
                    </Stack>
                </Stack>
            </DialogContentText>
            </DialogContent>
            <DialogActions>

            <Button onClick={handleClose} autoFocus>
                Apply
            </Button>
            </DialogActions>
        </Dialog>
    )
}