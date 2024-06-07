"use client";
import { startTransition, useOptimistic } from "react";
import { unvote, vote } from "../../actions/index.js";
import { useRefetch } from "waku/client";

export function BannerVote(props: { totalVotes: number }) {
  const [optimisticVotes, setOptimisticVotes] = useOptimistic<number, number>(
    props.totalVotes,
    (current, value) => {
      return value + current;
    },
  );

  const refetch = useRefetch();
  return (
    <div className="flex flex-row items-center justify-center gap-1">
      <span>{optimisticVotes}</span>
      <button
        onClick={() => {
          startTransition(async () => {
            setOptimisticVotes(+1);
            await vote();
            await refetch("");
          });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          startTransition(async () => {
            setOptimisticVotes(-1);
            await unvote();
            await refetch("");
          });
        }}
      >
        -1
      </button>
    </div>
  );
}
