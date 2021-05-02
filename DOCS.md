# Component Categories

[Card](#card)  
[Grid](#grid)

<br></br>

# Components

## Accordion

```javascript
import "./App.css";
import React from "react";
import AccordionGroup from "./components/Accordion/AccordionGroup";
import Accordion from "./components/Accordion/Accordion";
import AccordionSummary from "./components/Accordion/AccordionSummary";
import AccordionDetails from "./components/Accordion/AccordionDetails";
import DownArrowIcon from "./icons/DownArrowIcon";

function App() {
	return (
		<div
			className="App"
			style={{
				display: "flex",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<div
				style={{
					width: "50%",
					height: "fit-content",
					padding: "20px",
					backgroundColor: "#333333",
					borderRadius: "4px",
				}}
			>
				<AccordionGroup>
					<Accordion bg="dark">
						<AccordionSummary expandIcon={<DownArrowIcon color="light" />}>
							Accordion 1
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>
					<Accordion bg="dark">
						<AccordionSummary expandIcon={<DownArrowIcon color="light" />}>
							Accordion 2
						</AccordionSummary>
						<AccordionDetails>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</AccordionDetails>
					</Accordion>
					<Accordion bg="dark" disabled>
						<AccordionSummary expandIcon={<DownArrowIcon color="light" />}>
							Disabled Accordion
						</AccordionSummary>
					</Accordion>
				</AccordionGroup>
			</div>
		</div>
	);
}

export default App;
```

## Card

```javascript
import "./App.css";
import React from "react";
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

## CircularProgress

```javascript
import "./App.css";
import React from "react";
import CircularProgress from "./components/Progress/CircularProgress";

function App() {
	return (
		<div
			className="App"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "fit-content",
					height: "fit-content",
					padding: "20px",
					backgroundColor: "#333333",
					borderRadius: "4px",
				}}
			>
				<CircularProgress size={100} color="#7777ff" />
				<CircularProgress size={100} color="#ff7777" />
				<CircularProgress size={100} color="#77ff77" />
			</div>
		</div>
	);
}

export default App;
```

## Form

```javascript
import "./App.css";
import React from "react";
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
import "./App.css";
import React from "react";
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

## NavBar

```javascript
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import NavSection from "./components/NavBar/NavSection";
import NavItem from "./components/NavBar/NavItem";
function App() {
	return (
		<div className="App">
			<NavBar position="static" bg="dark">
				<NavSection>
					<NavItem>Home</NavItem>
				</NavSection>
				<NavSection>
					<NavItem>Login</NavItem>
					<NavItem>Sign up</NavItem>
				</NavSection>
			</NavBar>
		</div>
	);
}

export default App;
```

## Table

```javascript
import "./App.css";
import React from "react";
import TableContainer from "./components/Table/TableContainer";
import Table from "./components/Table/Table";
import TableCell from "./components/Table/TableCell";
import TableHead from "./components/Table/TableHead";
import TableRow from "./components/Table/TableRow";
import TableBody from "./components/Table/TableBody";
function App() {
	return (
		<div className="App">
			<TableContainer>
				<Table bg="dark">
					<TableHead>
						<TableCell>Dessert (100g serving)</TableCell>
						<TableCell align="right">Calories</TableCell>
						<TableCell align="right">Fat (g)</TableCell>
						<TableCell align="right">Carbs (g)</TableCell>
						<TableCell align="right">Protein (g)</TableCell>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Frozen yogurt</TableCell>
							<TableCell align="right">159</TableCell>
							<TableCell align="right">6</TableCell>
							<TableCell align="right">24</TableCell>
							<TableCell align="right">4</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Ice cream sandwich</TableCell>
							<TableCell align="right">237</TableCell>
							<TableCell align="right">9</TableCell>
							<TableCell align="right">37</TableCell>
							<TableCell align="right">4.3</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Eclair</TableCell>
							<TableCell align="right">262</TableCell>
							<TableCell align="right">16</TableCell>
							<TableCell align="right">24</TableCell>
							<TableCell align="right">6</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Cupcake</TableCell>
							<TableCell align="right">305</TableCell>
							<TableCell align="right">3.7</TableCell>
							<TableCell align="right">67</TableCell>
							<TableCell align="right">4.3</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Gingerbread</TableCell>
							<TableCell align="right">356</TableCell>
							<TableCell align="right">16</TableCell>
							<TableCell align="right">49</TableCell>
							<TableCell align="right">3.9</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default App;
```

## Tabs

```javascript
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Tab from "./components/Tabs/Tab";
import Tabs from "./components/Tabs/Tabs";
import TabPanel from "./components/Tabs/TabPanel";
function App() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="App">
			<NavBar position="static" bg="dark">
				<Tabs value={value} onChange={handleChange}>
					<Tab label="Item One" number={0} />
					<Tab label="Item Two" number={1} />
					<Tab label="Item Three" number={2} />
				</Tabs>
			</NavBar>
			<TabPanel value={value} index={0} bg="dark">
				Item One
			</TabPanel>
			<TabPanel value={value} index={1} bg="dark">
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2} bg="dark">
				Item Three
			</TabPanel>
		</div>
	);
}

export default App;
```
