import { Text } from "react-echo";

function App() {
  return (
    <div>
      <Text>Paragraph</Text>
      <Text h1>Heading 1</Text>
      <Text h2>Heading 2</Text>
      <Text h3>Heading 3</Text>
      <Text h4>Heading 4</Text>
      <Text h5>Heading 5</Text>
      <Text h6>Heading 6</Text>
      <Text h6>Heading 6</Text>
      <Text>
        Place inline
        <Text inline>text</Text>
        inside and
        <Text inline italic>
          render
        </Text>
        as
        <Text inline bold color="red">
          span
        </Text>
      </Text>
      <Text family="helvetica" weight="bold">
        I'm bold and boring
      </Text>
      <Text weight="bold">bold</Text>
      <Text weight="bolder">bolder</Text>
      <Text weight="normal">normal</Text>
      <Text weight="lighter">lighter</Text>
      <Text weight={300}>custom</Text>
    </div>
  );
}

export default App;
