import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  SupplyCreator,
  proposalacceptor,
  proposalmaker,
  voteHandler,
} from "../utils/api";

export const usePollMutations = (id) => {
  const queryClient = useQueryClient();

  const createSupply = useMutation({
    mutationFn: SupplyCreator,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Supplys"],
      });
    },
  });

  const acceptProposal = useMutation({
    mutationFn: proposalacceptor,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Supplys"],
        queryKey: ["Supplys", id],
      });
    },
  });

  const castVoteMutation = useMutation({
    mutationFn: voteHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Supplys"] });
    },
  });

  const makeProposal = useMutation({
    mutationFn: proposalmaker,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["Supplys"],
        queryKey: ["Supplys", id],
      });
    },
  });

  return { createSupply, acceptProposal, castVoteMutation, makeProposal };
};
