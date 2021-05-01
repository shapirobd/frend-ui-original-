import "./App.css";
import React from "react";
// import Accordion from "./components/Accordion";
// import Form from "./components/Form/Form";
// import FormRow from "./components/Form/FormRow";
// import FormColumn from "./components/Form/FormColumn";
// import TextInput from "./components/Form/TextInput";
// import Button from "./components/Form/Button";
// import Checkbox from "./components/Form/Checkbox";
// import Radio from "./components/Form/Radio";
// import Grid from "./components/Grid/Grid";
// import GridItem from "./components/Grid/GridItem";
// import Message from "./components/Message";
// import DialogScreen from "./components/Dialog/DialogScreen";
// import ProgressBar from "./components/ProgressBar";
// import Tab from "./components/Tab";
// import TableContainer from "./components/Table/TableContainer";
// import Table from "./components/Table/Table";
// import TableCell from "./components/Table/TableCell";
// import TableHead from "./components/Table/TableHead";
// import TableRow from "./components/Table/TableRow";
// import TableBody from "./components/Table/TableBody";
// import Card from "./components/Card/Card";
// import CardBody from "./components/Card/CardBody";
// import CardHeader from "./components/Card/CardHeader";
// import CardImage from "./components/Card/CardImage";
// import CardActions from "./components/Card/CardActions";
// import Avatar from "./components/Avatar";
// import useToggleState from "./hooks/useToggleState";
import NavBar from "./components/NavBar/NavBar";
// import NavSection from "./components/NavBar/NavSection";
// import NavItem from "./components/NavBar/NavItem";
import Tab from "./components/Tabs/Tab";
import Tabs from "./components/Tabs/Tabs";
import TabPanel from "./components/Tabs/TabPanel";

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
