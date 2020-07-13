<br />

<p align="center">
  <img alt="Logo" src="./.github/logo.png" width="130px" />
</p>

<h1 align="center" style="text-align: center;">Ecoleta</h1>

<p align="center">
	<a href="https://github.com/LuizFerK">
		<img alt="Author" src="https://img.shields.io/badge/author-Luiz%20Fernando-FF872C?style=flat" />
	</a>
	<a href="#">
		<img alt="Languages" src="https://img.shields.io/github/languages/count/LuizFerK/Ecoleta?color=%23FF872C&style=flat-" />
	</a>
	<a href="hhttps://github.com/LuizFerK/Ecoleta/stargazers">
		<img alt="Stars" src="https://img.shields.io/github/stars/LuizFerK/Ecoleta?color=FF872C&style=flat" />
	</a>
	<a href="https://github.com/LuizFerK/Ecoleta/network/members">
		<img alt="Forks" src="https://img.shields.io/github/forks/LuizFerK/Ecoleta?color=%23FF872C&style=flat" />
	</a>
	<a href="https://github.com/LuizFerK/Ecoleta/graphs/contributors">
		<img alt="Contributors" src="https://img.shields.io/github/contributors/LuizFerK/Ecoleta?color=FF872C&style=flat" />
	</a>
</p>

<p align="center">
	<b>Help people find collect points to deposit their wastes!</b><br />
	<span>Created with Node.js, ReactJS and React Native, all with Typescript.</span><br />
	<sub>Made with ❤️</sub>
</p>

<br />

<p align="center">
  <img alt="Home" src="./.github/home.png" />
  <img alt="Point1" src="./.github/point1.png" />
  <img alt="Point2" src="./.github/point2.png" />
  <img alt="Point3" src="./.github/point3.png" />
  <img alt="Point4" src="./.github/point4.png" />
  <img alt="MobileHome" src="./.github/mobilehome.png" width="250px" />
  <img alt="Dashboard" src="./.github/dashboard.png" width="250px" />
  <img alt="Detail" src="./.github/detail.png" width="250px" />
</p>

<br />

# :pushpin: Contents

- [Features](#rocket-features)
- [Installation](#wrench-installation)
- [Getting started](#bulb-getting-started)
- [Techs](#fire-techs)
- [Issues](#bug-issues)
- [License](#book-license)

# :rocket: Features

### Web

- Create points

### Mobile

- See all points in the map
- Filter the points by category
- See the point details

# :wrench: Installation

### Required :warning:
- Yarn
- Node.js
- Postgres database

### SSH

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have an SSH key registered in your GitHub account, clone the project using this command:

```git clone git@github.com:LuizFerK/Ecoleta.git```

### HTTPS

In case you don't have an SSH key on your GitHub account, you can clone the project using the HTTPS URL, run this command:

```git clone https://github.com/LuizFerK/Ecoleta.git```

**Both of this commands will generates a folder called Ecoleta, with all the project**

# :bulb: Getting started

### Server

1. Open the **server** folder an run ```yarn``` to install the dependencies;
3. Rename the ```ormconfig.example.json``` to ```ormconfig.json``` and add your postgres **port**, **user** and **password** in the archive;
4. Create a database named ```ecoleta``` on your postgres;
5. Run ```yarn typeorm migration:run``` to run the migrations to your database;
6. Run ```yarn seed:run``` to run the seeds to your database;
7. If all goes well, run ```yarn dev:server``` to open the development server on port 3333.

### Web

1. Open the **web** folder an run ```yarn``` to install the dependencies;
2. Run ```yarn start``` to open the web application on port 3000. (the app will open in your browser automatically)


### Mobile

1. Open the folder and run ```yarn``` to install the dependencies;
2. In ```src/services/api.ts``` change the baseURL for your IPv4 address: ```baseURL: 'http://YOUR-IPV4-ADDRESS:3333'```;
> Example: ```baseURL: 'http://192.168.1.11:3333'```
3. Connect your device to your computer and enable the [debugger mode](https://developer.android.com/studio/debug/dev-options) on the developer tools;
4. Run ```yarn android``` to install the app on your **Android** or ```yarn ios``` to install on your **IOS**;
5. Run ```yarn start``` to open the metro-bundler and get access to the server app on mobile. (close the app and open again)
> You'll need to change manually the start point of your map on the Point page
> If you don't create any point, nothing will appear on your map

# :fire: Techs

### Typescript (language)

### Node.js (server)
- Express
- CORS
- Celebrate
- TypeORM

### React.js (web)
- Axios
- Styled Components
- Leaflet (Maps)

### React Native (mobile)
- Axios
- Styled Components
- React Navigation
- React Native Maps

# :bug: Issues

Find a bug or error on the project? Please, feel free to send me the issue on the [Ecoleta issues area](https://github.com/LuizFerK/Ecoleta/issues), with a title and a description of your found!

If you know the origin of the error and know how to resolve it, please, send me a pull request, I will love to review it!

# :book: License

Released in 2020.

This project is under the [MIT license](https://github.com/LuizFerK/Ecoleta/blob/master/LICENSE).

<p align="center">
	< keep coding /> :rocket: :heart:
</p>