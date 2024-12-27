import { useEffect } from "react";
import { create } from "zustand";
import { layers } from "../constants";

const useAppStore = create((set, get) => ({
  totalUnit: "",
  totalCost: null,
  history: [],
  setTotalUnit: (unit) => {
    set({ totalUnit: unit });
  },
  handleOutsideClick: (ref, setValue) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setValue(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);
  },
  calculateBill: (totalUnit) => {
    set({ totalCost: null });
    if (!totalUnit) return;

    let cost = 0;
    layers.forEach((layer) => {
      if (!(layer.from <= totalUnit)) return;

      if (totalUnit >= layer?.to) {
        cost = cost + (layer.to + 1 - layer.from) * layer.cost;
      } else {
        const left = totalUnit + 1 - layer.from;
        cost = cost + left * layer.cost;
      }
    });
    set({ totalCost: cost });
  },
}));

export default useAppStore;
