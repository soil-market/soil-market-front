import {
  MutationFunction,
  MutationKey,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";

export { useMutation as baseUseMutaion } from "@tanstack/react-query";

export default function useMutaion(
  queryKey: MutationKey,
  queryFn: MutationFunction<unknown, void> | undefined,
  options?:
    | Omit<
        UseMutationOptions<unknown, unknown, void, unknown>,
        "mutationKey" | "mutationFn"
      >
    | undefined
) {
  return useMutation(queryKey, queryFn, {
    onError: () => {
      // 기본 에러 처리
    },
    ...options,
  });
}
