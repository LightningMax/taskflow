"use client";

import ModalTaskForm from "@/components/formModal/ModalFormTask";
import TaskContainer from "@/components/taskContainer/TaskContainer";

export default function ProjectDetailPage() {
  return (
    <>
      <button
        className="btn"
        onClick={() =>
          (document.getElementById(
            "modalTaskForm",
          ) as HTMLDialogElement)!.showModal()
        }
      >
        Ajouter une tache
      </button>

      <div className="grid grid-cols-3 h-full int">
        <div className="bg-base-300 rounded-xl p-2 m-5">
          <h1 className="border-b flex justify-center text-xl p-5">A faire</h1>
          <TaskContainer
            tasks={[
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
            status="a faire"
          />
        </div>

        <div className="bg-base-300 rounded-xl p-2 m-5">
          <h1 className="border-b flex justify-center text-xl p-5">En cours</h1>
          <TaskContainer
            tasks={[
              {
                id: 1,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "en cours",
              },
              {
                id: 2,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "en cours",
              },
              {
                id: 3,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "en cours",
              },
              {
                id: 4,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "en cours",
              },
            ]}
            status="en cours"
          />
        </div>

        <div className="bg-base-300 rounded-xl p-2 m-5">
          <h1 className="border-b flex justify-center text-xl p-5">Terminer</h1>
          <TaskContainer
            tasks={[
              {
                id: 1,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "terminer",
              },
              {
                id: 2,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "terminer",
              },
              {
                id: 3,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "terminer",
              },
              {
                id: 4,
                id_project: 1,
                titre: "MOn titre",
                date_limite: "demain",
                priorite: "haute",
                status: "terminer",
              },
            ]}
            status="terminer"
          />
        </div>
      </div>

      <ModalTaskForm />
    </>
  );
}
