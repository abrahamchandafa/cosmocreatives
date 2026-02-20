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

    }
})