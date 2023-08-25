import {
  MutationFunction,
  MutationKey,
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export { useMutation as baseUseMutaion } from "@tanstack/react-query";

export default function useMutaion<
  TData = unknown,
  TError = AxiosError,
  TVariables = void,
  TContext = unknown
>(
  mutationKey: MutationKey,
  mutationFn?: MutationFunction<TData, TVariables>,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    "mutationKey" | "mutationFn"
  >
): UseMutationResult<TData, TError, TVariables, TContext> {
  return useMutation(mutationKey, mutationFn, {
    onError: () => {
      // 기본 에러 처리
    },
    ...options,
  });
}
