export type Role = "none" | "leader" | "group1" | "group2";

export interface Person {
  id: string;
  name: string;
  role: Role;
}

export interface Assignment {
  person_id: string;
  new_role: Role;
}
