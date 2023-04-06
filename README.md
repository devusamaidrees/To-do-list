# To-do-list
# Introduction
This code defines a simple to-do list application that allows users to add tasks, mark them as completed, and remove them from the list. The tasks are stored in the browser's local storage, so they persist even after the page is closed and reopened.

# Usage
#### To `use the application`, open the HTML file in a web browser. The user interface consists of a text input field, a button to add tasks, and a list of tasks.

#### To `add a new task`, type a description in the input field and click the "Add Task" button. The new task will appear at the bottom of the list.

#### To `mark a task as completed`, click on the task. The task will be visually marked as completed by changing its background color. To unmark a task, click on it again.

#### To `remove a task`, click on the "`x`" icon next to the task.

#### The application uses the browser's `local storage` to store the list of tasks. The list will be automatically loaded from local storage when the page is opened. Any changes made to the list will be saved to local storage automatically.

# Code explanation
The code consists of five functions:

1.**Add_task()**: This function is called when the user clicks the "Add Task" button. It checks if the input field is empty, and if so, displays an alert. If the input field contains text, a new `<li>` element is created with the text as its inner HTML. A "delete" button is also added to the `<li>` element. The new `<li>` element is then appended to the list container (`<ul>` element). Finally, the input field is cleared, and the list is saved to local storage.

2.**list_container.addEventListener()**: This function listens for click events on the list container (`<ul>` element). If the clicked element is an `<li>` element, the class "checked" is toggled, and the list is saved to local storage. If the clicked element is the "delete" button (`<span>` element), the parent `<li>` element is removed from the list, and the list is saved to local storage.

3.**Save_Data():** This function saves the list of tasks to local storage. The list is saved as a string of HTML.

4.**Show_Data()**: This function retrieves the list of tasks from local storage and displays it in the list container (<ul> element).

5.The last line of code calls the Show_Data() function when the page is loaded, so the list is automatically loaded from local storage.
