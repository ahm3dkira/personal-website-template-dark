# personal-website-template-dark

- Update `public/api/cv.json`


#### how to host in github.io
- Create new repository
- your repository must be named <user>.github.io
- add `public/main` to `/` in your repository
- Change `var res = await(await fetch(\`../api/cv.json\`)).json();` to `var res = await(await fetch(\`api/cv.json\`)).json();`
