import { DevFlex, DevContainer } from "./styles";
import Header from "../../components/Header";

import Input from "../../components/Input";

const About = () => {

	return (
		<DevFlex>
			<Header />
			<DevContainer>
				<div style={{backgroundColor:"purple", width: 175, height:250}}></div>
				<h3>Lucas Ribeiro</h3>
				<h4>Product Owner, PO</h4>
			</DevContainer>
			<DevContainer>
			<div style={{backgroundColor:"purple", width: 175, height:250}}></div>
				<h3>André L. T. Rosas</h3>
				<h4>Scrum Master, SM</h4>
			</DevContainer>
			<DevContainer>
			<div style={{backgroundColor:"purple", width: 175, height:250}}></div>
				<h3>Ariel Bernardes</h3>
				<h4>Tech Leader, TL</h4>
			</DevContainer>
			<DevContainer>
			<div style={{backgroundColor:"purple", width: 175, height:250}}></div>
				<h3>Igor Petersson</h3>
				<h4>Quality Assurance, QA</h4>
			</DevContainer>
			<DevContainer>
			<div style={{backgroundColor:"purple", width: 175, height:250}}></div>
				<h3>Osmar Eduardo</h3>
				<h4>Quality Assurance, QA</h4>
			</DevContainer>
			<DevContainer>
				<div style={{backgroundColor:"purple", width: 175, height:250}}></div>
				<h3>Pierre Kalil</h3>
				<h4>Quality Assurance, QA</h4>
			</DevContainer>
		</DevFlex>
	)
    }
    export default About;