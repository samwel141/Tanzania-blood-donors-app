import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";

/*
 * Just a logo icon
 */
import React from "react";

export default function IconLogo() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
<Grid container alignItems="center" justifyContent="flex-start" spacing={1}>
      <Grid item>
        <img
          style={{
            maxWidth: 160,
            maxHeight: 40,
            marginBottom: "-6px",
          }}
          src="/logo.png"
          alt="TBDA logo"
        />
      </Grid>
      <Grid item>
        <Typography variant="body1" 
                  style={{ textDecoration: 'none', 
                            color: 'black', 
                            fontSize: '1.5rem',
                            fontWeight: '700',
                  }}>Tanzania Blood Donors App</Typography>
      </Grid>
    </Grid>
    </Link>
  );
}
