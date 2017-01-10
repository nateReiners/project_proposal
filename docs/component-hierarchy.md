## Component Hierarchy

**HomeLoggedOutContainer**
  * HomeLoggedOut
  * MainNav

**MainNavContainer**
    * MainNav
      * (logged-out) LoginButton
      * (logged-out) SignUpButton
      * (logged-in) LogoutButton
      * (logged-in) current-user-pic and username
      * (logged-in) Logout-button
      * (logged-in) Upload-button
      * (logged-in) (Bonus) Notifications
      * (logged-in) (Bonus) DiscoverButton
      * (logged-in) (Bonus) SeachBar

**HomeLoggedInContainer**
  * MainNav
  * HomeFeedContainer
  * (Bonus) HomeSideContainer

**HomeFeedContainer**
 * HomeFeedIndex
  * HomeFeedIndexItem
    * (Bonus) Like-button
    * (Bonus) Add-to-collection-button

**AuthFormContainer**
  * AuthForm

**ProfileContainer**
 * Profile
 * MainNav
 * ProfileTabs
   * PhotosIndex
    * PhotosIndexItem
   * About
   * (Bonus) Galleries


**PhotoDetailsContainer**
  * MainNav
  * PhotoDetails
  * (Bonus) SlideShowIndex
    * SlideShowIndexItem

 **(Bonus) EditContainer**
  * MainNav
  * EditFormContainer
    * EditForm

**UploadContainer**
  * CloudinaryUploadWidget

**(Bonus) SearchContainer**
  * MainNav
  * SearchNav
  * SearchIndex
    * SearchIndexItem

    ## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeLoggedOutContainer" |
| "/my-home" | "HomeLoggedInContainer" |
| "/home/profile/:id" | "ProfileContainer" |
| "/new-photos" | "UploadContainer" |
| "/photos/:id" | "PhotoDetailsContainer" |
|(BONUS) "/edit-photo" | "EditContainer" |
|(BONUS) "/new-photos" | "UploadContainer" |
