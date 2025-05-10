import { defineType, defineField } from "sanity";

export const section2 = defineType({
  name: "section2",
  title: "section2",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
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
      name: "logos",
      title: "Logos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
      }),
  ],
});
