import {
	DECK_PLACEHOLDER_FRAMING,
	DECK_PLACEHOLDER_FRAMING_ALT,
	DECK_PLACEHOLDER_MAINTENANCE,
	DECK_PLACEHOLDER_MAINTENANCE_ALT,
	DECK_PLACEHOLDER_MATERIALS,
	DECK_PLACEHOLDER_MATERIALS_ALT,
	DECK_PLACEHOLDER_MISTAKES,
	DECK_PLACEHOLDER_MISTAKES_ALT,
	DECK_PLACEHOLDER_POOL,
	DECK_PLACEHOLDER_POOL_ALT,
	DECK_PLACEHOLDER_TIMBER,
	DECK_PLACEHOLDER_TIMBER_ALT,
} from './placeholders';

export type DeckGuideCard = {
	href: string;
	title: string;
	description: string;
	image: string;
	alt: string;
};

export const deckHomepageGuides: DeckGuideCard[] = [
	{
		href: '/decking-cost-melbourne/',
		title: 'Decking cost in Melbourne',
		description: 'What actually moves a deck quote — size, height, access, subframe and finish — and why two quotes can be miles apart.',
		image: DECK_PLACEHOLDER_FRAMING,
		alt: DECK_PLACEHOLDER_FRAMING_ALT,
	},
	{
		href: '/timber-decking-cost/',
		title: 'What drives timber decking cost',
		description: 'Species, board profile, fixings and finishing — and why the cheapest timber rarely works out cheapest over the life of the deck.',
		image: DECK_PLACEHOLDER_TIMBER,
		alt: DECK_PLACEHOLDER_TIMBER_ALT,
	},
	{
		href: '/decking-materials/',
		title: 'Decking materials compared',
		description: 'Merbau, spotted gum, blackbutt, treated pine framing and composite — how each behaves in Melbourne conditions.',
		image: DECK_PLACEHOLDER_MATERIALS,
		alt: DECK_PLACEHOLDER_MATERIALS_ALT,
	},
	{
		href: '/pool-decking-cost/',
		title: 'Pool decking cost',
		description: 'Wet-area detailing, slip, drainage, coping transitions and access panels — and why pool decks cost more than a simple alfresco.',
		image: DECK_PLACEHOLDER_POOL,
		alt: DECK_PLACEHOLDER_POOL_ALT,
	},
	{
		href: '/decking-mistakes/',
		title: 'Common deck mistakes',
		description: 'Poor ventilation, weak subframes, wrong fixings and decks built too low — the errors that turn a cheap deck into an expensive repair.',
		image: DECK_PLACEHOLDER_MISTAKES,
		alt: DECK_PLACEHOLDER_MISTAKES_ALT,
	},
	{
		href: '/timber-decking-cost/#maintenance',
		title: 'Finishing and maintenance',
		description: 'Oiling, re-coating and the upkeep that decides how a timber deck looks and lasts after the first few summers.',
		image: DECK_PLACEHOLDER_MAINTENANCE,
		alt: DECK_PLACEHOLDER_MAINTENANCE_ALT,
	},
];
