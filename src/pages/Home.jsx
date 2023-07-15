import { Fragment } from "react";
import Landing from "../components/Landing";
import RelationsSection from "../components/RelationsSection";
import PotentialSection from "../components/PotentialSection";
import Wizards from "../components/Wizards";

function Home() {
  return (
    <Fragment>
      <Landing />
      <RelationsSection />
      <PotentialSection />
      <Wizards />
    </Fragment>
  );
}

export default Home;
