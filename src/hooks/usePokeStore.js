import { create } from "zustand";

export const usePokeStore = create((set) => ({
  pokeList: null,
  updatePokeList: (data) => set({ pokeList: data }),
}));
