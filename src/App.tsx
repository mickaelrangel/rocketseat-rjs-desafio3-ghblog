import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { BlogProvider } from './contexts/BlogContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
