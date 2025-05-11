import { defineType, defineField } from "sanity";

export const section3 = defineType({
    name: 'section3', // You can give it a custom name
    title: 'section3',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'line1',
        title: 'Line1',
        type: 'string',
        /* validation: Rule => Rule.required(), */
      },
      {
        name: 'line2',
        title: 'Line2',
        type: 'string',
      },
      {
        name: 'line3',
        title: 'Line3',
        type: 'string',
      },
      {
        name: 'line4',
        title: 'Line4',
        type: 'string',
      },
      {
        name: 'exploreLink',
        title: 'Explore Link',
        type: 'url',
      },
    ],
  }
);