import { createFileRoute } from "@tanstack/react-router";
import { CyclePage } from "@/components/site/CyclePage";
import { CYCLES } from "@/content/school";

const cycle = CYCLES[2]!;
const title = "Collège privé | Al Oumrane, Sidi Maârouf Casablanca";
const description =
  "Collège privé à Sidi Maârouf, Casablanca : encadrement pédagogique exigeant, méthodes de travail et accompagnement individualisé des collégiens.";

export const Route = createFileRoute("/college")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/college" },
    ],
    links: [{ rel: "canonical", href: "/college" }],
  }),
  component: () => <CyclePage cycle={cycle} />,
});
