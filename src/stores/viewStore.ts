import { create } from "zustand";
import type { View } from "../interfaces/views.type";

type ViewState = {
    view: View
}

type ViewAction = {
    selectView: (selectedView: View)=>void
}


export const viewStore = create<ViewState & ViewAction>()((set) => ({
  view: 'isometric',
  selectView: (selectedView) => set(() => ({ view: selectedView })),
}))