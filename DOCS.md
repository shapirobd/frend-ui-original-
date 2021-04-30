# Component Categories

[Card](#card)  
[Grid](#grid)

<br></br>

# Components

## Card

```javascript
import Card from "./components/Card/Card";
import CardBody from "./components/Card/CardBody";
import CardHeader from "./components/Card/CardHeader";
import CardImage from "./components/Card/CardImage";
import CardActions from "./components/Card/CardActions";
import Avatar from "./components/Avatar";

const App = () => {
	return (
		<Card bg="dark">
			<CardHeader title="Title" subtitle="Subtitle" avatarContent="R" />
			<CardImage image="./images/apple.png" title="Sandwich" />
			<CardBody>
				Apple, (Malus domestica), fruit of the domesticated tree Malus domestica
				(family Rosaceae), one of the most widely cultivated tree fruits.
			</CardBody>
			<CardActions>
				<Avatar>+</Avatar>
				<Avatar>-</Avatar>
			</CardActions>
		</Card>
	);
};

export default App;
```

## CardActions

```javascript

```

## CardBody

```javascript

```

## CardHeader

```javascript

```

## CardImage

```javascript

```

## Form

```javascript
import Form from "./components/Form/Form";
import FormRow from "./components/Form/FormRow";
import FormColumn from "./components/Form/FormColumn";
import TextInput from "./components/Form/TextInput";
import Button from "./components/Form/Button";
import Checkbox from "./components/Form/Checkbox";
import Radio from "./components/Form/Radio";

function App() {
	return (
		<div className="App">
			<Form>
				<FormRow>
					<TextInput name="email" label="Email" placeholder="Enter email" />
					<TextInput
						name="username"
						label="Username"
						placeholder="Enter username"
					/>
					<TextInput
						type="password"
						name="password"
						label="Password"
						placeholder="Ender password"
					/>
				</FormRow>
				<FormRow>
					<FormColumn>
						<Checkbox />
						<Checkbox />
						<Checkbox />
						<Checkbox />
					</FormColumn>
				</FormRow>
				<Radio name="fruits" value="apple" />
				<Radio name="fruits" value="orange" />
				<Button bg="primary" color="light">
					Click me!
				</Button>
				<Button bg="secondary" color="dark" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}
```

## Grid

```javascript
import Grid from "./components/Grid/Grid";
import GridItem from "./components/Grid/GridItem";
import Card from "./components/Card/Card";
import CardBody from "./components/Card/CardBody";
import CardHeader from "./components/Card/CardHeader";
import CardImage from "./components/Card/CardImage";
import CardActions from "./components/Card/CardActions";
import Avatar from "./components/Avatar";

function App() {
	return (
		<div className="App">
			<Grid xs={1} sm={2} md={3} lg={6} justifyContent="flex-start" spacing={3}>
				<GridItem>1</GridItem>
				<GridItem>2</GridItem>
				<GridItem>3</GridItem>
				<GridItem>4</GridItem>
				<GridItem>5</GridItem>
				<GridItem>6</GridItem>
			</Grid>
		</div>
	);
}
```

## GridItem

```javascript

```

## Table
