import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  Container,
  Avatar,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import LogoLink from "./LogoLink";
import "../../styles/hamburger.css";

function Header() {
  const pages = ["Don't", "Click", "Tests"];
  const settings = ["Account", "Logout"];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, message } = useSelector((state) => state.auth);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    reset();
  }, [isError, message]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar
            disableGutters
            sx={{ width: "min(90vw, 1488px)", mr: "0px" }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <div className={`${anchorElNav ? "open " : " "}wrapper-menu`}>
                  <div className="line-menu half start" />
                  <div className="line-menu" />
                  <div className="line-menu half end" />
                </div>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    component={Link}
                    to={`/${page.toLowerCase()}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <Typography color="primary" variant="h6" textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <LogoLink
              extraStylingContainer={{
                flexGrow: {
                  xs: "1",
                  md: "0",
                },
              }}
              extraStylingImg={{
                maxWidth: "45px",
              }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={`/${page.toLowerCase()}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {user && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: "12px" }}>
                    <Avatar alt={user.name}>{user.name.charAt(0)}</Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem
                      key={setting}
                      onClick={
                        setting === "Logout" ? onLogout : handleCloseUserMenu
                      }
                    >
                      <Typography
                        variant="h6"
                        textAlign="center"
                        color="primary"
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
