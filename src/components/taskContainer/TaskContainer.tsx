"use client";

import { TaskType } from "../utils/typeModel";

type Props = {
  tasks: TaskType[];
  status: string;
};

const PRIORITY_ORDER: Record<string, number> = {
  haute: 1,
  normal: 2,
  basse: 3,
};

export default function TaskContainer({ tasks, status }: Props) {
  return (
    <div>
      {tasks
        .filter((task) => task.status === status)
        .sort((a, b) => {
          const weightA = PRIORITY_ORDER[a.priorite.toLowerCase()] ?? 99;
          const weightB = PRIORITY_ORDER[b.priorite.toLowerCase()] ?? 99;
          return weightA - weightB;
        })
        .map((task) => (
          <div
            key={task.id}
            className="bg-gray-900 m-5 p-5 rounded-xl border border-gray-800"
          >
            <div className="grid grid-cols-[1fr_auto]">
              <h1 className="font-bold text-2xl">{task.titre}</h1>
              <div className="grid grid-rows-2">
                <span>{task.priorite}</span>
                <span>{task.date_limite}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
