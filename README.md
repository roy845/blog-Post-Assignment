# <img src = "https://static.thenounproject.com/png/82883-200.png" height="48" width = "48"/> Blog post app

This is a Blog posts/events App built with NextJS(React Framework) with typescript, Redux for state management and headlessui and tailwindcss for styling.

## Technology stack

- **React**
  <img src="https://upload.wikimedia.org/wikipedia/he/a/a7/React-icon.svg" width="124px" height="124px">

- **NextJS**
  <img src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" width="124px" height="124px">

- **Typescript**
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiTDrB4jE3RaO72W0feOQP1XcZhjTrOBuYcqcXNSIQKeOx4iaA75cEZVN5BDrkQcLYK0&usqp=CAU" width="60px" height="60px">

- **Redux**
  <img src = "https://www.svgrepo.com/show/303557/redux-logo.svg" width = "60px" height = "60px">

- **HeadlessUI**
  <img src = "https://repository-images.githubusercontent.com/295992065/4bd52200-0043-11eb-9711-359a3854d4dc" width = "260px" height = "160px">

  - **Tailwindcss**
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BuIzY141a5nIZoGEQkFYPN_f3bQddC4uu5ctRPO1Ftp6BNy_iV5foebwEIYesnZLA6c&usqp=CAU" width="60px" height="60px">

- **React hook form**
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBSZr9XstT3_uX0Mi4nBL88vUxZ2LTLu_6ikhMhZywt41ETXdZepvU12op0L33xJTrEM&usqp=CAU" width="220px" height="220px">

- **Zod**
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXt1ITFzxsJzjyjX9RnBco2jKyBcNv1UUnf8HojJSqcDchgcAL1x7DuSqdUje0oH7nLsA&usqp=CAU" width="220px" height="220px">

## Installation and Setup

<b>Clone the repository git clone https://github.com/roy845/blog-Post-Assignment.git</b>

### Client

<b>Install the dependencies and start the client</b>

1. Open a new terminal in VSCODE.
2. Install dependencies: npm/yarn install.
3. Run the client: npm/yarn run dev.

## Features

- <b>Home</b>

  <a href="https://ibb.co/s33tSYZ"><img src="https://i.ibb.co/x553vTN/Home.png" alt="Home" border="1"></a>

- <b>User Authentication</b>
  Users can log in, and log out from the system.

  <br/>

- <b>Login</b>

  You can login with one of these users to the app:

  1. Wade Cooper
  2. Arlene Mccoy
  3. Devon Webb
  4. Tom Cook
  5. Tanya Fox
  6. Hellen Schmidt

  <a href="https://ibb.co/SXnNK7z"><img src="https://i.ibb.co/rG6kZfV/login.png" alt="login" border="1"></a>

  Once logged in the user will redirected to the home page and it's username will show in the topbar and the login button will change from login to logout.
  when he press on logout the user logout from the system and navigate back to the homepage.

  <a href="https://ibb.co/1sfWm3y"><img src="https://i.ibb.co/PTZH6RX/after-login.png" alt="after-login" border="1"></a>

- <b>Posts</b>
- <b>No posts:</b>
  when there are no posts to show the user will get a nice message and an option to create the first new post using the plus icon which will redirect him to the create new post page.

  \*\* The plus button will only appear when a user is logged in.

  <a href="https://ibb.co/NSL23VK"><img src="https://i.ibb.co/cLNhvgQ/No-Posts.png" alt="No-Posts" border="1"></a>

  Once there are posts You can view all posts that the users posts and filter them by hashtag.

  <a href="https://ibb.co/RyWBX5H"><img src="https://i.ibb.co/rsJcBWy/All-posts.png" alt="All-posts" border="1"></a>

- <b>Filter posts by hashtag</b>

  <a href="https://ibb.co/6rDmNgZ"><img src="https://i.ibb.co/PF1NtwY/Filter-posts-by-hashtag.png" alt="Filter-posts-by-hashtag" border="0"></a>

- <b>Create new post</b>
  In this page the user can create new post.
  a title,content and hashtag is mandatory.

  <a href="https://ibb.co/Qddc84S"><img src="https://i.ibb.co/tXXhZ9j/Create-new-post.png" alt="Create-new-post" border="1"></a>

  Once the post is created the user will redirect to the posts page where he can view all the posts.
  posts are added such that the latest post created will be on the left.

  <a href="https://ibb.co/RyWBX5H"><img src="https://i.ibb.co/rsJcBWy/All-posts.png" alt="All-posts" border="1"></a>

- <b>Post page</b>
  You can navigate to the single post page by clicking on the Read more button.

  <a href="https://ibb.co/mcDWdPS"><img src="https://i.ibb.co/gRjKQc6/post-page.png" alt="post-page" border="1"></a>

  clicking on the back arrow will navigate back to the all posts page

- <b>Post comments</b>

  \*\* notice that the user must login in order to comment on a post

  For each post there is an option to comment on it. by clicking on the comments section either on the posts page or at the post page itself

  Once clicked a dialog will appear and the user can write his comment.

  <a href="https://ibb.co/dtL1KP8"><img src="https://i.ibb.co/8bdT8r1/post-comments.png" alt="post-comments" border="1"></a>

  If the comment that the user entered is too long a read more button will appear and expand the comment. Read less will take it back to the original length.

  <a href="https://ibb.co/DK40Nvs"><img src="https://i.ibb.co/j4hndQB/posts-comments-long-comment.png" alt="posts-comments-long-comment" border="1"></a>

  <a href="https://ibb.co/r2dg4ZF"><img src="https://i.ibb.co/qYJzkR7/posts-comments-read-more-is-applied.png" alt="posts-comments-read-more-is-applied" border="1"></a>

- <b>Events</b>
- <b>No events:</b>
  When there are no events to show the user will get a nice message and an option to create the first new event using the plus icon which will redirect him to the create new event page.

  \*\* The plus button will only appear when a user is logged in.

  <a href="https://ibb.co/rMj4css"><img src="https://i.ibb.co/P4Lw9QQ/No-events.png" alt="No-events" border="1"></a>

  Once there are events You can view all events that the users posts and filter them by hashtag.

  <a href="https://ibb.co/tH6dK0x"><img src="https://i.ibb.co/b6Vfm42/all-Events.png" alt="all-Events" border="1"></a>

- <b>Filter events by hashtag</b>

  <a href="https://ibb.co/vqkf4Ht"><img src="https://i.ibb.co/4tpCR7Q/Filter-events-by-hashtag.png" alt="Filter-events-by-hashtag" border="1"></a>

- <b>Create new event</b>
  In this page the user can create new event.
  a title,content and hashtag is mandatory.

  <a href="https://ibb.co/JCsx44t"><img src="https://i.ibb.co/stV5GGR/Create-new-event.png" alt="Create-new-event" border="1"></a>

  Once the event is created the user will redirect to the events page where he can view all the events.
  events are added such that the latest event created will be on the left.

 <a href="https://ibb.co/tH6dK0x"><img src="https://i.ibb.co/b6Vfm42/all-Events.png" alt="all-Events" border="1"></a>

- <b>Event page</b>
  You can navigate to the single event page by clicking on the Read more button.

  <a href="https://ibb.co/6Z7xkB1"><img src="https://i.ibb.co/pPB8SyR/event-page.png" alt="event-page" border="0"></a>

  clicking on the back arrow will navigate back to the all events page
