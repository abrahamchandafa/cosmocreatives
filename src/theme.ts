import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '10px'
                }
            }
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    borderRadius: '15px',
                    backgroundColor: '#1E1E1E',
                }
            }
        }
    },
    palette: {
        mode: 'dark',
        primary: {main: '#FFFFFF'},
        background: {
            default: '#0B0D12',
            paper: '#0B0D12'
        }

    },
    typography: {
    fontFamily: '"Host Grotesk", "Open Sans", "Lato",  sans-serif',
    h1: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 400,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
  },
})