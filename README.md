# TogLink


[Live Site](http://www.toglink.com/#/)

TogLink is a full-stack web app inspired by 500px. The backend uses Ruby on Rails and a Postgres database, and the frontend was built using React.js with a Redux framework.

##Features


###Nav Bar

The Nav Bar allows you to go home by clicking the TogLink logo, go to your own profile page, upload a photo to your profile uploads collection or logout from any page except the logged out page and the image show page.


###Posting and Rendering of Photo Components

The database contains a photos table which stores the following photo attributes: author_id, title, img_url, and created_at for each photo. When a user logs into the site, they are immediately directed to their home feed which contains a collection of photos uploaded by users they are currently following. This is accomplished by making an API call to the database which loops through users followed by the current user and collects all of their photos into an array. I re-purposed a photosIndex component to make it serve as the home feed component and the each user's individual photo collection (found on each users profile page) by fetching the appropriate photos from the backend and passing them in as props from the home component or profile component.

####Example from Profile Component's Render Method:

  </div>
    <h1>Photos</h1>
    <PhotosIndexContainer photos={this.props.user.photos || []} />
  </div>


 With the appropriate data at my disposal, I constructed photoIndexItems which can take the current user to the photo show page or to the photographers profile to feature on the home feed.

![homefeed][homefeed]

The show page allows for viewing of the entire image. The photos piece of state only holds the photos which need to be rendered on a certain page. When viewing the photo details page, the store only has one photo in it.

![show][show]

###Profiles

Profiles show each users information, including their name, profile picture, cover photo, uploaded photos collection and bio. When visiting another users page, you can follow or unfollow accordingly.

![profile][profile]

When visiting your own page, the follow button is replaced with an edit profile button.
This opens a form which allows the user to edit their own cover photo, profile picture, name, email and bio. Upon submit, the current users information gets updated by firing an updateUser action which fires an ajax request to the backend and changes the front end state as soon as the request returns a response.

![profile edit form][profileform]

###Future Features to Implement

The site as it stands is enjoyable and usable, but there are so many more things I'd like to add to it.

####Suggested Follows and Most-Recent Feed

  I'd love to create a suggested follows section to render at the top of the home feed so users can conveniently discover new photographers. A Most-Recent feed would allow users to see the most recently uploaded photos on the site, regardless of whether or not they are following the photos author.

####Infinite Scroll

  Infinite scroll would make the home feed load faster which is will become a concern for users who are following very many photographers.

####Search

I'd like to be able to search by title and by date added. This offers users a convenient way to find specific photos they are most interested in. and allows for a better user experience.


[homefeed]: ./docs/images/homefeed.png
[profile]: ./docs/images/profile.png
[profileform]: ./docs/images/profileform.png
[show]: ./docs/images/showCat.png
[uploadWidget]: ./docs/images/uploadWidget.png
[splash]: ./docs/images/splash.png
