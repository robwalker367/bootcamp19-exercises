
To build this app, we will break it up into two components which comprise the body of the app. A visual representation of our components is as follows:

- Root (state)
    - Left Column (component)
        - "Current Todos" header
        - Unordered list (.map()) (component)
            - String
            - Delete button (component)
    - Right Column
        - Add (.push()) (component)
            - Text input field
            - Add button (component)
        - Search input field (.filter() and .pop()) (component

In the left column we have the "current todos header" which will be constant and will be coded using just HTML tags (<h1>). Below this header is a component for our list of todos and their respective delete buttons. Within this component of list items we will have a component for each delete button.

To store our data, we will use an array of objects. Each object will have an id property (we'll use UID to generat a unique/random string for each id) and a string property which contains the text. This array of objects will be stored in state. To access the list we'll use .map() to render them in HTML.

In the right column we have one component for the add bar (text input) and the add button, and another component for the search bar (text input). When the "add" button is pressed, we will use .push() to add the todo to the array of objects (where we're storing our data) while generating a unique id. The serch bar will use .filter() to the mapped elements in the todo list and get rid of any strings with the user-provided substring.




