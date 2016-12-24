export function selectBook(book) {
    // This is an ActionCreator. It needs to return an action -
    // an object with a type property and optionally a payload
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
};