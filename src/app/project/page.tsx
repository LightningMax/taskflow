import ProjectContainer from "@/components/projetContainer/ProjetContainer";

export default function ProjectPage() {
  return (
    <>
      <ProjectContainer
        project={{
          id: 1,
          titre: "test",
          description: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
          date_creation: "demain",
          date_modification: "aujourdhui",
          status: "a venir",
        }}
        task={[
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 2,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 3,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 4,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
        ]}
      />

      <ProjectContainer
        project={{
          id: 3,
          titre: "test",
          description: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
          date_creation: "demain",
          date_modification: "aujourdhui",
          status: "a venir",
        }}
        task={[
          {
            id: 1,
            id_project: 1,
            titre: "MOn titreAAAAAA",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
        ]}
      />

      <ProjectContainer
        project={{
          id: 2,
          titre: "test",
          description: "DDDDDDDDDDDDDDDDDDDDDDDDDDDDD",
          date_creation: "demain",
          date_modification: "aujourdhui",
          status: "a venir",
        }}
        task={[
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
          {
            id: 1,
            id_project: 1,
            titre: "MOn titre",
            date_limite: "demain",
            priorite: "haute",
            status: "a faire",
          },
        ]}
      />
    </>
  );
}
