import { create } from "zustand";

export const useErroStore = create((set) => ({
  erro: null,
  setErro: (descricao) => set({ erro: descricao }),
}));
