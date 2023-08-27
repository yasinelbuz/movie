/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useEffect, useState } from "react";
import { Skeleton, Table, Input, Select, InputNumber } from "antd";
import { StylesHome, StyleFilters } from "./styles";
import api from "@/api";
import { Link } from "react-router-dom";

export default function Home() {
	const { Search } = Input;

	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
		total: 200,
		showSizeChanger: false,
	});

	const [search, setSearch] = useState("pokemon");
	const [type, setType] = useState();
	const [year, setYear] = useState();

	const columns = [
		{
			title: "Poster",
			dataIndex: "Poster",
			key: "name",
			width: 50,
			render: (url: string, render: any) => (
				<Link to={`/movie-detail?imdbID=${render?.search?.imdbID}`}>
					<img src={url} style={{ width: "50px" }} />
				</Link>
			),
		},
		{
			title: "Title",
			dataIndex: "Title",
			key: "title",
			width: 300,
		},
		{
			title: "Type",
			dataIndex: "Type", // Corrected dataIndex value
			key: "type",
			width: 100,
		},
		{
			title: "imdbID",
			dataIndex: "imdbID", // Corrected dataIndex value
			key: "imdbID", // Unique key value
			width: 200,
		},
		{
			title: "",
			dataIndex: "imdbID", // Corrected dataIndex value
			key: "actions", //
			fixed: "right",
			align: "right",
			render: (imdbID: string) => <Link to={`/movie-detail?imdbID=${imdbID}`}>Detail</Link>,
		},
	];

	const { data, error, isLoading } = api.useGetMoviesQuery({
		search: search,
		page: pagination.current,
		type,
		year,
	});

	useEffect(
		() => {
			setPagination((prev: any) => ({ ...pagination, total: data?.totalResults } as any));
		},
		[data] as any
	);

	if (isLoading) {
		return (
			<StylesHome>
				<Skeleton paragraph={{ rows: 12 }} active />
			</StylesHome>
		);
	}

	return (
		<StylesHome>
			<StyleFilters>
				<InputNumber
					min={1900}
					max={2023}
					onChange={(e) => setYear(e)}
					placeholder='Select Year'
					size='large'
					className='inputNumber'
				/>

				<Select
					placeholder='Select Type'
					onChange={(e) => setType((prev) => e)}
					onClear={() => setType("")}
					allowClear
					options={[
						{ value: "movie", label: "Movie" },
						{ value: "series", label: "Series" },
						{ value: "episode", label: "Episode" },
					]}
					size='large'
					className='selectType'
				/>

				<Search
					placeholder='Search'
					allowClear
					defaultValue={search}
					enterButton='Search'
					onSearch={(e) => setSearch(e)}
					className='search'
					size='large'
				/>
			</StyleFilters>

			<Table
				dataSource={data?.Search}
				columns={columns}
				loading={isLoading}
				onChange={(paginate) =>
					setPagination((prev: any) => ({ ...pagination, current: paginate?.current } as any))
				}
				pagination={{ ...pagination }}
				bordered
			/>
		</StylesHome>
	);
}
