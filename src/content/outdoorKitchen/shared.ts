import { OUTDOOR_KITCHEN_CTA_URL } from '../../config/sites';
import type { OutdoorKitchenFinalCta, OutdoorKitchenMobbsSection } from './outdoorKitchenGuidePage.types';

export const outdoorKitchenBackLink = {
	secondaryLinkText: 'Back to Outdoor Kitchen Guide',
	secondaryLinkHref: '/',
};

export const outdoorKitchenMobbsSection: OutdoorKitchenMobbsSection = {
	id: 'mobbs',
	title: 'When it helps to bring in Made By Mobbs',
	variant: 'alt',
	paragraphs: [
		'Made By Mobbs Landscapes designs and builds outdoor spaces in Melbourne — paving, planting, structure and the services that sit underneath.',
		'An outdoor kitchen works when bench levels, cover, drainage and appliance access are sorted before stone and cladding go on. That coordination is easier when one team is looking at the whole backyard, not just the BBQ cabinet.',
		'This page is a guide only: practical ranges and checklist thinking before you commit. Firm pricing needs a walk-through of access, existing structures, gas and power routes, and how you cook and store on site.',
	],
	bookCta: {
		href: OUTDOOR_KITCHEN_CTA_URL,
		label: 'Speak with Made By Mobbs Landscapes',
	},
};

export const outdoorKitchenFinalCta: OutdoorKitchenFinalCta = {
	sectionId: 'contact',
	headingId: 'final-cta-heading',
	bridge:
		'Gas lines, slab falls and cover height are not details you add after the bench is drawn — they decide whether the kitchen is usable in winter and safe in summer.',
	title: 'Planning an outdoor kitchen in Melbourne?',
	description:
		'Talk through layout, services and structure with a team that builds the paving and garden around the kitchen — not just the cabinet in isolation.',
	ctaHref: OUTDOOR_KITCHEN_CTA_URL,
	ctaLabel: 'Speak with Made By Mobbs Landscapes',
};
