import MarketingHeader from "@/app/components/marketing-project-components/MarketingHeader";
import MarketingKeyFeatures from "@/app/components/marketing-project-components/MarketingKeyFeatures";
import MarketingTechStack from "@/app/components/marketing-project-components/MarketingTechStack";

const MarketingProject = () => {
  return (
    <section className="content-container py-12">
      <MarketingHeader />
      <MarketingKeyFeatures />
      <MarketingTechStack />
    </section>
  );
};

export default MarketingProject;
