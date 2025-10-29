import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./api";
import { Person, Assignment } from "./types";

export const usePeople = () =>
  useQuery<Person[]>({
    queryKey: ["people"],
    queryFn: async () => (await api.get("/people")).data,
  });

export const useAssignRole = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Assignment) =>
      (await api.patch("/assign", data)).data,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["people"] }),
  });
};
