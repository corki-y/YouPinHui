import { create } from "zustand";

interface GlobalState {
  loading: boolean;
  setState: (data: any) => void
  initState: (data: any) => void
}

const initState = {
  loading: false,
}

const useGlobalStore = create<GlobalState>((set) => ({
  ...initState,
  setState: (data: any) => set(data),
  initState: () => set(initState)
}))

// 如需要将 state 存入 localStorage，使用 zustand 的 persist 中间件

export default useGlobalStore
