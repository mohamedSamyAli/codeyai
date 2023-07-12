import { Fragment } from "react";
import Landing from "../components/Landing";
import RelationsSection from "../components/RelationsSection";
import PotentialSection from "../components/PotentialSection";
function Home() {
  return (
    <Fragment>
      <Landing />
      <RelationsSection />
      <PotentialSection />
    </Fragment>
  );
}

export default Home;
