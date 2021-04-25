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
