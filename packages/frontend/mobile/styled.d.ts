import 'styled-components/native'
import { lightTheme } from './theme/theme'

declare module 'styled-components/native' {

    type AppTheme = typeof lightTheme;
    export interface DefaultTheme extends AppTheme {} ;
}