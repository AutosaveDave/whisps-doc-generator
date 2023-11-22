import { createTheme } from '@mui/material/styles';

const themeColors = {
  //type: 'dark',
  primary: {
    main: "#E39F17",
    light: "#FFDA91",
    dark: "#967533",
    superlight: "#FFEDAA",
    //contrastText: '#351a1a',
  },
  secondary: {
    main: "#003C96",
    light:"#3479E3",
    dark: "#002357",
    //contrastText: '#351a1a',
  },
  tertiary: {
    light: "#FFFCD9",
    main: "#FFF6C2",
    dark: "#FFED88",
    //contrastText: '#351a1a',
  },
  text: {
    primary: '#fff4d9',
  },
  error: {
    light: "#ff7A78",
    main: "#ff6361",
    dark: "#ff5956",
  },
  warning: {
    main: "#bc5090",
  },
  info: {
    main: "#2c4875",
  },
  success: {
    main: "#ffa600",
  },
}

const themeOptions = {
  palette: { ...themeColors, tonalOffset: 0.3 },
  typography: {
    fontFamily: "Oswald",
    fontWeightLight: 300,
    projectTitle: {
      backgroundColor: 'transparent',
      color: themeColors.text.primary.contrastText,
      noWrap: true,
    },
    projectDescr: {
      backgroundColor: 'transparent',
      color: themeColors.primary.contrastText,
      noWrap: false,
    },
  },
  components: {
    MuiSelect: {
      defaultProps: {
        sx: {
          color: 'secondary.contrastText',
          bgcolor:'secondary.light',
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        
        sx:{ 
          color:'tertiary.light',
          bgcolor:'error.main', 
          borderRadius:'6%',
          aspectRatio: 1,
          '&:hover': { 
            bgcolor:'error.light',
          }, 
        },
      }
    },
    MuiButton: {
      
    },
    // MuiMenuItem: {
    //   defaultProps: {
    //     sx: {
    //       color: 'secondary.contrastText',
    //       backgroundColor:'secondary.main'
    //     }
    //   }
    // },
    MuiInputBase: {
      defaultProps: {
        sx: {
          color: 'secondary.contrastText',
          backgroundColor:'secondary.light',
          px: 1,
        }
      }
    },
    // MuiPaper: {
    //   defaultProps: {
    //     sx: {
    //       color: 'primary.contrastText',
    //       backgroundColor:'primary.main',
    //       borderColor: 'primary.dark',
    //       p: 2,
    //     }
    //   }
    // },
    MuiList: {
      defaultProps: {
        sx: {
          color: 'secondary.contrastText',
          backgroundColor:'secondary.light'
        }
      }
    },
    MuiBox: {
      variants: [
        {
          props: {variant: 'projectTitle'},
          style: {
            display: 'block',
          },
        },
        {
          props: {variant: 'projectDescr'},
          style: {
            display: 'block',
          },
        },
      ]
    },
  },
};

const Theme1 = createTheme(themeOptions);
export default Theme1;