import { z } from "zod";

// Identity schema
export const IdentitySchema = z.object({
  identity_id: z.string(),
  id: z.string(),
  user_id: z.string(),
  identity_data: z
    .object({
      email: z.string().email().optional(),
      email_verified: z.boolean().optional(),
      phone_verified: z.boolean().optional(),
      sub: z.string().optional(),
    })
    .partial(),
  provider: z.string().optional(),
  last_sign_in_at: z.string().optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  email: z.string().email().optional(),
});

// User schema
export const UserSchema = z.object({
  id: z.string(),
  aud: z.string().optional(),
  role: z.string().optional(),
  email: z.string().email().optional(),
  email_confirmed_at: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  confirmed_at: z.string().optional().nullable(),
  last_sign_in_at: z.string().optional().nullable(),
  app_metadata: z
    .object({
      provider: z.string().optional(),
      providers: z.array(z.string()).optional(),
    })
    .optional(),
  user_metadata: z.record(z.string(), z.any()).optional(),
  identities: z.array(IdentitySchema).optional(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  is_anonymous: z.boolean().optional(),
});

export const AuthSchema = z.object({
  user: UserSchema,
  access_token: z.string(),
  refresh_token: z.string().optional(),
});

export default AuthSchema;
