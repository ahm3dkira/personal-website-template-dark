# personal-website-template-dark

## start
- install the template
``` shell 
git clone https://github.com/MrKira128/personal-website-template-dark.git
cd personal-website-template-dark
npm install
```
- Update `public/api/cv.json`
- start `npm run start`

### how to host in github.io
- Create new repository
- your repository must be named `<user>.github.io`
- add `public/main` to `/` in your repository
- Change 
  	```js
	var res = await(await fetch(`../api/cv.json`)).json();
	```
	to 
	```js
	var res = await(await fetch(`api/cv.json`)).json();
	```
