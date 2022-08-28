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
			text: "Query",
			collapsible: false,
			items: [
				{ text: "Tables", link: "/essentials/tables" },
				{ text: "Columns", link: "/essentials/dimension-metrics" },
				{ text: "Filters", link: "/essentials/filters" },
				{ text: "Expressions", link: "/essentials/expressions" },
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
