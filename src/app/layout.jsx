import Navigation from './components/Navigation'
import './globals.css'


export const metadata = {
  title: 'Notas',
  description: 'Notas del día',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
