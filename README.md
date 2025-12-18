# Patchwork
## How to run the project
Open the folder in your IDE of choice, and execute the following commands : 
- npm install
- npm run build
- npm run dev


## Topic overview

**Scrapbooking**
- Personalizable shareable artifact
- A mistake on the website is less dramatic than a mistake with real (wasted) material
- Get inspired, a sense of community

**Roles**
- Guest : can only see pages
- User : can see, like and create pages
- Admin : can do everything a user can + delete pages

**Why a web application ?**\
To be able to easily use it on a phone. Even if creating a page on a phone is challenging, viewing pages is possible.

## General architecture
To store data, we use 2 json files : 
- users.json
- pageList.json 

We have a client and a server folder. All requests are made through through the makeRequest function in makeRequest.ts on the client side. We currently have 2 routes, one for the users and one for the pages.

## Functionalities
- Creating a page and editing an existing one
  - Adding text to it (changing its content, position or color)
  - Changing the name of the page
  - Sketch (not fully implemented)
- Deleting a page
- Liking a page

## Future work
- Finish implementing sketch
- Add images input
- Add comments and share/pin options
- Add profile customization

