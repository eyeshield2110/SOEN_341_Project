
# SOEN 341 Project
## Project description
Web application (Instagram clone) with core features:
- Posting images
- Commenting on posts
- Following/Unfollowing other users
- Displaying user profiles
- Liking/unliking posts

## Demo
### Login & Personalized Dashboard
User logs in and is redirected to their dashboard, where they can view posts uploaded from people they follow

![Instagram_login2](https://user-images.githubusercontent.com/46866682/131889202-f149bbd1-feca-4547-9809-984ea9847f7e.gif)

### Comments
User can comment on posts. They are authorized to delete their own comments, but not those of others.

![Instagram_comment1](https://user-images.githubusercontent.com/46866682/131890774-a626e69c-7e86-4d3f-bd84-ad3e65255b97.gif)

### User profile and Follow
User can view other user profiles, check their lists of followers and follows, and follow/unfollow them.

![Instagram_user_follow](https://user-images.githubusercontent.com/46866682/131892819-d079303e-9305-4d40-b105-bba024b5358f.gif)

Following (or unfollowing) adds (or remove) the target user's contents from our dashboard.

![Instagram_user_follow1](https://user-images.githubusercontent.com/46866682/131893659-a89952be-45e4-454b-b721-003fe82a78e7.gif)

### Uploading images & Posting
User can create posts - A post contains an image (stored in the cloud storage Cloudinary) and a caption.

![Instagram_post](https://user-images.githubusercontent.com/46866682/131896241-508cacff-1123-4f94-abcd-3a07da1ec740.gif)

User can then edit their post.

![Instagram_edit](https://user-images.githubusercontent.com/46866682/131896672-f6605728-ba1d-466d-852e-8b414ec17507.gif)

### Likes and list of likes
User can like posts, and see the people who like a post

![Instagram_like](https://user-images.githubusercontent.com/46866682/131898075-c38b4970-97e6-4737-9e8a-631d1f8bb02b.gif)


## To run:
#### Clone the repo on the command line
`$    git clone eyeshield2110/SOEN_341_Project`
#### Install all the node package dependencies
`$    npm install`
#### Inside the root directory, run the following command
`$    npm start`
#### To end the connection to the local server
`CTRL` + `Z`

## Architecture design (by [Madline](https://www.github.com/madeleine3341))
![image](https://user-images.githubusercontent.com/77517286/115093780-6bea0700-9ee9-11eb-962b-997e8442601e.png)

## Team members
- Jananee Aruboribaran 40129224 (github:  BunnyPrince)
- Noah-James Dinh 40128079 (github: eyeshield2110)
- Marian Maksimos 40067018 (github: M-Maksimos)
- Madline Nessim 40078034 (github: madeleine3341)
- Thanh Ta 40085781 (github: mth-1012)

## Technologies
### Frontend
- HTML, CSS, Vanilla Javascript
- Bootstrap5 - [Responsive Web Framework](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- EJS - [Embedded Javascript Templating](https://ejs.co/). This allows us to inject backend js code into frontend HTML 
### Backend
- MongoDB - [Local NoSQL database](https://www.mongodb.com/)
- Cloudinary API - [Cloud storage service](https://cloudinary.com/)
- Node.js with Express.js - [Lightweight node web framework](https://expressjs.com/)



