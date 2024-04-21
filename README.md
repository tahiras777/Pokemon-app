# Pokemon-app

# Setup

## clone repo

git clone https://github.com/tahiras777/pokemon-app.git

## navigate to repo

cd pokemon-app

# Commands

## install deps

npm

## start server

npm run dev

## build project

npm run build

# folder structure

src
src -> api (Api Calls)
src -> app (pages)
src -> api -> types (Types)
src -> components (Shared Components)
src -> app -> hooks (Custom Hooks)
src -> lib (Third Party Libraries)
src -> styles (Global Styles)

## Details

Data is being fetched for pokemon's categories & pokemon Detail using fetch and react-query. For fetching more data infinite scroll is implemented on bottom reached it will increase offset number and fetch updated data. For styling Tailwind is being used and chakraUi is used.
