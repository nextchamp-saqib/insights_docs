export default function sidebar() {
	return [
		{
			text: "Getting Started",
			collapsible: false,
			items: [
				{
					text: "Setup your account",
					link: "/getting-started/setup-your-account",
				},
				{ text: "Create a query", link: "/getting-started/create-a-query" },
				{
					text: "Create a dashboard",
					link: "/getting-started/create-a-dashboard",
				},
			],
		},
		{
			text: "Configuration",
			collapsible: false,
			items: [
				{ text: "Adding Data Sources", link: "/data-source/create-new" },
			]
		},
		{
			text: "Query",
			collapsible: false,
			items: [
				{ text: "Tables", link: "/query/tables" },
				{ text: "Columns", link: "/query/dimension-metrics" },
				{ text: "Filters", link: "/query/filters" },
				{ text: "Expressions", link: "/query/expressions" },
			]
		},
		{
			text: "Miscellaneous",
			collapsible: false,
			items: [
				{
					text: "FAQ",
					link: "/miscellaneous/faq",
				},
			],
		},
	];
}
