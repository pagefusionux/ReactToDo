# ReactTodo

After cloning the ReactBoilerplate3 repository and downloading its '.git' directory, you can do
the following commands to change the destination of origin to a new 'ReactToDo' repo for this project
(make sure the ReactToDo repo is set up on github.com first):
- `$ git remote -v` (see how origin is currently setup)
- `$ git remote rm origin`
- `$ git remote add origin https://github.com/pagefusionux/ReactToDo.git`
- `$ git push -u origin master`

Add UUID library for unique IDs:
- `$ npm install node-uuid --save-dev`

Add existence of api folder to webpack:
- edit webpack.config.js, add under modulesDirectories array:
  - './app/api'

---
Udemy Tutorial:
https://www.udemy.com/the-complete-react-web-app-developer-course
