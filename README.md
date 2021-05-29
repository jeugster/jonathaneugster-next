# Next Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed50f56e-4fc2-4c98-8b66-1e5074c6f3d3/deploy-status)](https://app.netlify.com/sites/next-starter/deploys)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

This is a [Next.js](https://nextjs.org/) project hosted on Netlify, Mongodb Atlas, and Heroku. Styling for React is Styled Components, but CSS modules and Tailwind are also in use to evaluate.

Analytics tags are controlled through Google Tag Manager allowing changes and additions to third party scripts without redeployment. Currently only Google Analytics is active.

Responsive web design and static first principles alongside preprocessors Babel and PostCSS enable the site to work well across devices and browser versions while achieving resilience.

New versions of this site's code are automajically tested and deployed on git commit. Updates to API data also sends a hook for Netifly to refresh new or updated pages.
