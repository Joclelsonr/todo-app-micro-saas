"use server";

import { z } from "zod";
import { auth } from "@/app/services/auth";
import { prisma } from "@/app/services/database";
import { updateProfileSchema } from "../schema";

export async function updateProfile(
  input: z.infer<typeof updateProfileSchema>
) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Usuário não autenticado",
      data: null,
    };
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: input.name,
    },
  });

  return {
    error: null,
    data: "ok",
  };
}
