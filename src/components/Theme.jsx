// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light', // Default color mode
    useSystemColorMode: false, // Set to true to use system color mode
  },
});

export default theme;

// import { extendTheme } from '@chakra-ui/react';

// const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark', // Default color mode
//     useSystemColorMode: false, // Set to true to use system color mode
//   },
// });

// export default theme;