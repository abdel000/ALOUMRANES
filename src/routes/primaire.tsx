import { createFileRoute } from "@tanstack/react-router";
import { CyclePage } from "@/components/site/CyclePage";
import { CYCLES } from "@/content/school";
import { absoluteUrl } from "@/lib/site";

const cycle = CYCLES[1]!;
const title = "Primaire | École Privée Al Oumrane, Sidi Maârouf Casablanca";
const description =
  "École primaire privée à Sidi Maârouf, Casablanca : maîtrise des fondamentaux, méthodes de travail et suivi personnalisé des progrès de chaque élève.";

export const Route = createFileRoute("/primaire")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/primaire") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/primaire") }],
  }),
  component: () => <CyclePage cycle={cycle} />,
});
