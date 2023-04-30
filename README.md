
<h1 align="center"> How to host Vite + React in Github Pages with gh-pages </h1>

<p align="center"> This tutorial will using npm as the package manager. Feel free to use another package manager like yarn or pnpm :) </p>

<p align="center">
<img src="https://vitejs.dev/logo.svg" height="100px" width="100px" />

<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" height="100px" width="100px" />
 </p>

<p align="center"> A bit of simple tutorial to host your static page in github pages with gh-pages npm module. </p>

## 1. Install Vite
Install vite in your project codespace with the terminal/cmd/git bash

``` npm install vite@latest ```

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/1.png" />

Insert project name, select template with "React" template and a "JavaScript" or "JavaScript+SWC" variant. Then change directory to the main project folder and install the dependency using : 

``` npm install ```

Now you have this in your project folder : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/2.png" />

## 2. Add Homepage URL to the package.json

Open your ```package.json``` file in the project folder directory, it should looks like this : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/3.png" />

Add the ```homepage``` value that contain the URL of your repository that going to added the GitHub Pages to the ```package.json``` file, the format of the URL should be : 

``` https://your-username.github.io/your-repository```

Also change the ```private``` value to ```false```

In this case : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/4.png" />


## 3. Add the Homepage URL to Vite Config file

Open your ```vite.config.js``` file, this file contains configuration of the project, the file should be below your ```package.json``` file 

This should be the content of ```vite.config.js``` file : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/5.png" />

The format are the same as the ```homepage``` value at  ```package.json``` file but the key is ```base``` not ```homepage``` : 

```base : 'https://your-username.github.io/your-repository',```

So it should be like this : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/6.png" />

## 4. Install ```gh-pages``` 
You can install ```gh-pages``` with : 

``` npm install gh-pages --save-dev```

The ```--save-dev``` command is to install it to the development dependency in the project.

You can check it on the ```devDependency``` section in your ```package.json``` after installing : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/7.png" />


## 5. Add the deploy script

Open your ```package.json``` and search for ```script``` section, and add this : 

```"deploy" : "gh-pages -d dist"```

Like this :

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/8.png" />

Why dist ? because in vite production build we will have the compiled final result in a folder named "dist" while in the old CRA the folder name was "build".

## 6. Customize your site

Try to run your static site with : 

```npm run dev```

This is what will you see in the first run, the default template of Vite + React : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/9.png" />

In this case, the tutorial will only using the default template as the site. Feel free to edit and get work on your project first and get rid all the bugs and error before going to deploy the site.

## 7. Add the remote repository URL to the project with Git

Add the remote repository URL of your GitHub repository with : 

```git init``` 

then

```git remote add origin https://github.com/your-username/your-repository.git```

You can find the link here : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/12.png" />

## 8. Build the project

After you finish with your work, build the project with : 

```npm run build```

It should be looks like this : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/10.png" />

After the build has finished, you will have a "dist" folder in your project directory, that folder contain the compiled static site that ready to be deployed to GitHub Pages.

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/11.png" />

## 9. Push the code to repository
Before pushing your static site to the GitHub Pages, push your source code first.

```git add .```

```git commit -m "Initial commit"```

The "Initial commit" is free to change to whatever you like.

```git push origin master```

If the repository doesn't have any branch yet, it is advised to use the ```master or main``` branch as the main branch.

After your code is pushed, it should be looks like this in your GitHub repository : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/13.png" />


## 10.  Upload the dist folder to gh-pages 

After your code is pushed, now the push compiled site folder with : 

```npm run deploy``` 

It should be looks like this : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/14.png" />

Just wait until it "published"

After that, check on your GitHub repository and you will have a 2 branch that the ```gh-pages``` branch contain the dist folder content : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/15.png" />

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/16.png" />

After that, click the github-pages in the environment section and just wait until the building and queue process finish : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/17.png" />


## 11. Finish

After the building and queue process is finished, just simply click the "View Deployment" button : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/18.png" />

And voila, your site is now hosted on GitHub Pages!

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/8.png" />


---

And that's it, thanks for reading this damn long tutorial. Feel free to correct my grammar mistakes or a wrong steps.

Thank you :)
