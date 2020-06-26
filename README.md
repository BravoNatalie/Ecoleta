<h1 align=center>
<img src="https://res.cloudinary.com/nataliebravo/image/upload/v1593003005/Ecoleta_github_assets/principal_fcvvkc.png" />
</h1>

<div align="center">
  
![GitHub](https://img.shields.io/github/license/BravoNatalie/Ecoleta) 
![Node_Badge](https://img.shields.io/badge/node-13.12.0-green)
![Npm_Badge](https://img.shields.io/badge/npm-6.14.5-yellow)
![React_Badge](https://img.shields.io/badge/web-ReactJS-blue)
![React_Native_Badge](https://img.shields.io/badge/mobile-React%20Native-blueviolet)
![NodeJS_Badge](https://img.shields.io/badge/server-NodeJS-important)
![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue)
[![Made by NatalieBravo](https://img.shields.io/badge/made%20by-NatalieBravo-blueviolet)](https://www.linkedin.com/in/nataliebravo/)
</div>


# Summary

- [About](#about)
- [Preview](#preview)
- [Built with](#technologies)
- [How to Use](#how-to-use)
- [License](#license)

<a id='about'/>

## :information_source: About

The :recycle:**Ecoleta** is a Web and Mobile application that aims to connect people to companies that collect specific waste such as light bulbs, batteries, etc.

The project was developed during **Next Level Week**, an event provided by [Rocketseat](https://rocketseat.com.br/) to teach new technologies, tools and hacks to leverage participants' developer careers.


<a id='preview'/>

## :framed_picture: Preview

Check it out how it looks like:

<p align="center">
  <img alt="Web App" width="680" height="400"  src="https://res.cloudinary.com/nataliebravo/image/upload/v1593174151/Ecoleta_github_assets/InShot-20200624-155437898_jfgc3t.gif" >
  <img alt="Mobile App" width="200" height="440" src="https://res.cloudinary.com/nataliebravo/image/upload/v1593173335/Ecoleta_github_assets/InShot-mobile_kcybx9.gif" >
<p />

<a id='technologies'/>

## :gear: Built With

This project was developed with the following technologies:

#### **Backend** <sub><sup>NodeJS + TypeScript</sup></sub>
  - [Node.js](https://nodejs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/)
  - [CORS](https://www.npmjs.com/package/cors)
  - [KnexJS](http://knexjs.org/)
  - [SQLite](https://github.com/mapbox/node-sqlite3)
  - [TS-Node](https://www.npmjs.com/package/ts-node)
  - [Multer](https://github.com/expressjs/multer)
  - [Celebrate](https://github.com/arb/celebrate)
  - [dotENV](https://github.com/motdotla/dotenv)
  - [ESLint](https://eslint.org/)
 

#### **Frontend** <sub><sup>React + TypeScript</sup></sub>
  - [React](https://pt-br.reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Styled Components](https://styled-components.com/)
  - [Context API](https://reactjs.org/docs/context.html)
  - [Axios](https://www.npmjs.com/package/axios)
  - [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
  - [React Dropzone](https://github.com/react-dropzone/react-dropzone)
  - [React Icons](https://react-icons.netlify.com/#/)
  - [Leaflet](https://leafletjs.com/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [ESLint](https://eslint.org/)



#### **Mobile** <sub><sup>React Native + TypeScript</sup></sub>
  - [React Native](https://reactnative.dev/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Expo](https://expo.io/learn)
  - [React Navigation](https://reactnavigation.org/)
  - [React Native Maps](https://github.com/react-native-community/react-native-maps)
  - [React Native SVG](https://github.com/react-native-community/react-native-svg)
  - [Axios](https://www.npmjs.com/package/axios)
  - [Expo Google Fonts](https://github.com/expo/google-fonts)
  - [Expo Location](https://docs.expo.io/versions/latest/sdk/location/)
  - [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
  - [ESLint](https://eslint.org/)


<a id='how-to-use'/>

## :joystick: How to Use

### Requirements

To run the application you'll need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
* [Expo](https://expo.io/learn)
* Clone the repository:
  * ```$ git clone https://github.com/BravoNatalie/Ecoleta.git ```

### Backend

In order o run the server on your machine, you'll need to change the ip address configuration.<br/> 
Create a **.env** file on the root of the [server/](https://github.com/BravoNatalie/Ecoleta/tree/master/server) folder and set a enviromental variable like that:

```dotenv
APP_URL = http://192.168.1.31:3333
```

Now go to Ecoleta folder and run:

```bash
$ cd server

# install the dependencies
$ yarn install

# create the database
$ npm run knex:migrate
$ npm run knex:seed

# run api
$ yarn start
```

### Frontend

In order o run the web app on your machine, you'll need to change the ip address configuration.<br/> 
Create a **.env** file on the root of the [web/](https://github.com/BravoNatalie/Ecoleta/tree/master/web) folder and set a enviromental variable like that:

```dotenv
REACT_APP_API_URL = http://localhost:3333
```

Now go to Ecoleta folder and run:


```bash
$ cd web

# install the dependencies
$ npm install

# run web app
$ npm start
```

### Mobile

In order to run the application on your device, you'll need to change the ip address configuration on [api.ts](https://github.com/BravoNatalie/Ecoleta/blob/master/mobile/src/services/api.ts):

```javascript
  baseURL: 'http://192.168.1.31:3333',
```
Now with everything on place, run the application.

```bash
$ cd mobile

# install the dependencies
$ npm install

# start expo
$ expo start
```

<a id='license'/>

## :page_with_curl: License

This project is under the **MIT license**. See the [LICENSE](https://github.com/BravoNatalie/Ecoleta/blob/master/LICENSE) for more information.

## :mailbox_with_mail: Get in touch!

<p align="center">
<a href="https://www.linkedin.com/in/nataliebravo/" target="_blank" >
  <img alt="Linkedin - Natalie Bravo" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>
<a href="mailto:natalie.bravo@ice.ufjf.br" target="_blank" >
  <img alt="Email - Natalie Bravo" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 
<br/>
  Made with :coffee: and ❤️ by <b>Natalie Bravo</b>.
<p/>

