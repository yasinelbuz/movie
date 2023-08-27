import Component from "@/components";
import Pages from "@/pages";

const routes = [
	{
		path: "/",
		element: (
			<Component.Layout>
				<Pages.Home />
			</Component.Layout>
		),
	},
	{
		path: "/movie-detail",
		element: (
			<Component.Layout>
				<Pages.MovieDetail />
			</Component.Layout>
		),
	},
	{
		path: "*",
		element: (
			<Component.Layout>
				<Pages.PageNotFound />
			</Component.Layout>
		),
	},
];

export default routes;
