import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContextProvider } from 'context/userContext';

import '/src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}

export default MyApp
