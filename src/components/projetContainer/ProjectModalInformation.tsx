"use client";

import { ProjectType } from "../utils/typeModel";

type Props = {
  project: ProjectType;
};

export default function ProjetModalInformation({ project }: Props) {
  return (
    <dialog
      id={`projetModalInformation-${project.id}`}
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <div className="grid grid-cols-[1fr_auto] items-start">
          <div>
            <h3 className="font-bold text-xl">{project.titre}</h3>
          </div>

          <div>
            <form method="dialog">
              <button className="btn">X</button>
            </form>
          </div>
        </div>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">description</legend>
          <p className="">{project.description}</p>
        </fieldset>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Creation</th>
                <th>Modification</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{project.date_creation}</td>
                <td>{project.date_modification}</td>
                <td>{project.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
}
