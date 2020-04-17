# Github to Portfolio

This setup is meant to take ANY github username, display its repositories, and apply filters by language or technology used.

## Getting Started

These instructions will get you a copy of the project to run on localhost:3000. This is the development version of the project.

### Installing
```
git clone https://github.com/wzamites/react-portfolio
cd react-portfolio
npm install
npm start
```
By default, this will open localhost:3000 in a browser and will update immediately as you save changes

##Customizing
In order to load your GitHub projects as cards, edit the following file

```
src/assets/socials.js
```

There you will see the following

```
//enter usernames only

const socials = {
  domain: "",
  linkedin: "",
  github: "",
}

export default socials

```

In order to load the first 30 GitHub projects as cards, change the ```github``` parameter to your username

## Author

* **BJ Zamites** - [GitHub](https://github.com/wzamites)

See also the list of [contributors](https://github.com/wzamites/react-portfolio/contributors) who participated in this project.
