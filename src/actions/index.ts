"use server";
import { neon } from "@neondatabase/serverless";
import { unstable_rerenderRoute as rerender } from "waku/router/server";

const sql = neon(process.env.DATABASE_URL!);

export async function vote() {
  await sql`
    UPDATE blogs
    SET upvote_number = upvote_number + 1
    WHERE id = 1
  `;
  rerender("/");
}

export async function unvote() {
  await sql`
    UPDATE blogs
    SET downvote_number = downvote_number + 1
    WHERE id = 1
  `;
  rerender("/");
}

export async function getTotalVotes(): Promise<number> {
  const result = await sql`
    SELECT upvote_number, downvote_number
    FROM blogs
    WHERE id = 1
  `;
  return result[0]!.upvote_number - result[0]!.downvote_number;
}
