import { type SchemaTypeDefinition } from 'sanity'
import { section1 } from './section1'
import { section2 } from './section2'
import { section3 } from './section3'
import { section4 } from './section4'
import { section5 } from './section5'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [section1,section2,section3,section4,section5],
}
