"use client";

export default function AddProjectButton() {
  return (
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
  );
}
