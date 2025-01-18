# IxResume

![image](./PE01.png)
This application is an introductory React app based on the default content provided by Create React App. A custom component, Resume, has been added to render my resume in JSX. Components in React are structured like functions but return JSX, which the Virtual DOM converts to HTML for rendering.

The Resume component is exported from its file and imported into App.js, where it is rendered and returned. App.js is then rendered by index.js, which manipulates the DOM to locate a root element in a static HTML file, loading the entire application.

This structure demonstrates React’s component-based architecture and the seamless integration of JSX with JavaScript. By following this flow, the application ensures efficient rendering and dynamic interaction. This setup offers a foundation for learning key React concepts, such as components, JSX, and Virtual DOM.
