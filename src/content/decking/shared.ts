import { DECK_CTA_URL } from '../../config/sites';
import type { DeckFinalCta, DeckMobbsSection } from './deckGuidePage.types';

export const deckBackLink = {
	secondaryLinkText: 'Back to the Deck Cost Guide',
	secondaryLinkHref: '/',
};

export const deckMobbsSection: DeckMobbsSection = {
	id: 'mobbs',
	title: 'When it helps to bring in Made By Mobbs',
	variant: 'alt',
	paragraphs: [
		'Made By Mobbs Landscapes designs and builds outdoor spaces in Melbourne — paving, planting, structure and the decks that tie a backyard together.',
		'A deck lasts when the parts you cannot see are right: footings that suit the ground, a subframe sized and spaced properly, airflow underneath, water that drains away rather than sitting on the frame, and fixings chosen for the timber. We lean toward natural timber and proper detailing because that is what holds up — composite has its place, but it does not fix a frame that was never built to last.',
		// TODO(cta): swap DECK_CTA_URL to the dedicated Made By Mobbs decking service page once it exists.
		'This page is a guide, not a quote. A firm price needs a look at your site — access, ground conditions, how high the deck sits, and how it meets the house, the garden and any pool.',
	],
	bookCta: {
		href: DECK_CTA_URL,
		label: 'Speak with Made By Mobbs Landscapes',
	},
};

export const deckFinalCta: DeckFinalCta = {
	sectionId: 'contact',
	headingId: 'final-cta-heading',
	bridge:
		'Footings, subframe, airflow and drainage decide whether a deck still feels solid in ten years — they are not details you sort out after the boards are down.',
	title: 'Planning a deck in Melbourne?',
	description:
		'Talk through structure, timber and detailing with a team that builds the deck as part of the whole backyard — not as a board count on top of a quick frame.',
	// TODO(cta): swap DECK_CTA_URL to the dedicated Made By Mobbs decking service page once it exists.
	ctaHref: DECK_CTA_URL,
	ctaLabel: 'Speak with Made By Mobbs Landscapes',
};
