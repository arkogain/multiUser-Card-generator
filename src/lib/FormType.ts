import { z } from "zod";

export const formSchema = z.object({
  num: z.coerce
    .number()
    .gte(3, { message: "enter a number atleast greater than 3" })
    .lte(30, { message: "enter a number less than 30" })
    .multipleOf(3, { message: "enter a multiple of 3" }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
