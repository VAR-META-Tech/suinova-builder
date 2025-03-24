'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerGlobalContext = _interopDefault(require('@plasmicapp/host/registerGlobalContext'));
var React = require('react');
var React__default = _interopDefault(React);
var commerce = require('@plasmicpkgs/commerce');
var Cookies = _interopDefault(require('js-cookie'));

var categories = [
	{
		id: "id::270412710052",
		name: "New Arrivals",
		slug: "clothes",
		path: "/clothes",
		isEmpty: false,
		products: [
			"id::5447323812004",
			"id::5447324270756",
			"id::5447324729508",
			"id::5447325024420",
			"id::6621772644516"
		]
	},
	{
		id: "id::271211167908",
		name: "Featured",
		slug: "featured",
		path: "/featured",
		isEmpty: false,
		products: [
			"id::5447323156644",
			"id::5447323812004",
			"id::6621772644516"
		]
	}
];
var products = [
	{
		id: "id::5447322697892",
		name: "Special Edition T-Shirt",
		vendor: "ACME",
		path: "/conf-shirt",
		slug: "conf-shirt",
		price: {
			value: 50,
			currencyCode: "USD"
		},
		images: [
			{
				url: "https://static1.plasmic.app/commerce/conf-shirt-0.png",
				altText: null,
				width: 958,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/conf-shirt-1.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/conf-shirt-2.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/conf-shirt-3.png",
				altText: null,
				width: 1000,
				height: 1000
			}
		],
		variants: [
			{
				id: "id::40047332688036",
				name: "Black / S",
				sku: "",
				price: 200,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40047332688036",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40047332688036",
						displayName: "size",
						values: [
							{
								label: "S"
							}
						]
					}
				]
			},
			{
				id: "id::40009056387236",
				name: "Black / M",
				sku: "",
				price: 200,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40009056387236",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40009056387236",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					}
				]
			},
			{
				id: "id::40064229212324",
				name: "Black / L",
				sku: "",
				price: 200,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40064229212324",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40064229212324",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					}
				]
			},
			{
				id: "id::40073451602084",
				name: "Black / XL",
				sku: "",
				price: 50,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40073451602084",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40073451602084",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					}
				]
			},
			{
				id: "id::40073450061988",
				name: "Black / XXL",
				sku: "",
				price: 50,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40073450061988",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40073450061988",
						displayName: "size",
						values: [
							{
								label: "XXL"
							}
						]
					}
				]
			}
		],
		options: [
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940501311652",
				displayName: "color",
				values: [
					{
						label: "Black",
						hexColors: [
							"#000000"
						]
					}
				]
			},
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940501278884",
				displayName: "size",
				values: [
					{
						label: "S"
					},
					{
						label: "M"
					},
					{
						label: "L"
					},
					{
						label: "XL"
					},
					{
						label: "XXL"
					}
				]
			}
		],
		description: "Show off your love for Next.js and Vercel with this unique, limited edition t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made! All proceeds will be donated to charity.",
		descriptionHtml: "<p><meta charset=\"utf-8\"><span>Show off your love for Next.js and Vercel with this unique, </span><strong>limited edition</strong><span> t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made! </span><strong>All proceeds will be donated to charity.</strong></p>"
	},
	{
		id: "id::5447323156644",
		name: "Quarter Zip",
		vendor: "ACME",
		path: "/quarter-zip",
		slug: "quarter-zip",
		price: {
			value: 90,
			currencyCode: "USD"
		},
		images: [
			{
				url: "https://static1.plasmic.app/commerce/quarter-zip-0.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/quarter-zip-1.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/quarter-zip-2.png",
				altText: null,
				width: 1000,
				height: 1000
			}
		],
		variants: [
			{
				id: "id::40065999569060",
				name: "Black / S",
				sku: "",
				price: 90,
				listPrice: 20,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065999569060",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065999569060",
						displayName: "size",
						values: [
							{
								label: "S"
							}
						]
					}
				]
			},
			{
				id: "id::40008984756388",
				name: "Black / M",
				sku: "",
				price: 90,
				listPrice: 20,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40008984756388",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40008984756388",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					}
				]
			},
			{
				id: "id::40065122828452",
				name: "Black / L",
				sku: "",
				price: 90,
				listPrice: 20,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065122828452",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065122828452",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					}
				]
			},
			{
				id: "id::40065123713188",
				name: "Black / XL",
				sku: "",
				price: 90,
				listPrice: 20,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065123713188",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065123713188",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					}
				]
			},
			{
				id: "id::40065125286052",
				name: "Black / XXL",
				sku: "",
				price: 90,
				listPrice: 20,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065125286052",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40065125286052",
						displayName: "size",
						values: [
							{
								label: "XXL"
							}
						]
					}
				]
			}
		],
		options: [
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940501835940",
				displayName: "color",
				values: [
					{
						label: "Black",
						hexColors: [
							"#000000"
						]
					}
				]
			},
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940501803172",
				displayName: "size",
				values: [
					{
						label: "S"
					},
					{
						label: "M"
					},
					{
						label: "L"
					},
					{
						label: "XL"
					},
					{
						label: "XXL"
					}
				]
			}
		],
		description: "Show off your love for Next.js and Vercel with this unique, limited edition quarter zip. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made! All proceeds will be donated to charity.",
		descriptionHtml: "<p>Show off your love for Next.js and Vercel with this unique, <strong>limited edition</strong> quarter zip. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made! <strong>All proceeds will be donated to charity.</strong></p>"
	},
	{
		id: "id::5447323812004",
		name: "Sticker",
		vendor: "ACME",
		path: "/sticker",
		slug: "sticker",
		price: {
			value: 0,
			currencyCode: "USD"
		},
		images: [
			{
				url: "https://static1.plasmic.app/commerce/sticker-0.png",
				altText: null,
				width: 900,
				height: 900
			}
		],
		variants: [
			{
				id: "id::40008892580004",
				name: "Gradient",
				sku: "",
				price: 0,
				listPrice: 60,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40008892580004",
						displayName: "color",
						values: [
							{
								label: "Gradient"
							}
						]
					}
				]
			}
		],
		options: [
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940502524068",
				displayName: "color",
				values: [
					{
						label: "Gradient"
					}
				]
			}
		],
		description: "Wafer cupcake candy macaroon bonbon candy canes cheesecake candy. Donut chupa chups sesame snaps candy chocolate cake chocolate cake danish. Tart cotton candy gummies cotton candy sweet roll. Wafer pie chocolate cake. Caramels toffee gummies. Liquorice sweet oat cake chocolate candy canes toffee bear claw. Chocolate cupcake wafer. Halvah soufflé halvah. Dessert pastry toffee apple pie chocolate cake lemon drops. Tart carrot cake wafer halvah tiramisu fruitcake.",
		descriptionHtml: "<p><meta charset=\"utf-8\">Wafer cupcake candy macaroon bonbon candy canes cheesecake candy. Donut chupa chups sesame snaps candy chocolate cake chocolate cake danish. Tart cotton candy gummies cotton candy sweet roll. Wafer pie chocolate cake. Caramels toffee gummies. Liquorice sweet oat cake chocolate candy canes toffee bear claw. Chocolate cupcake wafer. Halvah soufflé halvah. Dessert pastry toffee apple pie chocolate cake lemon drops. Tart carrot cake wafer halvah tiramisu fruitcake.<br></p>"
	},
	{
		id: "id::5447324270756",
		name: "Bomber Jacket",
		vendor: "Next.js",
		path: "/bomber-jacket",
		slug: "bomber-jacket",
		price: {
			value: 635.99,
			currencyCode: "USD"
		},
		images: [
			{
				url: "https://static1.plasmic.app/commerce/bomber-jacket-0.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/bomber-jacket-1.png",
				altText: null,
				width: 1000,
				height: 1000
			}
		],
		variants: [
			{
				id: "id::40046243905700",
				name: "L / Black",
				sku: "",
				price: 635.99,
				listPrice: 5200,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046243905700",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046243905700",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046243938468",
				name: "L / DarkOliveGreen",
				sku: "",
				price: 635.99,
				listPrice: 5200,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046243938468",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046243938468",
						displayName: "color",
						values: [
							{
								label: "DarkOliveGreen",
								hexColors: [
									"#556B2F"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046243971236",
				name: "XL / Black",
				sku: "",
				price: 635.99,
				listPrice: 5200,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046243971236",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046243971236",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046244004004",
				name: "XL / DarkOliveGreen",
				sku: "",
				price: 635.99,
				listPrice: 5200,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046244004004",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046244004004",
						displayName: "color",
						values: [
							{
								label: "DarkOliveGreen",
								hexColors: [
									"#556B2F"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046244036772",
				name: "XXL / Black",
				sku: "",
				price: 635.99,
				listPrice: 5200,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046244036772",
						displayName: "size",
						values: [
							{
								label: "XXL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046244036772",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046244069540",
				name: "XXL / DarkOliveGreen",
				sku: "",
				price: 635.99,
				listPrice: 5200,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046244069540",
						displayName: "size",
						values: [
							{
								label: "XXL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046244069540",
						displayName: "color",
						values: [
							{
								label: "DarkOliveGreen",
								hexColors: [
									"#556B2F"
								]
							}
						]
					}
				]
			}
		],
		options: [
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940503015588",
				displayName: "size",
				values: [
					{
						label: "L"
					},
					{
						label: "XL"
					},
					{
						label: "XXL"
					}
				]
			},
			{
				__typename: "MultipleChoiceOption",
				id: "id::8655769764004",
				displayName: "color",
				values: [
					{
						label: "Black",
						hexColors: [
							"#000000"
						]
					},
					{
						label: "DarkOliveGreen",
						hexColors: [
							"#556B2F"
						]
					}
				]
			}
		],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.",
		descriptionHtml: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</p>"
	},
	{
		id: "id::5447324729508",
		name: "Short Sleeve T-Shirt",
		vendor: "Next.js",
		path: "/short-sleeve-t-shirt",
		slug: "short-sleeve-t-shirt",
		price: {
			value: 35,
			currencyCode: "USD"
		},
		images: [
			{
				url: "https://static1.plasmic.app/commerce/short-sleeve-t-shirt-0.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/short-sleeve-t-shirt-1.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/short-sleeve-t-shirt-2.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/short-sleeve-t-shirt-3.png",
				altText: null,
				width: 1000,
				height: 1000
			}
		],
		variants: [
			{
				id: "id::35180690669732",
				name: "M / gray",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::35180690669732",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::35180690669732",
						displayName: "color",
						values: [
							{
								label: "gray",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::35180690702500",
				name: "L / gray",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::35180690702500",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::35180690702500",
						displayName: "color",
						values: [
							{
								label: "gray",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::35180690735268",
				name: "XL / gray",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::35180690735268",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::35180690735268",
						displayName: "color",
						values: [
							{
								label: "gray",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046203437220",
				name: "M / beige",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046203437220",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046203437220",
						displayName: "color",
						values: [
							{
								label: "beige",
								hexColors: [
									"#F5F5DC"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046207369380",
				name: "L / beige",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046207369380",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046207369380",
						displayName: "color",
						values: [
							{
								label: "beige",
								hexColors: [
									"#F5F5DC"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046207729828",
				name: "XL / beige",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046207729828",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046207729828",
						displayName: "color",
						values: [
							{
								label: "beige",
								hexColors: [
									"#F5F5DC"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046212612260",
				name: "M / white",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046212612260",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046212612260",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046212907172",
				name: "L / white",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046212907172",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046212907172",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046213300388",
				name: "XL / white",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046213300388",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046213300388",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046214742180",
				name: "M / DarkTurquoise",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046214742180",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046214742180",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046218346660",
				name: "L / DarkTurquoise",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046218346660",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046218346660",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046220214436",
				name: "XL / DarkTurquoise",
				sku: "",
				price: 35,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046220214436",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046220214436",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			}
		],
		options: [
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940503474340",
				displayName: "size",
				values: [
					{
						label: "M"
					},
					{
						label: "L"
					},
					{
						label: "XL"
					}
				]
			},
			{
				__typename: "MultipleChoiceOption",
				id: "id::8655761178788",
				displayName: "color",
				values: [
					{
						label: "gray",
						hexColors: [
							"#808080"
						]
					},
					{
						label: "beige",
						hexColors: [
							"#F5F5DC"
						]
					},
					{
						label: "white",
						hexColors: [
							"#FFFFFF"
						]
					},
					{
						label: "DarkTurquoise",
						hexColors: [
							"#00CED1"
						]
					}
				]
			}
		],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.",
		descriptionHtml: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</p>"
	},
	{
		id: "id::5447325024420",
		name: "New Short Sleeve T-Shirt",
		vendor: "Next.js",
		path: "/new-short-sleeve-t-shirt",
		slug: "new-short-sleeve-t-shirt",
		price: {
			value: 25,
			currencyCode: "USD"
		},
		images: [
			{
				url: "https://static1.plasmic.app/commerce/new-short-sleeve-t-shirt-0.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/new-short-sleeve-t-shirt-1.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/new-short-sleeve-t-shirt-2.png",
				altText: null,
				width: 1000,
				height: 1000
			},
			{
				url: "https://static1.plasmic.app/commerce/new-short-sleeve-t-shirt-3.png",
				altText: null,
				width: 1000,
				height: 1000
			}
		],
		variants: [
			{
				id: "id::40046230962340",
				name: "XS / white",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046230962340",
						displayName: "size",
						values: [
							{
								label: "XS"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046230962340",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046230995108",
				name: "XS / grey",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046230995108",
						displayName: "size",
						values: [
							{
								label: "XS"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046230995108",
						displayName: "color",
						values: [
							{
								label: "grey",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231027876",
				name: "XS / DarkTurquoise",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231027876",
						displayName: "size",
						values: [
							{
								label: "XS"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231027876",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231060644",
				name: "XS / LightSalmon",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231060644",
						displayName: "size",
						values: [
							{
								label: "XS"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231060644",
						displayName: "color",
						values: [
							{
								label: "LightSalmon",
								hexColors: [
									"#FFA07A"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231093412",
				name: "S / white",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231093412",
						displayName: "size",
						values: [
							{
								label: "S"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231093412",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231126180",
				name: "S / grey",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231126180",
						displayName: "size",
						values: [
							{
								label: "S"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231126180",
						displayName: "color",
						values: [
							{
								label: "grey",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231158948",
				name: "S / DarkTurquoise",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231158948",
						displayName: "size",
						values: [
							{
								label: "S"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231158948",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231191716",
				name: "S / LightSalmon",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231191716",
						displayName: "size",
						values: [
							{
								label: "S"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231191716",
						displayName: "color",
						values: [
							{
								label: "LightSalmon",
								hexColors: [
									"#FFA07A"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231224484",
				name: "M / white",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231224484",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231224484",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231257252",
				name: "M / grey",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231257252",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231257252",
						displayName: "color",
						values: [
							{
								label: "grey",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231290020",
				name: "M / DarkTurquoise",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231290020",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231290020",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231322788",
				name: "M / LightSalmon",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231322788",
						displayName: "size",
						values: [
							{
								label: "M"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231322788",
						displayName: "color",
						values: [
							{
								label: "LightSalmon",
								hexColors: [
									"#FFA07A"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231355556",
				name: "L / white",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231355556",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231355556",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231388324",
				name: "L / grey",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231388324",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231388324",
						displayName: "color",
						values: [
							{
								label: "grey",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231421092",
				name: "L / DarkTurquoise",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231421092",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231421092",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231453860",
				name: "L / LightSalmon",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231453860",
						displayName: "size",
						values: [
							{
								label: "L"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231453860",
						displayName: "color",
						values: [
							{
								label: "LightSalmon",
								hexColors: [
									"#FFA07A"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231486628",
				name: "XL / white",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231486628",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231486628",
						displayName: "color",
						values: [
							{
								label: "white",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231519396",
				name: "XL / grey",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231519396",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231519396",
						displayName: "color",
						values: [
							{
								label: "grey",
								hexColors: [
									"#808080"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231552164",
				name: "XL / DarkTurquoise",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231552164",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231552164",
						displayName: "color",
						values: [
							{
								label: "DarkTurquoise",
								hexColors: [
									"#00CED1"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40046231584932",
				name: "XL / LightSalmon",
				sku: "",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231584932",
						displayName: "size",
						values: [
							{
								label: "XL"
							}
						]
					},
					{
						__typename: "MultipleChoiceOption",
						id: "id::40046231584932",
						displayName: "color",
						values: [
							{
								label: "LightSalmon",
								hexColors: [
									"#FFA07A"
								]
							}
						]
					}
				]
			}
		],
		options: [
			{
				__typename: "MultipleChoiceOption",
				id: "id::6940503769252",
				displayName: "size",
				values: [
					{
						label: "XS"
					},
					{
						label: "S"
					},
					{
						label: "M"
					},
					{
						label: "L"
					},
					{
						label: "XL"
					}
				]
			},
			{
				__typename: "MultipleChoiceOption",
				id: "id::8655765471396",
				displayName: "color",
				values: [
					{
						label: "white",
						hexColors: [
							"#FFFFFF"
						]
					},
					{
						label: "grey",
						hexColors: [
							"#808080"
						]
					},
					{
						label: "DarkTurquoise",
						hexColors: [
							"#00CED1"
						]
					},
					{
						label: "LightSalmon",
						hexColors: [
							"#FFA07A"
						]
					}
				]
			}
		],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.",
		descriptionHtml: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.<br></p>"
	},
	{
		id: "id::6621772644516",
		name: "ACME Cup",
		vendor: "ACME",
		path: "/acme-cup",
		slug: "acme-cup",
		price: {
			value: 25,
			currencyCode: "USD"
		},
		images: [
			{
				url: "https://static1.plasmic.app/commerce/acme-cup-0.png",
				altText: null,
				width: 2048,
				height: 2048
			},
			{
				url: "https://static1.plasmic.app/commerce/acme-cup-1.png",
				altText: null,
				width: 2048,
				height: 2048
			}
		],
		variants: [
			{
				id: "id::40064679805092",
				name: "White",
				sku: "200",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: true,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40064679805092",
						displayName: "color",
						values: [
							{
								label: "White",
								hexColors: [
									"#FFFFFF"
								]
							}
						]
					}
				]
			},
			{
				id: "id::40064679837860",
				name: "Black",
				sku: "201",
				price: 25,
				listPrice: null,
				requiresShipping: true,
				availableForSale: false,
				options: [
					{
						__typename: "MultipleChoiceOption",
						id: "id::40064679837860",
						displayName: "color",
						values: [
							{
								label: "Black",
								hexColors: [
									"#000000"
								]
							}
						]
					}
				]
			}
		],
		options: [
			{
				__typename: "MultipleChoiceOption",
				id: "id::8505918849188",
				displayName: "color",
				values: [
					{
						label: "White",
						hexColors: [
							"#FFFFFF"
						]
					},
					{
						label: "Black",
						hexColors: [
							"#000000"
						]
					}
				]
			}
		],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.",
		descriptionHtml: "<meta charset=\"utf-8\"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.</span>"
	}
];
var data = {
	categories: categories,
	products: products
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var fetcher = /*#__PURE__*/function () {
  var _ref = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var res, _yield$res$json, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          console.log('FETCHER');
          _context.next = 3;
          return fetch('./data.json');
        case 3:
          res = _context.sent;
          if (!res.ok) {
            _context.next = 10;
            break;
          }
          _context.next = 7;
          return res.json();
        case 7:
          _yield$res$json = _context.sent;
          data = _yield$res$json.data;
          return _context.abrupt("return", data);
        case 10:
          throw res;
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetcher() {
    return _ref.apply(this, arguments);
  };
}();

var LOCAL_CART_OBJ = "localCartObj";
var LOCAL_CART_ID = "localCartId";

var createCart = function createCart() {
  var cart = {
    id: "",
    createdAt: "",
    currency: {
      code: "USD"
    },
    taxesIncluded: false,
    lineItems: [],
    lineItemsSubtotalPrice: 0,
    subtotalPrice: 0,
    totalPrice: 0
  };
  var cartId = Date.now().toString();
  Cookies.set(LOCAL_CART_ID, cartId);
  Cookies.set(LOCAL_CART_OBJ, JSON.stringify({
    id: cartId,
    cart: cart
  }));
  return cart;
};
var getCart = function getCart(cartId) {
  var _cartId;
  cartId = (_cartId = cartId) != null ? _cartId : Cookies.get(LOCAL_CART_ID);
  var cartStr = Cookies.get(LOCAL_CART_OBJ);
  var cart = cartStr ? JSON.parse(cartStr) : undefined;
  if (!cart || cart.id !== cartId) {
    return createCart();
  } else {
    return cart.cart;
  }
};
var cartUpdate = function cartUpdate(newCart) {
  Cookies.set(LOCAL_CART_OBJ, JSON.stringify({
    id: Cookies.get(LOCAL_CART_ID),
    cart: newCart
  }));
  return newCart;
};

var handler = {
  fetchOptions: {
    query: "use-cart"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, fetch;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, fetch = _ref.fetch;
            return _context.abrupt("return", getCart(input.cartId));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      var response = useData({
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input == null ? void 0 : input.swrOptions)
      });
      return React__default.useMemo(function () {
        return Object.create(response, {
          isEmpty: {
            get: function get() {
              var _response$data$lineIt, _response$data;
              return ((_response$data$lineIt = (_response$data = response.data) == null ? void 0 : _response$data.lineItems.length) != null ? _response$data$lineIt : 0) <= 0;
            },
            enumerable: true
          }
        });
      }, [response]);
    };
  }
};

var handler$1 = {
  fetchOptions: {
    query: "use-add-item"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _item$quantity;
      var item, fetch, lineItem, cart, _iterator, _step, product, variant, _item$quantity2, currentLineItem;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            item = _ref.input, fetch = _ref.fetch;
            if (!(item.quantity && (!Number.isInteger(item.quantity) || item.quantity < 1))) {
              _context.next = 3;
              break;
            }
            throw new commerce.CommerceError({
              message: "The item quantity has to be a valid integer greater than 0"
            });
          case 3:
            lineItem = {
              variantId: item.variantId,
              quantity: (_item$quantity = item.quantity) != null ? _item$quantity : 1
            };
            cart = getCart();
            for (_iterator = _createForOfIteratorHelperLoose(data.products); !(_step = _iterator()).done;) {
              product = _step.value;
              variant = product.variants.find(function (variant) {
                return variant.id === item.variantId;
              });
              if (variant) {
                cart.totalPrice += variant.price * ((_item$quantity2 = item.quantity) != null ? _item$quantity2 : 1);
                cart.currency.code = product.price.currencyCode;
                currentLineItem = cart.lineItems.find(function (item) {
                  return item.variantId === lineItem.variantId;
                });
                if (!currentLineItem) {
                  cart.lineItems.push(lineItem);
                } else {
                  currentLineItem.quantity += lineItem.quantity;
                }
              }
            }
            return _context.abrupt("return", cartUpdate(cart));
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var fetch = _ref2.fetch;
    return function () {
      var _useCart = commerce.useCart(),
        mutate = _useCart.mutate;
      return React.useCallback(/*#__PURE__*/function () {
        var _addItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
          var data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch({
                  input: input
                });
              case 2:
                data = _context2.sent;
                _context2.next = 5;
                return mutate(data, false);
              case 5:
                return _context2.abrupt("return", data);
              case 6:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function addItem(_x) {
          return _addItem.apply(this, arguments);
        }
        return addItem;
      }(), [fetch, mutate]);
    };
  }
};

var handler$2 = {
  fetchOptions: {
    query: ''
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    return function () {
      return /*#__PURE__*/function () {
        var _addItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", {});
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function addItem() {
          return _addItem.apply(this, arguments);
        }
        return addItem;
      }();
    };
  }
};

var handler$3 = {
  fetchOptions: {
    query: ''
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    return function () {
      return /*#__PURE__*/function () {
        var _removeItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(input) {
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", {});
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function removeItem(_x) {
          return _removeItem.apply(this, arguments);
        }
        return removeItem;
      }();
    };
  }
};

var sortProduct = function sortProduct(a, b, sortKey) {
  switch (sortKey) {
    case "price-asc":
      return a.price.value < b.price.value ? -1 : 1;
    case "price-desc":
      return a.price.value < b.price.value ? 1 : -1;
    case "trending-desc":
      return a.id.localeCompare(b.id);
    case "latest-desc":
      return a.id.localeCompare(b.id) * -1;
    default:
      return 0;
  }
};

var handler$4 = {
  fetchOptions: {
    query: "use-search"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, fetch, search, categoryId, brandId, sort, count, products, category;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, fetch = _ref.fetch;
            search = input.search, categoryId = input.categoryId, brandId = input.brandId, sort = input.sort, count = input.count;
            products = data.products;
            if (categoryId) {
              category = data.categories.find(function (category) {
                return category.id === categoryId;
              });
              products = data.products.filter(function (product) {
                var _category$products;
                return category == null || (_category$products = category.products) == null ? void 0 : _category$products.includes(product.id);
              });
            }
            if (brandId) {
              products = products.filter(function (product) {
                return product.vendor.replace(/\s+/g, "-").toLowerCase() === ("" + brandId).toLowerCase();
              });
            }
            if (search) {
              products = products.filter(function (product) {
                return product.name.toLowerCase().includes(("" + search).toLowerCase()) || product.slug.toLowerCase().includes(("" + search).toLowerCase());
              });
            }
            if (sort) {
              products = products.sort(function (a, b) {
                return sortProduct(a, b, sort);
              });
            }
            return _context.abrupt("return", {
              products: products.slice(0, count),
              found: products.length > 0
            });
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      if (input === void 0) {
        input = {};
      }
      return useData({
        input: [["search", input.search], ["prefixSearch", input.prefixSearch], ["categoryId", input.categoryId], ["brandId", input.brandId], ["sort", input.sort], ["locale", input.locale], ["count", input.count]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input.swrOptions)
      });
    };
  }
};

var handler$5 = {
  fetchOptions: {
    query: "use-product"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _data$products$find;
      var input, fetch, id;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, fetch = _ref.fetch;
            id = input.id;
            return _context.abrupt("return", (_data$products$find = data.products.find(function (product) {
              return [product.id, product.slug].includes(id);
            })) != null ? _data$products$find : null);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      if (input === void 0) {
        input = {};
      }
      return useData({
        input: [["id", input.id]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input.swrOptions)
      });
    };
  }
};

var handler$6 = {
  fetchOptions: {
    query: "use-categories"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var input, fetch, categoryId, category;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input, fetch = _ref.fetch;
            categoryId = input.categoryId;
            if (categoryId) {
              _context.next = 4;
              break;
            }
            return _context.abrupt("return", data.categories);
          case 4:
            category = data.categories.find(function (category) {
              return category.id === categoryId;
            });
            return _context.abrupt("return", category ? [category] : []);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      var response = useData({
        input: [["categoryId", input == null ? void 0 : input.categoryId]],
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input == null ? void 0 : input.swrOptions)
      });
      return React__default.useMemo(function () {
        return Object.create(response, {
          isEmpty: {
            get: function get() {
              var _response$data$length, _response$data;
              return ((_response$data$length = (_response$data = response.data) == null ? void 0 : _response$data.length) != null ? _response$data$length : 0) <= 0;
            },
            enumerable: true
          }
        });
      }, [response]);
    };
  }
};

var handler$7 = {
  fetchOptions: {
    query: "use-brands"
  },
  fetcher: function fetcher(_ref) {
    return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var vendorsStrings;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            vendorsStrings = data.products.map(function (product) {
              return product.vendor;
            });
            return _context.abrupt("return", Array.from(new Set(vendorsStrings).values()).map(function (v) {
              var id = v.replace(/\s+/g, "-").toLowerCase();
              return {
                entityId: id,
                name: v,
                path: "brands/" + id
              };
            }));
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  useHook: function useHook(_ref2) {
    var useData = _ref2.useData;
    return function (input) {
      var response = useData({
        swrOptions: _extends({
          revalidateOnFocus: false
        }, input == null ? void 0 : input.swrOptions)
      });
      return React__default.useMemo(function () {
        return Object.create(response, {
          isEmpty: {
            get: function get() {
              var _response$data$length, _response$data;
              return ((_response$data$length = (_response$data = response.data) == null ? void 0 : _response$data.length) != null ? _response$data$length : 0) <= 0;
            },
            enumerable: true
          }
        });
      }, [response]);
    };
  }
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/local/src
  Changes: Removed authentication, customer and wishlist hooks
*/
var localProvider = {
  locale: 'en-us',
  cartCookie: LOCAL_CART_ID,
  fetcher: fetcher,
  cart: {
    useCart: handler,
    useAddItem: handler$1,
    useUpdateItem: handler$2,
    useRemoveItem: handler$3
  },
  products: {
    useSearch: handler$4,
    useProduct: handler$5
  },
  site: {
    useCategories: handler$6,
    useBrands: handler$7
  }
};

/*
  Forked from https://github.com/vercel/commerce/tree/main/packages/local/src
  Changes: Add export data
*/
var CommerceProvider = /*#__PURE__*/commerce.getCommerceProvider(localProvider);
var useCommerce = function useCommerce() {
  return commerce.useCommerce();
};

var commerceProviderMeta = {
  name: "plasmic-commerce-local-provider",
  displayName: "Local Provider",
  props: {},
  importPath: "@plasmicpkgs/commerce-local",
  importName: "CommerceProviderComponent"
};
function CommerceProviderComponent(props) {
  return React__default.createElement(CommerceProvider, null, props.children);
}
function registerCommerceProvider(loader, customCommerceProviderMeta) {
  var doRegisterComponent = function doRegisterComponent() {
    return loader ? loader.registerGlobalContext.apply(loader, arguments) : registerGlobalContext.apply(void 0, arguments);
  };
  doRegisterComponent(CommerceProviderComponent, customCommerceProviderMeta != null ? customCommerceProviderMeta : commerceProviderMeta);
}

function registerAll(loader) {
  registerCommerceProvider(loader);
}

exports.CommerceProvider = CommerceProvider;
exports.data = data;
exports.localProvider = localProvider;
exports.registerAll = registerAll;
exports.registerCommerceProvider = registerCommerceProvider;
exports.useCommerce = useCommerce;
//# sourceMappingURL=commerce-local.cjs.development.js.map
