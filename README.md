
# This is a re-used example, made by Artsiom Marozau

# react-webpack-MF

A complete Webpack Module Federation Case with React.

# project directory

## lib-app

It is a low-level or basic app, which exposes libraries like `react`, `react-dom`.

It is a pure `remote`

## component-app

It is a middle-level app, which depends on modules exposed from `lib-app` : `react` ,`react-dom`. In the meantime, it also exposes components: `Dialog`, `Button` to another app called `main-app`.

It is both host and remote.

## main-app

the top-level app, which depends on `lib-app` and `component-app`.

It is a pure host.

# commands

-`npm i` - install dependencies

-`npm run bootstrap` - build the app

-`npm run start` - start the app

# usage

open http://localhost:6969/app - to see the main app

open http://localhost:6969/component-app - to see components page

# Pros/Cons

## Pros
- Separate deploy process, update and build is required only for areas with changes
- No restart on update common libs is required

## Cons
- Need changes in dev-ops process

# TBD
- Example with cardoba
- Make stop command that kill all processes