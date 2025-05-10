import { defineField, defineType } from 'sanity'

export const section1 = defineType({
  name: 'section1',
  title: 'section1',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      }),
  ],
})
