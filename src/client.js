import * as contentful from 'contentful'

export const client = contentful.createClient({
    space: 'xds5dpeoi4wg',
    accessToken: 'a77f082ba3cd16603ec9163c6ba13ccaedad276cc20ca7b41385bc4fec4b1ccc'
    // space: process.env.REACT_APP_SPACE_ID,
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
})