# Forger

**Forger** is an elegant TypeScript library designed to effortlessly craft dynamic strings by seamlessly replacing placeholders within a template with values from a data object. It offers a streamlined and versatile solution for generating text with finesse.

## Installation

You can integrate **Forger** into your project with ease using npm or yarn:

```bash
npm install @devdesignersid/forger
# or
yarn add @devdesignersid/forger
```

## Usage

Unlock the power of Forger in your TypeScript/JavaScript project with this simple example:

```ts
import Forger from '@devdesignersid/forger';

// Create a template string with placeholders
const emailTemplate = 'Hello, {{user.name}}! Your email is {{user.email}}.';

// Instantiate a Forger instance with the template
const emailForger = new Forger(template);

// Define a data object with values to replace the placeholders
const data = {
  user: {
    name: 'John Doe',
    email: 'john@example.com',
  },
};

// Forge the string by replacing placeholders with data values
const result = emailForger.forge(data);

console.log(result);
// Output: "Hello, John Doe! Your email is john@example.com."

```
## Escaping Placeholders

You have the option to escape placeholders by using double backslashes (`\\`) before the opening and closing braces. For example:

```ts
const template = 'This is an escaped placeholder: \\{{escaped\\}}';
```

## Error Handling

**Forger** is vigilant about placeholders. If a placeholder in the template doesn't have a corresponding value in the data object, it will gracefully raise an error. Ensure your data object contains all the necessary values to maintain a smooth runtime.

## API Reference


### `Forger(template: string)`

Creates a new Forger instance with the specified template.

- `template` (string): The template string containing placeholders.

### `forge(data: T): string`

Generates a new string by replacing placeholders in the template with values from the data object.

- `data` (T): The data object containing values to replace placeholders.
- Returns: A string with placeholders replaced by data values.


## License

This library operates under the MIT License. Delve into the LICENSE file for detailed information.

## Issues and Feedback

Should you encounter any issues or have valuable feedback to offer, kindly create an issue on our GitHub repository.