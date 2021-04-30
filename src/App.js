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
import NavSection from "./components/NavBar/NavSection";
import NavItem from "./components/NavBar/NavItem";

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

{
	/* <AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					<Tab label="Item One" {...a11yProps(0)} />
					<Tab label="Item Two" {...a11yProps(1)} />
					<Tab label="Item Three" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel> */
}
