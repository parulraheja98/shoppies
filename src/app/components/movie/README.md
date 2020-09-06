# Movie component

Movie component is a main component that contains list of nominations and movie search results.

| Property     | Type    | Description                                                                                   |
| ------------ | ------- | --------------------------------------------------------------------------------------------- |
| movies       | Movie[] | List of movies returned as a part of search result.                                           |
| nominations  | Movie[] | List of movies nominated.                                                                     |
| title        | string  | the title of the movie that is searched.                                                      |
| isLoading    | boolean | this tracks the status of the load result whether results loading have been completed or not. |
| error        | string  | this is the error message displayed if search results have invalid state.                     |
| page         | number  | this tracks the page number of the current search result.                                     |
| totalResults | number  | number of search results found for the movie with a given title.                              |

## Reference

![alt text](https://images-shoppies-project.s3-us-west-2.amazonaws.com/Screen+Shot+2020-09-06+at+3.21.42+AM.png)
