import { z } from "zod";

export const themeFormSchema = z.object({
  theme: z.enum(["light", "dark"], {
    required_error: "Por favor, selecione um tema.",
  }),
});
