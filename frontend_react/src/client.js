import sanityClient from '@sanity/client';

import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'oyqri6d8',
    dataset:'production',
    apiVersion:'2022-10-01',
    useCdn:'true',
    token: 'skldNwghXFJE3awOlPfeHpX4a14fMEnQ2N59ohyCbsSkFtpl7R7i1P6nSz0Y3UofSb2X8IJPdbEgBttJSH5lQtr88T5KwPyN5DUDZDixKDsBB9T5VERxlNfhSyVQaKuNH6deZ5dLZHWWzGTEoHXfOT0Irmqf1wX4wm9CuWG6bzV4occtaexC'
});


const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);