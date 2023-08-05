import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Big_Shoulders_Display, Lexend_Deca} from "next/font/google";

const big_shoulder_display = Big_Shoulders_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-big-shoulder',
})

const lexend_deca = Lexend_Deca({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend-deca',
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={`${big_shoulder_display.variable} ${lexend_deca.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
