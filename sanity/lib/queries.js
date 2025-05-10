
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
  
  