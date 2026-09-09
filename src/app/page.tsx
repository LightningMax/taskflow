"use client";

import ModalProjectForm from "@/components/formModal/ModalFormProject";
import ModalTaskForm from "@/components/formModal/ModalFormTask";
import ProjetModalInformation from "@/components/projetContainer/ProjectModalInformation";

export default function Home() {
  return (
    <>
      <button
        className="btn"
        onClick={() =>
          (document.getElementById(
            "modalProjectForm",
          ) as HTMLDialogElement)!.showModal()
        }
      >
        Ajouter un Projet
      </button>

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

      <button
        className="btn"
        onClick={() =>
          (document.getElementById(
            "projetModalInformation",
          ) as HTMLDialogElement)!.showModal()
        }
      >
        InfoProjet
      </button>

      <ModalProjectForm />
      <ModalTaskForm />
      <ProjetModalInformation
        title="Test title"
        description="testtttttttttttttttttttttttttttttttttttt"
        dateCreation="aujourdhui"
        dateModification="demain"
        status="a venir"
      />
    </>
  );
}
