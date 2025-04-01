# My Giphy

This test was built with Typescript using React and Redux. The boilerplate is prepared with Vite. The project is divided into the following folder.
- The `redux` folder contains the boilerplate to setup redux store and any redux logic.
- The `ui` folder is the folder that contains the ui building block components (ui layer), it can be considered as the home folder of a minimal design system.
- The `components` folder is the folder that contains react components that represent features and business logic.
- The `services` folder acts as the service layer, encapsulating the API communication logic.
- The `types` folder reusable types.


# commands
to run the project please clone it and then install the dependencies using
```
npm install

```

to run the project
```
npm start

```
  
# The solution, Architecture and design patterns
- Redux was used as a robust state management solution, and Redux toolkit was utilized as the officially recommended way of using redux.
- Redux RTK Query was used as a way for managing API communication.
- React `Compound components` design pattern was mainly used for `ResponsiveList`. This pattern provides a nice and clean approach to manage components that naturally go toether like `ResponsiveList` and `ResponsiveList.Column`. This is very popular pattern in UI libraries.
- Due to the limited time constraints of 3 hours, testing was ignored in this take home assignment.
- CSS Modules were used for styling.
