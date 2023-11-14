import MarketingChallenges from "@/app/components/marketing-project-components/MarketingChallenges";
import MarketingHeader from "@/app/components/marketing-project-components/MarketingHeader";
import MarketingKeyFeatures from "@/app/components/marketing-project-components/MarketingKeyFeatures";
import MarketingSummary from "@/app/components/marketing-project-components/MarketingSummary";
import MarketingTechStack from "@/app/components/marketing-project-components/MarketingTechStack";

const MarketingProject = () => {
  return (
    <section className="content-container py-12">
      <MarketingHeader />
      <MarketingKeyFeatures />
      <MarketingTechStack />
      <MarketingChallenges />
      <MarketingSummary />
    </section>
  );
};

export default MarketingProject;
