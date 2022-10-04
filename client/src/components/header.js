// import * as React from "react";
// Import React Router Link component for internal hyperlinks
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <div>
          {Auth.loggedIn() ? (
            <div>
              <Link className="btn btn-lg btn-light m-2" to='/cards'>
                Cards
              </Link>
              <Link className="btn btn-lg btn-light m-2" to='/mat'>
                Mat
              </Link>
              <Link className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </Link>
            </div>
          ) : (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Cards", "Mat", "Login"];
// const settings = ["Profile", "Dashboard", "Logout"];

// const ResponsiveAppBar = () => {

// const [anchorElNav, setAnchorElNav] = React.useState(null);
// const [anchorElUser, setAnchorElUser] = React.useState(null);

// const handleOpenNavMenu = (event) => {
//   setAnchorElNav(event.currentTarget);
// };
// const handleOpenUserMenu = (event) => {
//   setAnchorElUser(event.currentTarget);
// };

// const handleCloseNavMenu = () => {
//   setAnchorElNav(null);
// };

// const handleCloseUserMenu = () => {
//   setAnchorElUser(null);
// };

// return (
// <AppBar position="static">
//   <Container maxWidth="xl">
//     <Toolbar disableGutters>
//       <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//       <Typography
//         variant="h6"
//         noWrap
//         component="a"
//         href="/"
//         sx={{
//           mr: 2,
//           display: { xs: "none", md: "flex" },
//           fontFamily: "monospace",
//           fontWeight: 700,
//           letterSpacing: ".3rem",
//           color: "inherit",
//           textDecoration: "none",
//         }}
//       >
//         LOGO
//       </Typography>

//       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="menu-appbar"
//           aria-haspopup="true"
//           onClick={handleOpenNavMenu}
//           color="inherit"
//         >
//           <MenuIcon />
//         </IconButton>
//         <Menu
//           id="menu-appbar"
//           anchorEl={anchorElNav}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "left",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "left",
//           }}
//           open={Boolean(anchorElNav)}
//           onClose={handleCloseNavMenu}
//           sx={{
//             display: { xs: "block", md: "none" },
//           }}
//         >
//           {pages.map((page) => (
//             <MenuItem key={page} onClick={handleCloseNavMenu}>
//               <Typography textAlign="center">{page}</Typography>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>

//       <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//       <Typography
//         variant="h5"
//         noWrap
//         component="a"
//         href=""
//         sx={{
//           mr: 2,
//           display: { xs: "flex", md: "none" },
//           flexGrow: 1,
//           fontFamily: "monospace",
//           fontWeight: 700,
//           letterSpacing: ".3rem",
//           color: "inherit",
//           textDecoration: "none",
//         }}
//       >
//         LOGO
//       </Typography>

// <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

//       {/* <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "white", display: "block" }}
//         >
//           <Link className="text-dark" to="/cards">
//             Cards
//           </Link>
//         </Button>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "white", display: "block" }}
//         >
//           <Link className="text-dark" to="/mat">
//             Mat
//           </Link>
//         </Button>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "white", display: "block" }}
//         >
//           <Link className="text-dark" to="*" >
//             Login
//           </Link>
//         </Button>
//         <Button
//           onClick={handleCloseNavMenu}
//           sx={{ my: 2, color: "white", display: "block" }}
//         >
//           <Link className="text-dark" to="/" onClick={logout}>
//             Logout
//           </Link>
//         </Button>

//       </Box> */}

// {/* //       <Box sx={{ flexGrow: 0 }}>
// //         <Tooltip title="Open settings">
// //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
// //           </IconButton>
// //         </Tooltip>
// //         <Menu */}
//           sx={{ mt: "45px" }}
//           id="menu-appbar"
//           anchorEl={anchorElUser}
//           anchorOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           keepMounted
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//           open={Boolean(anchorElUser)}
//           onClose={handleCloseUserMenu}
//         >
//           {settings.map((setting) => (
//             <MenuItem key={setting} onClick={handleCloseUserMenu}>
//               <Typography textAlign="center">{setting}</Typography>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>
//     </Toolbar>
//   </Container>
// </AppBar>

//   );
// };
// export default ResponsiveAppBar;
