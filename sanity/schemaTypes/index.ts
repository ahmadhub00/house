import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { section1 } from './section1'
import { section2 } from './section2'
import { section3 } from './section3'
import { section4 } from './section4'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [service,section1,section2,section3,section4],
}
