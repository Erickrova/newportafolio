import { AppProvider } from '../context/AppProvider'
import '../styles/globals.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_es from "../translations/es/global.json"
import global_en from "../translations/en/global.json"

i18next.init({
  interpolation: { escapeValue:false},
  lng:"es",
  resources:{
    es:{
      global:global_es
    },
    en:{
      global:global_en
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18next}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </I18nextProvider>
  )
}

export default MyApp
