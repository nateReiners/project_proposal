# TogLink

TODO: add link to live version of site

[Trello Link](https://trello.com/b/U5H5Xk4Y/toglink-by-nate)

## Minimum Viable Product

#### TogLink is a web application inspired by 500px built using Ruby on Rails and React/Redux. It will include the following features with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

  1. New account creation, login, and guest/demo login
  2. A production README
  3. Hosting on Heroku
  4. Post Pictures
      * Users can upload pictures with Cloudinary
  5. Follows
      * Users can follow and unfollow one another
  6. Home Feed
      * Gets populated with the photos of the current user's follows
      * Upon clicking picture, it takes you to that photos show page
  7. Profile Page
      * Shows profile picture, username and cover photo
      * Has tabs to view photos or about section

## Design Docs

[View Wireframes](./wireframes/)
[API Endpoints](api-endpoints.md)
[DB Schema](schema.md)
[Sample State](sample-state.md)


## Implementation Timeline

* Phase 1: Backend setup and Front End User Authentication (2 days)
  * Objective: Functioning rails project with front-end Authentication

* Phase 2: Pictures Model, API, and components (2 days)
  * Objective: Pictures can be posted & viewed.

* Phase 3: Follows (1 days)
  * Objective: Current user can follow other users either by clicking a button on one of their photos or on their profile page.

* Phase 4: Home Feed (1 day)
  * Objective: Display most recent photos from current user's follows on TogLink homepage.

* Phase 3: Profile Page (1 day)
  * Objective: Profile Page displays profile picture, name and photos

* Phase 4: Follows (1 days)
  * Objective: Current user can follow other users either by clicking a button on one of their photos or on their profile page.




## Bonus Features (TBD)

* Bonus: Photo Edit (title/captions) and delete through the API.
* Bonus: Infinite Scroll for Home Feed
* Bonus: Tags
* Bonus: Albums
  - Each photo-item will include a button to add picture to album
* Bonus: Discover
* Bonus: Notifications
