import Landing from './components/Landing';
import PotentialSection from './components/PotentialSection';
import RelationsSection from './components/RelationsSection';
import Wizards from './components/Wizards';
import LandingHeader from "./components/LandingHeader"
import LandingFooter from "./components/LandingFooter"

export const LandingPaage = () => {
  return (
    <>
    <LandingHeader/>
      <Landing />
      <RelationsSection />
      <PotentialSection />
      <Wizards />
    <LandingFooter/>
      
    </>
  )
}
