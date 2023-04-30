
# How to host Vite + React in Github Pages with gh-pages

This tutorial will using npm as the package manager. Feel free to use another package manager like yarn or pnpm :)

<p align="center">
<img src="https://vitejs.dev/logo.svg" height="100px" width="100px" />

<img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" height="100px" width="100px" />
 </p>


A bit of simple tutorial to host your static page in github pages with gh-pages npm module.

## 1. Install Vite
Install vite in your project codespace with the terminal/cmd/git bash

``` npm install vite@latest ```

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/1.png" />

Insert project name, select template with "React" template and a "JavaScript" or "JavaScript+SWC" variant. Then change directory to the main project folder and install the dependency using : 

``` npm install ```

Now you have this in your project folder : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/2.png" />

## 2. Add Homepage URL to the package.json

Open your ```package.json``` file in the project folder directorym it should looks like this : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/3.png" />

Add the ```homepage``` value that contain the URL of your repository that going to added the GitHub Pages to the package.json file, the format of the URL should be : 

``` https://your-username.github.io/your-repository```

Also change the ```private``` value to ```false```

In this case : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/4.png" />


## 3. Add the Homepage URL to Vite Config file

Open your ```vite.config.js``` file, this file contains configuration of the project, the file should be below your ```package.json``` file 

This should be the content of ```vite.config.js``` file : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/5.png" />

The format are the same as the ```homepage``` value at  ```package.json``` file but the key is ```base``` not ```homepage``` : 

base : ``` https://your-username.github.io/your-repository```

So it should be like this : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/6.png" />

## 4. Install ```gh-pages``` 
You can install ```gh-pages``` with : 

``` npm install gh-pages --save-dev```

The ```--save-dev``` command is to install it to the dev dependency in the project.

You can check it on the ```devDependency``` section in your ```package.json``` after installing : 

<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/7.png" />


## 5. Add the deploy script

Open your ```package.json``` and search for ```script``` section, and add this : 

```"deploy" : "gh-pages -d dist"```

Like this : 
<img src="https://raw.githubusercontent.com/arifian853/mini-readme-cdn/main/vite-gh-pages/8.png" />

Why dist ? because in vite production build we will have the compiled final result in a folder named "dist" while in the old CRA the folder name was "build".
##
##
##
##
##
##
##
##
##



