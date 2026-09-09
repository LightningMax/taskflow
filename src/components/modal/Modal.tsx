"use client";

export default function ModalFormulaire() {
  return (
    <dialog id="modalForm" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <div className="grid grid-cols-[1fr_auto] items-start">
          <div>
            <h3 className="font-bold text-xl">Créer un nouveau Projet</h3>
          </div>

          <div>
            <form method="dialog">
              <button className="btn">X</button>
            </form>
          </div>
        </div>

        <form className="p-4">
          <fieldset className="fieldset">
            <label className="label">Nom du projet</label>
            <input
              id="nameProject"
              type="text"
              className="input validator"
              placeholder="Nom du Projet"
              required
            />
            <p className="validator-hint hidden">Required</p>
          </fieldset>

          <label className="fieldset">
            <span className="label">Description</span>
            <textarea
              id="descProject"
              className="textarea validator"
              placeholder="description du projet"
              required
            ></textarea>
            <span className="validator-hint hidden">Required</span>
          </label>

          <button className="btn btn-neutral mt-4" type="submit">
            Creer
          </button>
        </form>
      </div>
    </dialog>
  );
}
