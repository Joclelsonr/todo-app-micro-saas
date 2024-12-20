import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .min(3)
    .max(255),
  email: z.string(),
});
