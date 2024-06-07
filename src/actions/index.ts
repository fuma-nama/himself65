"use server";
import postgres from "postgres";

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const conn = postgres({
  host: PGHOST!,
  database: PGDATABASE!,
  username: PGUSER!,
  password: PGPASSWORD!,
  port: 5432,
  ssl: "require",
});

export async function vote() {
  await conn`
    UPDATE blogs
    SET upvote_number = upvote_number + 1
    WHERE id = 1
  `;
}

export async function unvote() {
  await conn`
    UPDATE blogs
    SET downvote_number = downvote_number + 1
    WHERE id = 1
  `;
}

export async function getTotalVotes(): Promise<number> {
  const result = await conn`
    SELECT upvote_number, downvote_number
    FROM blogs
    WHERE id = 1
  `;
  return result[0]!.upvote_number - result[0]!.downvote_number;
}
