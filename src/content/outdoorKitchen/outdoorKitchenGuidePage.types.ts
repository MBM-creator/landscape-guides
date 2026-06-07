/**
 * Structured content for outdoor kitchen guide pages (see OutdoorKitchenGuidePage.astro).
 * HTML strings are authored in repo content files only (trusted).
 */

export type RelatedOutdoorKitchenGuidesConfig =
	| { mode: 'exclude'; excludeHref: string }
	| {
			mode: 'override';
			guides: readonly { href: string; title: string; description: string }[];
	  };

export type OutdoorKitchenGuideSection = {
	id: string;
	title: string;
	variant?: 'default' | 'alt';
	leads?: string[];
	bullets?: string[];
	factors?: { label: string; detailHtml: string }[];
};

export type OutdoorKitchenMobbsSection = {
	id: string;
	title: string;
	variant?: 'default' | 'alt';
	paragraphs: string[];
	bookCta: { href: string; label: string };
};

export type OutdoorKitchenFaq = {
	question: string;
	answer: string;
	answerJsonLd?: string;
};

export type OutdoorKitchenFinalCta = {
	sectionId?: string;
	headingId: string;
	bridge?: string;
	title: string;
	description?: string;
	ctaHref: string;
	ctaLabel: string;
};

export type OutdoorKitchenGuidePageContent = {
	metaTitle: string;
	metaDescription: string;
	/** Pathname for canonical URL, e.g. `/outdoor-kitchen-cost-melbourne-sydney/` */
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
	sections: OutdoorKitchenGuideSection[];
	commonMistakes?: string[];
	relatedGuides: RelatedOutdoorKitchenGuidesConfig;
	faqs?: OutdoorKitchenFaq[];
	finalCta: OutdoorKitchenFinalCta;
	mobbsSection: OutdoorKitchenMobbsSection;
};
