import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { herosection } from './herosection'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service,herosection],
}
