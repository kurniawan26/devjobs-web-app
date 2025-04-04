import { create } from "zustand";

interface IUseModal {
  isOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
}

const useModal = create<IUseModal>((set) => ({
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
  closeModal: () => set({ isOpen: false }),
}));

export default useModal;