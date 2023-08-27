import { Table } from "antd";
import { StylesHome } from "./styles";

export default function Home() {
	const dataSource = [
		{
			key: "1",
			name: "Mike",
			age: 32,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "10 Downing asdasd",
		},
	];

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
		},
	];

	return (
		<StylesHome>
			<Table dataSource={dataSource} columns={columns} />
		</StylesHome>
	);
}
