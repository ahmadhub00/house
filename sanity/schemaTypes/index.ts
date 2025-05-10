import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { section1 } from './section1'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service,section1],
}
