import prisma from "../../../db/prisma";
import ProjectContainer from "@/components/projetContainer/ProjetContainer";

export const dynamic = "force-dynamic";

export default async function ProjectPage() {
  const projets = await prisma.pROJET.findMany({
    orderBy: { date_creation: "desc" },
  });

  return (
    <>
      {projets.map((projet) => (
        <ProjectContainer
          key={projet.id_projet}
          project={{
            id: projet.id_projet,
            titre: projet.titre,
            description: projet.description,
            status: projet.status,
            date_creation: projet.date_creation?.toLocaleDateString() ?? "",
            date_modification:
              projet.date_modification?.toLocaleDateString() ?? "",
          }}
          task={[]}
        />
      ))}
    </>
  );
}
