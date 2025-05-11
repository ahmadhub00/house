
export const getAllServicesQuery = `*[_type == "service"] | order(publishedAt desc){
    _id,
    title,
    slug,
    icon,
    image{
      asset->{url}
    },
    description,
    publishedAt
  }`
  
  
export const getsection1 = `*[_type == "section1"] | order(publishedAt desc){
    _id,
    title,
    slug,
    image{
      asset->{url}
    },
    description,
    publishedAt
  }`

  export const getsection2 = `*[_type == "section2"][0]{
    title,
    slug,
    logos[]{
      asset->{url}
    }
  }`

  export const getsection3 = `*[_type == "section3"][0]{
    title,
    line1,
    line2,
    line3,
    line4,
    exploreLink
  }`
  export const getsection4 = `*[_type == "section4"][0]{
   title,
    slug,
    image{
      asset->{url}
    },
    description
  }`
  ;
  
  