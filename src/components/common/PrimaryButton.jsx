import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function PrimaryButton({
  children,
  buttonType,
  buttonRoute,
  undertext,
  undertextBold,
  undertextRoute,
  extraStyles,
  clickHandler,
}) {
  return (
    <Box
      sx={{
        ...extraStyles,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginY: "5vh",
      }}
    >
      <Button
        onClick={clickHandler}
        type={buttonType ? buttonType : ""}
        variant="contained"
        color="secondary"
        component={buttonRoute ? Link : ""}
        to={buttonRoute ? buttonRoute : ""}
        sx={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "1em",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            paddingX: "2.5em",
            paddingY: "0.3em",
          }}
        >
          {children}
        </Typography>
      </Button>
      {undertext && (
        <Box>
          <Typography component="span" variant="h5" color="text.primary">
            {undertext + " "}
            <Typography
              component={Link}
              variant="h5"
              to={undertextRoute}
              sx={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "white",
              }}
            >
              {undertextBold}
            </Typography>
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default PrimaryButton;
