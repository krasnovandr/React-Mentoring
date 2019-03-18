import React from "react";
import Grid from "@material-ui/core/Grid";

export function ErrorMessage() {
    return (
        <Grid container spacing={24} direction="column" alignItems="center" justify="center">
            <Grid item xs={12} >
                <h1>Something went wrong. Please contact the asministrator.</h1>
            </Grid>
        </Grid>
    )
}
