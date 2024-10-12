import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/selector';
import { Alert, Snackbar } from '@mui/material';
import { clearFlashCards } from '../features/flashCardSlice';
import { clearTranslateStatus } from '../features/translate';


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const navigate = useNavigate();

  const handleMainPageClick = () => {
    dispatch(clearUser());
    dispatch(clearFlashCards());
    dispatch(clearTranslateStatus());
    navigate('/');
  };

  const handleAddFlashCardButton = () => {
    if (user?.id === undefined || user.id === null) {
      setOpen(true); // Snackbar'ı aç
    } else {
      navigate('/addFlashCard');
    }
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent<Element, Event> | Event,
    reason: 'timeout' | 'clickaway' | 'escapeKeyDown'
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    console.log(event)
  };

  const handleAlertClose = (event: React.SyntheticEvent) => {
    console.log(event)
    setOpen(false);
  };


  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="title"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={handleMainPageClick}
          >
            Main Page
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }} onClick={handleMainPageClick}>Flash Cards</Typography>
              </MenuItem>
              <MenuItem>
                <Typography sx={{ textAlign: 'center' }} onClick={handleAddFlashCardButton}>Add New Word</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="title"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={handleMainPageClick}
          >
            Main Page
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <Button sx={{ my: 2, color: 'white' }} onClick={handleMainPageClick}>My Flash Cards</Button>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            <Button sx={{ my: 2, color: 'white' }} onClick={handleAddFlashCardButton}>Add New Word</Button>
          </Box>

        </Toolbar>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={3000} // 3 saniye sonra otomatik kapanır
        onClose={handleSnackbarClose} // Snackbar onClose kullanımı
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Ana konumu belirtin
        sx={{
          top: '10%',  // Yukarıdan 50px boşluk
        }}
      >
        <Alert onClose={handleAlertClose} severity="warning" variant="filled">
          Please Select a user!
        </Alert>
      </Snackbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
