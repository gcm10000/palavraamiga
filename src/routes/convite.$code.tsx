import { createFileRoute } from "@tanstack/react-router";
import { CampaignLanding } from "@/components/CampaignLanding";

export const Route = createFileRoute("/convite/$code")({
  component: CampaignRoute,
});

function CampaignRoute() {
  const { code } = Route.useParams();
  return <CampaignLanding code={code} />;
}
