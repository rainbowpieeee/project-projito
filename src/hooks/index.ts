import { useDispatch as useDispatchHook, useSelector as  useSelectorHook} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import {TAppDispatch, TRootState} from "../services/types";

export const useDispatch: () => TAppDispatch = useDispatchHook
export const useSelector: TypedUseSelectorHook<TRootState> = useSelectorHook
