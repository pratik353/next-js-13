import Image from 'next/image';

// We can define metadata in two ways: Static and Dynamic.

// 1. Static Metadata
// 2. Dynamic Metadata

// Static way
export const metadata = {
  title: 'Home',
};
// Output:
// <head>
//    <title>Home</title>
// </head>

// Dynamic way
// export async function generateMetadata({ params, searchParamas}) {
//   //const product = await getProduct( params.id);
//   const product = { title: 'Unique Product'}

//   return { title: product.title};
// };
// Output:
// <head>
//    <title>My Unique Product</title>
// </head>

// Metadata improves the SEO of website

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hi
    </main>
  )
}



// page.js in app dir:- its simply displays home page of next js project
// within all components in app folder are server side components

// "us client" import is used to use next component into client side components


// Data fetching

// 1. Server Side Rendering (SSR): dynamic server renderd data
// eg. 
//   async function page ({params}) {
//     const res = await fetch('url', {cache: 'no-store});
//     const data = await res.json();
//   };

// cache: 'no-store :- don't store data in cache, re-fetch fresh data on every call



// 2. Static Site Generation (SSG): remove {cache: 'no-store'} from SSR
//    means by default next js usage static side generation, It will automatically fetch data here but it also cache it.



// 3. Incremental Static Generation (ISR): you can specify cirtain data statically fetched at build time while defining the revalidation time interval, this means that data will be cached but after specific timing it going to refresh it.
// eg.
//   async function page ({params}) {
//     const res = await fetch('url', {next: {revalidate: 10}});
//     const data = await res.json();
//   };
