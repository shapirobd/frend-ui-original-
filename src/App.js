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
import CircularProgress from "./components/Progress/CircularProgress";
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
// import NavBar from "./components/NavBar/NavBar";
// import NavSection from "./components/NavBar/NavSection";
// import NavItem from "./components/NavBar/NavItem";
// import Tab from "./components/Tabs/Tab";
// import Tabs from "./components/Tabs/Tabs";
// import TabPanel from "./components/Tabs/TabPanel";
// import AccordionGroup from "./components/Accordion/AccordionGroup";
// import Accordion from "./components/Accordion/Accordion";
// import AccordionSummary from "./components/Accordion/AccordionSummary";
// import AccordionDetails from "./components/Accordion/AccordionDetails";
// import DownArrowIcon from "./icons/DownArrowIcon";

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
