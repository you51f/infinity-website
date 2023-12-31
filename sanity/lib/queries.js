import { groq } from "next-sanity";

// Get all products
export const productsQuery = groq`*[_type == "product"]`;
export const imageSlidersQuery = groq`*[_type == "slider"]`;
export const promosQuery = groq`*[_type == "promo"]`;

// Get a single product by its slug
export const productQuery = groq`*[_type == "product" && slug.current == $slug][0]`;
// Get all product slugs
export const productPathsQuery = groq`*[_type == "product" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;


// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;