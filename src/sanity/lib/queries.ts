import { defineQuery } from "next-sanity";


export const products= defineQuery(`
    *[_type == "products" && "featured" in tags][0..3]{
  _id,
    title,
    description,
    price,
    category,
    badge,
    "imageUrl":image.asset->url
}
    `
)
export const category= defineQuery(`
*[_type == "categories"]{
    _id,
    title,
    'imageUrl':image.asset->url,
    products
  }`
)