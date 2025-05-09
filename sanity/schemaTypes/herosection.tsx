import { defineField, defineType } from 'sanity'

export const herosection= defineType({
  name: 'herosection',
  title: 'herosection',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'text',
      rows: 3
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
