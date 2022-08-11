This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Context

Colors challenge project, with Colors API and display them to frontend

## Project Setup

First, run the development server:
1. create .env.local in root folder
2. append those value to the .env.local
`COLOR_TO_GENERATE=5`
`NEXT_PUBLIC_API_URL=http://localhost:3000/api`
3. Run **npm run dev** to make the local up

Open [http://localhost:3000](http://localhost:3000) on your browser to see color swatch Frontend display.
Open [http://localhost:3000/api-documentation](http://localhost:3000/api-documentation) on your browser to see API documentation.

## Howto

### Color space creation

The project setup followed the design paradigm [https://en.wikipedia.org/wiki/Convention_over_configuration](coding by convention)

1. Create the color model inside folder **/shared/models**
1. Adding new entry value on the enum ColorType inside **/shared/models/color.ts**
2. If you want the model to be used to generate color swatch, the naming should be **[ColorType]-color.ts** ( for example hsl-color.ts, rbg-color.ts )
3. The color model should implement color interface from **/models/color**
4. To define new color's own property, you should create an interface that describe the attribute and pass it to the **color interface generic type IColor<T>**
5. Create the color provider inside folder **/shared/providers**
6. To be registered, the color provider name should contain **[ColorType]-color-provider.ts**
7. Stop the current worker and run **npm run dev** again
8. All good the new color will be used to generate color swatch
