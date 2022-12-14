# Social network written in React and using the [free version of SamuraiJs api](https://social-network.samuraijs.com/docs)

## account for testing:
Email: free@samuraijs.com
Password: free

## Information:
* I used free version of api so you can use only only 20 post/put/delete requests per hour.
* If the deployed site does not open, use vpn
* I used the free version of the api so here is what you can do by going to the site:
  * Login or Register, every ten login attempts you will see a captcha that needs to be solved. You can select the option: remember me and then for some time you will not need to go through authorization. Also, you can always log out.
  * At the bottom of the navigation there is a help button by clicking on which you can always read detailed information about the site's capabilities.
  * IMPORTANT: Samurai js api does not allow you to work with posts or messages, so they are stored only in redux store.
  * On the profile page, you can change your name, profile picture, description, your links,  job search status and message to it. And you can also change the message that will be visible to everyone in the list of users. Posts are saved only in redux store
  * The message page simulates the ability to switch between chats and write to different people, but the work is limited to redux store. Again =)
  * On the Users page, their page-by-page output is implemented. You can click on a user's avatar to go to their profile.
* 429 http status means that the number of allowed post\put\delete requests per hour has been exceeded and you need to wait a bit, this is a limitation for of the api.

## Technologies that I used:

* ReactJS 18
* Redux
* React - Redux 
* React - Bootstrap
* React - hook - form
* Redux Thunk
* React Router v6
* Lazy Loading (React.lazy() and Suspense)
* Axios + Fetch
* React Hooks
* Eslint
* SCSS
* CSS-Modules 
