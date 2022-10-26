import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Button, Typography, SvgIcon } from "@mui/material";

function Welcome() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Box
        sx={{
          backgroundAttachment: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundImage: "url(/img/welcome_bg.jpg)",
          backgroundSize: "auto 100%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: "1",
          }}
        >
          <Box
            component="img"
            src="/img/logo.svg"
            sx={{
              maxHeight: "30vh",
              marginBottom: "2em",
            }}
          />
          <Typography
            variant="h2"
            color="text.primary"
            sx={{
              textAlign: "center",
            }}
          >
            WELCOME
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            sx={{
              textAlign: "center",
            }}
          >
            Unlock a more balanced self.
            <br />
            Take your own advice.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10vh",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/login"
            sx={{
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
              Login With Email
            </Typography>
          </Button>
          <Box>
            <Typography component="span" variant="h5" color="text.primary">
              Don't have an account?{" "}
              <Typography
                component={Link}
                variant="h5"
                to="/register"
                sx={{
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Sign Up
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography>Hello</Typography>
      </Box>
    </>
  );
}

export default Welcome;
