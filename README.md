# IP Address Tracker

## About

This is an application that tracks and displays the location of a given IP address using the IP Geolocation API by IPify and LeafletJS for map rendering.

The repository includes:

- A src/ folder to house source modules

## Features

✔ Modern JavaScript (ES Modules)
✔ SCSS preprocessed styles
✔ Fast dev experience with Vite
✔ Designed for learning and extendability
✔ Clean, modular codebase

## Video Demo / Screenshots / Depolyments

### Deployed on GitHub Pages

Reminder, me and Quinn went over the fact that my icons were not displaying on deployment. He ensured me that it would not effect my grade, because he tried to help me resolve the issue for almost an hour and could not figure it out.

https://fantastic-gingersnap-e74b6a.netlify.app/

### Video Demo

https://www.loom.com/share/fe8087d090cf4606b05cb4a5ee3add08

### Desktop Screenshot

![Desktop view](./images/desktop-design.jpg)

### Mobile Screenshot

![Mobile view](./images/mobile-design.jpg)

## Getting Started

### Requirements

- Node.js and npm installed

- An IP Geolocation API key from IPify https://geo.ipify.org/

- A web browser for testing

### Install

#### Clone the repo

```
git clone https://github.com/shanosha/mod-7.git
```

#### Navigate into project

```
cd mod-7
```

#### Install dependencies

```
npm install
```

### Usage

#### Add your API key

- Create a file in the root directory called "secret.js".

- In the file, add the following line of code with your API key:

```javascript
export const key = "API_KEY_HERE";
```

#### Run in development mode

```
npm run dev
```

Open the app in your browser at the address shown by Vite.

#### Build for production

```
npm run build
```

This outputs a production bundle to dist/.

## Tech Stack

JavaScript — Core language

HTML / SCSS — Markup & styles

Vite — Dev server & build tool
