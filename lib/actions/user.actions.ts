"use server";

import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDb } from "../mongoose";

export async function updateUser({
  userId,
  username,
  name,
  image,
  bio,
  path,
}: {
  userId: string;
  username: string;
  name: string;
  image: string;
  bio: string;
  path: string;
}): Promise<void> {
  connectToDb();

  try {
    await User.findOneAndUpdate(
      {
        id: userId,
      },
      {
        username: username.toLowerCase(),
        name,
        image,
        bio,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error) {
    console.log("error: ", error);
  }
}
