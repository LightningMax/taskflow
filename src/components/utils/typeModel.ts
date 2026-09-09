export type ProjectType = {
  id: number;
  titre: string;
  description: string;
  date_creation: string;
  date_modification: string;
  status: string;
};

export type TaskType = {
  id: number;
  id_project: number;
  titre: string;
  date_limite: string;
  priorite: string;
  status: string;
};
