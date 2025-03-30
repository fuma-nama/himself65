"use client";
import { startTransition, Suspense, use, useOptimistic } from "react";
import { unvote, vote } from "../../actions/index.js";

export function BannerVote(props: { totalVotes: Promise<number> }) {
  const [optimisticVotes, setOptimisticVotes] = useOptimistic<
    Promise<number>,
    number
  >(props.totalVotes, async (current, value) => {
    return value + (await current);
  });

  return (
    <div className="flex flex-row items-center justify-center gap-1">
      <span>
        <Suspense fallback="...">{optimisticVotes}</Suspense>
      </span>
      <button
        onClick={() => {
          startTransition(async () => {
            setOptimisticVotes(+1);
            await vote();
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
          });
        }}
      >
        -1
      </button>
    </div>
  );
}
