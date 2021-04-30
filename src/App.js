import "./App.css";
import React, { useEffect } from "react";
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
import TableContainer from "./components/Table/TableContainer";
import Table from "./components/Table/Table";
import TableCell from "./components/Table/TableCell";
import TableHead from "./components/Table/TableHead";
import TableRow from "./components/Table/TableRow";
import TableBody from "./components/Table/TableBody";
// import Card from "./components/Card/Card";
// import CardBody from "./components/Card/CardBody";
// import CardHeader from "./components/Card/CardHeader";
// import CardImage from "./components/Card/CardImage";
// import CardActions from "./components/Card/CardActions";
import Avatar from "./components/Avatar";
import useToggleState from "./hooks/useToggleState";

// const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
