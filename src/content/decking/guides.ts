import {
	DECK_PLACEHOLDER_FRAMING,
	DECK_PLACEHOLDER_MISTAKES,
	DECK_PLACEHOLDER_POOL,
	DECK_PLACEHOLDER_STAIRS,
	DECK_PLACEHOLDER_TIMBER,
} from './placeholders';

export type DeckGuideCard = {
	href: string;
	title: string;
	description: string;
	image: string;
	alt: string;
};

// TODO(images): card images are paving placeholders — replace with dedicated deck photos.
export const deckHomepageGuides: DeckGuideCard[] = [
	{
		href: '/decking-cost-melbourne/',
		title: 'Decking cost in Melbourne',
		description: 'What actually moves a deck quote — size, height, access, subframe and finish — and why two quotes can be miles apart.',
		image: DECK_PLACEHOLDER_FRAMING,
		alt: 'Placeholder: deck framing detail (photo to follow)',
	},
	{
		href: '/timber-decking-cost/',
		title: 'What drives timber decking cost',
		description: 'Species, board profile, fixings and finishing — and why the cheapest timber rarely works out cheapest over the life of the deck.',
		image: DECK_PLACEHOLDER_TIMBER,
		alt: 'Placeholder: timber decking board close-up (photo to follow)',
	},
	{
		href: '/decking-materials/',
		title: 'Decking materials compared',
		description: 'Merbau, spotted gum, blackbutt, treated pine framing and composite — how each behaves in Melbourne conditions.',
		image: DECK_PLACEHOLDER_TIMBER,
		alt: 'Placeholder: decking timber samples (photo to follow)',
	},
	{
		href: '/pool-decking-cost/',
		title: 'Pool decking cost',
		description: 'Wet-area detailing, slip, drainage, coping transitions and access panels — and why pool decks cost more than a simple alfresco.',
		image: DECK_PLACEHOLDER_POOL,
		alt: 'Placeholder: timber deck beside a pool (photo to follow)',
	},
	{
		href: '/decking-mistakes/',
		title: 'Common deck mistakes',
		description: 'Poor ventilation, weak subframes, wrong fixings and decks built too low — the errors that turn a cheap deck into an expensive repair.',
		image: DECK_PLACEHOLDER_MISTAKES,
		alt: 'Placeholder: weathered deck detail (photo to follow)',
	},
	{
		href: '/timber-decking-cost/#maintenance',
		title: 'Finishing and maintenance',
		description: 'Oiling, re-coating and the upkeep that decides how a timber deck looks and lasts after the first few summers.',
		image: DECK_PLACEHOLDER_STAIRS,
		alt: 'Placeholder: deck stairs and balustrade (photo to follow)',
	},
];
