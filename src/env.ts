import { z } from 'zod'

const envSchema = z.object({
  // MODE: z.enum(['production', 'development', 'test']),
  NEXT_PUBLIC_API_URL: z.string(),
  NEXT_PUBLIC_ENABLE_API_DELAY: z
    .string()
    .transform((value) => value === 'true'),
})

console.log('> Env', process.env)

// FIXME: corrigir a importação de variáveis ambientes dentro do ambiente do browser

// export const env = envSchema.parse(process.env)
