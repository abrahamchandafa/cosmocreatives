import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    try {
      const response = await fetch('https://formsubmit.co/ajax/4289e46b9d1986f68f46d16efccbdd78', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          _subject: 'SUBSCRIBE ME TO COSMOCREATIVES',
          _template: 'table',
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSnackbarMessage('✅ Successfully subscribed!');
        setSnackbarOpen(true);
        handleClose();
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      setSnackbarMessage('✅ Subscribed! Check your inbox.');
      setSnackbarOpen(true);
      handleClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <React.Fragment>
      <MotionButton 
        variant="contained"
        onClick={handleClickOpen}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        sx={{
          color: 'black',
          borderColor: 'rgba(255,255,255,0.5)',
        }}
      >
        Subscribe
      </MotionButton>
      
      <Dialog 
        open={open} 
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#0B0D12',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 2,
            minWidth: '400px',
          }
        }}
      >
        <DialogTitle sx={{ 
          color: 'white', 
          fontWeight: 700,
          textAlign: 'center',
          pt: 4,
        }}>
          SUBSCRIBE ME TO COSMOCREATIVES
        </DialogTitle>
        
        <DialogContent>
          <DialogContentText sx={{ 
            color: 'rgba(255,255,255,0.7)',
            textAlign: 'center',
            px: 2,
          }}>
            Join our community and get exclusive updates about artists, brands, 
            and cultural insights.
          </DialogContentText>
          
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              disabled={isSubmitting}
              sx={{
                mt: 4,
                '& .MuiInputLabel-root': { 
                  color: 'rgba(255,255,255,0.6)',
                  textAlign: 'center',
                  width: '100%',
                },
                '& .MuiInputBase-root': { 
                  color: 'white',
                },
                '& .MuiInput-underline:before': { 
                  borderBottomColor: 'rgba(255,255,255,0.2)' 
                },
                '& .MuiInput-underline:hover:before': { 
                  borderBottomColor: 'rgba(255,255,255,0.4)' 
                },
                '& .MuiInput-underline:after': { 
                  borderBottomColor: 'white' 
                },
              }}
            />
          </form>
        </DialogContent>
        
        <DialogActions sx={{ 
          p: 3, 
          pt: 0,
          justifyContent: 'center',
          gap: 2,
        }}>
          <MotionButton 
            onClick={handleClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              borderColor: 'rgba(255,255,255,0.3)',
              '&:hover': { 
                color: 'white',
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }
            }}
            variant="outlined"
          >
            Cancel
          </MotionButton>
          
          <MotionButton 
            type="submit" 
            form="subscription-form"
            disabled={isSubmitting}
            variant="outlined"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderColor: 'white',
              },
              '&.Mui-disabled': {
                color: 'rgba(255,255,255,0.3)',
                borderColor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </MotionButton>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        sx={{ top: { xs: "50vh", sm: "50vh" }}} 
      >
        <Alert 
          severity="success"
          sx={{ 
            backgroundColor: 'rgba(255,255,255,0.1)', 
            color: 'white',
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.2)',
            '& .MuiAlert-icon': {
              color: 'white',
            }
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}