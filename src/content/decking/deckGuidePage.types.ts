/**
 * Structured content for deck cost guide pages (see DeckGuidePage.astro).
 * HTML strings are authored in repo content files only (trusted).
 */

export type RelatedDeckGuidesConfig =
	| { mode: 'exclude'; excludeHref: string }
	| {
			mode: 'override';
			guides: readonly { href: string; title: string; description: string }[];
	  };

export type DeckGuideSection = {
	id: string;
	title: string;
	variant?: 'default' | 'alt';
	image?: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	};
	leads?: string[];
	bullets?: string[];
	factors?: { label: string; detailHtml: string }[];
};

export type DeckMobbsSection = {
	id: string;
	title: string;
	variant?: 'default' | 'alt';
	paragraphs: string[];
	bookCta: { href: string; label: string };
};

export type DeckFaq = {
	question: string;
	answer: string;
	answerJsonLd?: string;
};

export type DeckFinalCta = {
	sectionId?: string;
	headingId: string;
	bridge?: string;
	title: string;
	description?: string;
	ctaHref: string;
	ctaLabel: string;
};

export type DeckGuidePageContent = {
	metaTitle: string;
	metaDescription: string;
	/** Pathname for canonical URL, e.g. `/decking-cost-melbourne/` */
	canonical: string;
	eyebrow: string;
	h1: string;
	intro: string;
	secondaryLinkText: string;
	secondaryLinkHref: string;
	heroImage: string;
	heroAlt: string;
	heroImageWidth?: number;
	heroImageHeight?: number;
	sections: DeckGuideSection[];
	/** Optional appended mistakes block; heading defaults to "Common deck mistakes". */
	commonMistakes?: string[];
	commonMistakesHeading?: string;
	relatedGuides: RelatedDeckGuidesConfig;
	faqs?: DeckFaq[];
	finalCta: DeckFinalCta;
	mobbsSection: DeckMobbsSection;
};
