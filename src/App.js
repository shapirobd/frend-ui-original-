import logo from "./logo.svg";
import "./App.css";
// import Accordion from "./components/Accordion";
// import Form from "./components/Form";
// import Grid from "./components/Grid";
// import Message from "./components/Message";
// import Modal from "./components/Modal";
// import ProgressBar from "./components/ProgressBar";
// import Tab from "./components/Tab";
// import Table from "./components/Table";
import Card from "./components/Card/Card";
import CardBody from "./components/Card/CardBody";
import CardHeader from "./components/Card/CardHeader";
import CardImage from "./components/Card/CardImage";
import CardActions from "./components/Card/CardActions";
import Avatar from "./components/Avatar";

function App() {
	return (
		<div className="App">
			<Card bg="dark">
				<CardHeader title="Title" subtitle="Subtitle" avatarContent="R" />
				<CardImage
					image="https://images.unsplash.com/photo-1614822282964-18d729930cb4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1643&q=80"
					title="Sandwich"
				/>
				<CardBody>
					This is the body and it is awesome because everything is so cool!
					Don't you want to use FrendUI!?
				</CardBody>
				<CardActions>
					<Avatar>+</Avatar>
					<Avatar>-</Avatar>
				</CardActions>
			</Card>
		</div>
	);
}

export default App;
