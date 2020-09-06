# Movie Search Results Component.

Movie Search Results component contains the list of movies found by the title.


| Property | Type | Description |
| --------------- | --------------- | --------------- |
| movies |  Movie[] | List of movies returned as a part of search result.
| nominations | Movie[] | List of movies nominated. 
| title | string | the title of the movie that is searched.
| isLoading | boolean | this tracks the status of the load result whether results loading have been completed or not.
| error | string | this is the error message displayed if search results have invalid state.
| page | number | this tracks the page number of the current search result.
| totalResults | number | number of search results found for the movie with a given title.
| update | EventEmitter | update is emitted everytime the search result is nominated to update the list of nominations.
| nextPage | EventEmitter | this is event emitted everytime a user clicks on the next page of search results.
| pageSize | number | this is a property for setting the size of the results displayed per page.

## Reference

![alt text](https://images-shoppies-project.s3-us-west-2.amazonaws.com/Screen+Shot+2020-09-06+at+3.01.30+AM.png)

