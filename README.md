# `<Text h1>React Echo</Text>`

## Rewriting the same typography component stops now

React Echo is a clean and delightful component for all things text!

```sh
npm install react-echo
yarn add react-echo
pnpm add react-echo
```

## Usage

React Echo is **un-opinionated** it makes no assumptions about your typography styling; your app, your styles. Reach Echo is here to make your app better, not impose styles. 💪

```tsx
import { Text, TextProvider } from "react-echo";
import { styles } from "./text.module.css";

function App() {
  return (
    <TextProvider classNames={styles}>
      <Text>Hello World!</Text>
    </TextProvider>
  );
}
```

**text.module.css**

```css
.text, .text.h {
  margin: 0;
  font-family: arial;
}
.text.p {
}
.text.inline {
}
.text.h {
}
.text.h1 {
}
.text.h2 {
}
.text.h3 {
}
.text.h4 {
}
.text.h5 {
}
.text.h6 {
}
.text.a {
}
.text.bold {
}
.text.underline {
}
.text.strikeThrough {
}
```

## Reference

```jsx
<Text>Paragraph</Text>
<Text h1>Heading 1</Text>
<Text h2>Heading 2</Text>
<Text h3>Heading 3</Text>
<Text h4>Heading 4</Text>
<Text h5>Heading 5</Text>
<Text h6>Heading 6</Text>
<Text h1 as="h3">Heading 3 with heading 1 styles (SEO)</Text>
<Text>
  Place inline
  <Text inline>
    text
  </Text>
  inside and
  <Text inline italic>
    render
  </Text>
  as
  <Text inline bold color="red">
    span
  </Text>
</Text>
<Text family="helvetica" weight="bold">I'm bold and boring</Text>
<Text weight="bold">bold</Text>
<Text weight="bolder">bolder</Text>
<Text weight="normal">normal</Text>
<Text weight="lighter">lighter</Text>
<Text weight={300}>custom</Text>
```
