"use client";

export default function AddTaskButton() {
  return (
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
  );
}
