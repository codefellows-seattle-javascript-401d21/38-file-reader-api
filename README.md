![cf](http://i.imgur.com/7v5ASc8.png) 38: Photo Uploads
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas

## Requirements
#### backend setup
* Use your CF-Gram Backend API and associated `.env` file. You will need to add the AWS ENV Vars for today's lab, which also means that you will need to set up your IAM account keys and at least one S3 Bucket.

#### Feature Tasks
##### Components
```
App
    Navbar
        Avatar
    Dashboard
        PhotoForm
        [PhotoItem]
    Settings
        Profile
```

* Create a SettingsContainer
  * give the user the ablity to create or update their profile image, and any other settings you would like to provide them access to.
  * Render the profile image into an Avatar component in the Navbar.

* Create a DashboardContainer
  * give the user the abilty to create, read, update and destroy Galleries and Photos.

##### Styles
* Continue working on your stylistic layer using SMACSS for the primary site styles, and partials for each of your individual components.

#### Test
* Test your redux reducers
* Test your util methods

#### Documentation
Write a description of the project in your README.md
