import { serialize } from 'v8'
import { object, string, number, union, minLength, required, pri } from 'valibot'

export const events = object({
  id: serial('id').primaryKey(),
  name: string().minLength(3).maxLength(50),
  priority: number().integer().min(0).max(100),
  type: union(['crosspromo', 'liveops', 'app', 'ads']).required(),
  description: string().optional().maxLength(255)
})
