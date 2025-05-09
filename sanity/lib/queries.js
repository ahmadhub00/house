
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
  
  
export const getherosection = `*[_type == "herosection"] | order(publishedAt desc){
    _id,
    title,
    image{
      asset->{url}
    },
    description,
    publishedAt
  }`
  