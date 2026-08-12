import { createFileRoute } from "@tanstack/react-router";
import { CyclePage } from "@/components/site/CyclePage";
import { CYCLES } from "@/content/school";
import { absoluteUrl } from "@/lib/site";

const cycle = CYCLES[0]!;
const title = "Maternelle | École Privée Al Oumrane, Sidi Maârouf Casablanca";
const description =
  "École maternelle privée à Sidi Maârouf, Casablanca : un cadre rassurant et structuré pour les premiers apprentissages, l'éveil et la socialisation.";

export const Route = createFileRoute("/maternelle")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/maternelle") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/maternelle") }],
  }),
  component: () => <CyclePage cycle={cycle} />,
});
