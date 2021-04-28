import "./App.css";
import React, { useEffect } from "react";
// import Accordion from "./components/Accordion";
import Form from "./components/Form/Form";
import FormRow from "./components/Form/FormRow";
import FormColumn from "./components/Form/FormColumn";
import TextInput from "./components/Form/TextInput";
import Button from "./components/Form/Button";
import Checkbox from "./components/Form/Checkbox";
import Radio from "./components/Form/Radio";
// import Grid from "./components/Grid/Grid";
// import GridItem from "./components/Grid/GridItem";
// import Message from "./components/Message";
import DialogScreen from "./components/Dialog/DialogScreen";
// import ProgressBar from "./components/ProgressBar";
// import Tab from "./components/Tab";
// import Table from "./components/Table";
// import Card from "./components/Card/Card";
// import CardBody from "./components/Card/CardBody";
// import CardHeader from "./components/Card/CardHeader";
// import CardImage from "./components/Card/CardImage";
// import CardActions from "./components/Card/CardActions";
// import Avatar from "./components/Avatar";
import useToggleState from "./hooks/useToggleState";

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
	const [open, toggleOpen] = useToggleState(false);

	return (
		<div className="App">
			{/* <Form>
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
			</Form> */}
			<Button onClick={() => toggleOpen()}>Show Dialog</Button>
			<DialogScreen open={open} toggleOpen={toggleOpen}>
				This is a dialog. It is awesome!
			</DialogScreen>
		</div>
	);
}

export default App;
