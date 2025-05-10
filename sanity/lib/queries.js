
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
    image{
      asset->{url}
    },
    description,
    publishedAt
  }`
  