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
          <div key={task.id}>
            <h1>{task.titre}</h1>
            <span>{task.date_limite}</span>
            <span>{task.priorite}</span>
          </div>
        ))}
    </div>
  );
}
