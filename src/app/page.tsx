"use client";

import ModalFormulaire from "@/components/modal/Modal";
import ProjetModalInformation from "@/components/projetContainer/ProjectModalInformation";

export default function Home() {
  return (
    <>
      <button
        className="btn"
        onClick={() =>
          (document.getElementById(
            "modalForm",
          ) as HTMLDialogElement)!.showModal()
        }
      >
        Ajouter un Projet
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

      <ModalFormulaire />
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
