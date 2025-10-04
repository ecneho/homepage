import { create } from 'zustand'
import { diskEmpty } from "@assets"

interface DiskStore {
    imgSrc: string
    setImgSrc: (newSrc: string) => void
}

export const useDiskStore = create<DiskStore>((set) => ({
    imgSrc: diskEmpty,
    setImgSrc: (newSrc) => set({ imgSrc: newSrc }),
}))