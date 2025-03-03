React does not render false, null, undefined, or NaN in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, 0 and empty strings ("") are exceptions:

0 is rendered in the DOM because it is considered a valid React node. This means that if 0 is the result of an expression, it will appear in your UI.
Empty strings ("") are also considered valid outputs and are rendered as well.
//* 1. Variables //? You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

//* 2: Expressions //? JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

//* 3. Function Calls //? Functions, especially those that return JSX, can be invoked directly within your JSX.