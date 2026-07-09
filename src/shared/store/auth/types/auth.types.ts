export type { Auth, User } from "../schema/auth.schema";
import {
  AuthSchema,
  type IdentitySchema,
  type UserSchema,
} from "../schema/auth.schema";

export type Identity = z.infer<typeof IdentitySchema>;
export type User = z.infer<typeof UserSchema>;
export type Auth = z.infer<typeof AuthSchema>;

export const parseAuth = (data: unknown) => AuthSchema.parse(data);
