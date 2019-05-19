import * as  React from "react";
import Grid from "@material-ui/core/Grid";

export function NotFound() {
    return (
        <Grid container spacing={24} direction="column" alignItems="center" justify="center">
            <Grid item xs={12} >
                <h1>Page which you are looking for doensn't exist</h1>
            </Grid>
        </Grid>
    )
}
