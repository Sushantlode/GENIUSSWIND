import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { HowItWorks } from './components/sections/HowItWorks'
import { KeyAdvantages } from './components/sections/KeyAdvantages'
import { Technology } from './components/sections/Technology'
import { Reliability } from './components/sections/Reliability'
import { Applications } from './components/sections/Applications'
import { ProductShowcase } from './components/sections/ProductShowcase'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <KeyAdvantages />
        <Technology />
        <Reliability />
        <Applications />
        <ProductShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
