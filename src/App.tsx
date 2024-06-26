import { Globalstyle } from './styles/Global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle />
      <Home />
    </ThemeProvider>
  )
}
