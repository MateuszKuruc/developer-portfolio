import MarketingChallenges from "@/app/components/marketing-project-components/MarketingChallenges";
import MarketingHeader from "@/app/components/marketing-project-components/MarketingHeader";
import MarketingKeyFeatures from "@/app/components/marketing-project-components/MarketingKeyFeatures";
import MarketingTechStack from "@/app/components/marketing-project-components/MarketingTechStack";

const MarketingProject = () => {
  return (
    <section className="content-container py-12">
      <MarketingHeader />
      <MarketingKeyFeatures />
      <MarketingTechStack />
      <MarketingChallenges />
    </section>
  );
};

export default MarketingProject;
