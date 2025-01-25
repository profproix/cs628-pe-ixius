# PE02 Movie List

I started by creating the application using npx create-react-app movie_list.

I organized my components into a folder and built a presentational component, ListItem, which displays a movie using JSX. It includes a click handler that shows an alert with the movie title when clicked.

Next, I created the MovieList component to handle dynamic movie rendering. This component contains a list of movies that are mapped and passed to ListItem for display.

To implement filtering, I added an onChange event to a select element. When the selection changes, the filter function runs, comparing the selected genre with the genres in the movie array. The original array remains unmodified, while the state updates to reflect matching movies. The select options are dynamically generated based on all genres in the movie list.

Finally, the MovieList is rendered in the App component.
