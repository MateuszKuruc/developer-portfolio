import React from "react";
import AtsHeader from "@/app/components/ats-project-components/AtsHeader";
import AtsKeyFeatures from "@/app/components/ats-project-components/AtsKeyFeatures";
import AtsTechStack from "@/app/components/ats-project-components/AtsTechStack";
import AtsChallenges from "@/app/components/ats-project-components/AtsChallenges";
import AtsSummary from "@/app/components/ats-project-components/AtsSummary";

const AtsPage = () => {
  return (
    <section className="content-container py-12">
      <AtsHeader />
      <AtsKeyFeatures />
      <AtsTechStack />
      <AtsChallenges />
      <AtsSummary />
    </section>
  );
};

export default AtsPage;
