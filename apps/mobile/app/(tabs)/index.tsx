
import {View} from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme } from '@/theme/theme';

import Featured from '@/components/UI/Featured';

export default function HomeScreen() {
  return (
<ThemeProvider theme={lightTheme}>
    <>
       <Featured />
    </>
</ThemeProvider>
  
  );
}


