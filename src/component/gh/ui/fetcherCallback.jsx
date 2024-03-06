import React, { useEffect, useState } from "react";
import Context from "@context";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FetcherCallback(props) {
    const { app } = React.useContext(Context);
    const [state, setState] = useState({
        open: false,
        type: "info", //info,success,error
        message: null,
    });

    useEffect(() => {
        if (app.callback) {
            setState({ open: true, type: app.callback.type, message: app.callback.message });
        }
    }, [app.fetcherCallback]);

    const handleClose = (e) => {
        setState({ ...state, open: false });
        app.fetcherCallback(null);
    };

    return (
        <Snackbar open={state.open} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={state.type} sx={{ width: '100%' }}>
                {state.message}
            </Alert>
        </Snackbar>
    );
}