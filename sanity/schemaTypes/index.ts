import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { section1 } from './section1'
import { section2 } from './section2'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service,section1,section2],
}
