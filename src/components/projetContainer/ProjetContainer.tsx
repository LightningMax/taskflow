"use client";

import { redirect } from "next/navigation";
import ProjetModalInformation from "./ProjectModalInformation";

interface Task {
  titre: string;
  date_limite: string;
  priorite: string;
  status: string;
}

type Props = {
  title?: string;
  status?: string;
  task: Task[];
};

export default function ProjectContainer({
  title = "Erreur titre manquant",
  status = "Erreur status manquant",
  task = [],
}: Props) {
  const todoCount = task.filter(
    (elt) => elt.status.toLowerCase() === "a faire",
  ).length;
  const inProgressCount = task.filter(
    (elt) => elt.status.toLowerCase() === "en cours",
  ).length;
  const completedCount = task.filter(
    (elt) => elt.status.toLowerCase() === "terminer",
  ).length;

  return (
    <div className="bg-base-300 p-5 rounded-xl m-15">
      <div className="grid grid-cols-[auto_1fr_auto]">
        <button
          className="btn btn-ghost"
          onClick={() =>
            (document.getElementById(
              "projetModalInformation",
            ) as HTMLDialogElement)!.showModal()
          }
        >
          <span className="border rounded-full border-white px-2">i</span>
        </button>

        <h1 className="font-bold text-xl flex justify-center">{title}</h1>

        <button className="btn  p-5" onClick={() => redirect("/")}>
          Voir plus
        </button>
      </div>

      <span>tache: </span>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>A faire</th>
              <th>En cours</th>
              <th>Terminer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{todoCount}</td>
              <td>{inProgressCount}</td>
              <td>{completedCount}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ProjetModalInformation
        title="Test title"
        description="testtttttttttttttttttttttttttttttttttttt"
        dateCreation="aujourdhui"
        dateModification="demain"
        status="a venir"
      />
    </div>
  );
}
