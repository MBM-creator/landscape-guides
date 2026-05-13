/**
 * Structured content for paving style SEO pages (see PavingStylePage.astro).
 * HTML strings are authored in repo content files only (trusted).
 */

export type RelatedGuidesConfig =
	| { mode: 'exclude'; excludeHref: string }
	| {
			mode: 'override';
			guides: readonly { href: string; title: string; description: string }[];
	  };

export type PavingStyleCostRange = {
	title: string;
	paragraphs: string[];
	ctaText: string;
	ctaHref: string;
};

export type PavingStyleStandardSection = {
	kind?: 'standard';
	id: string;
	title: string;
	variant?: 'default' | 'alt';
	/** Rendered as `<p class="section__lead section__lead--tight">` with `set:html` */
	leads?: string[];
	bullets?: string[];
	compareLink?: { href: string; text: string };
	factors?: { label: string; detailHtml: string }[];
	costRange?: PavingStyleCostRange;
	/** Primary button below factors / cost block when present */
	inlineCta?: { label: string; href: string };
};

export type PavingStyleMobbsSection = {
	id: string;
	title: string;
	/** Use `alt` for white band (most style pages); omit or `default` for grey band */
	variant?: 'default' | 'alt';
	paragraphs: string[];
	bookCta: { href: string; label: string };
};

export type PavingStyleCompareSection = {
	id: string;
	title: string;
	variant?: 'default' | 'alt';
	leads: string[];
};

export type PavingStyleFaq = {
	question: string;
	/** Visible FAQ answer (HTML allowed) */
	answer: string;
	/** Plain text for JSON-LD when `answer` contains markup */
	answerJsonLd?: string;
};

export type PavingStyleFinalCta = {
	sectionId?: string;
	headingId: string;
	/** Optional lead-in before the CTA heading (plain text) */
	bridge?: string;
	title: string;
	description?: string;
	ctaHref: string;
	ctaLabel: string;
};

export type PavingStylePageContent = {
	slug: string;
	/** Reserved for parity with spec; document title uses `metaTitle` */
	title: string;
	metaTitle: string;
	metaDescription: string;
	/** Pathname for canonical URL, e.g. `/crazy-paving-melbourne/` */
	canonical: string;
	eyebrow: string;
	h1: string;
	/** Hero intro (single paragraph HTML) */
	intro: string;
	primaryCtaText: string;
	primaryCtaHref: string;
	secondaryLinkText: string;
	secondaryLinkHref: string;
	heroImage: string;
	heroAlt: string;
	heroImageWidth?: number;
	heroImageHeight?: number;
	/** Optional; set `high` for LCP hero images */
	heroFetchPriority?: 'high' | 'low' | 'auto';
	sections: PavingStyleStandardSection[];
	prosConsIntro?: string;
	pros: string[];
	cons: string[];
	commonMistakes: string[];
	/** Stretcher page shows related guides before FAQ */
	relatedGuidesPosition?: 'before-faq' | 'after-faq';
	relatedGuides: RelatedGuidesConfig;
	faqs: PavingStyleFaq[];
	finalCta: PavingStyleFinalCta;
	/** Stretcher: “Stretcher bond vs herringbone” between mistakes and mobbs */
	compareSection?: PavingStyleCompareSection;
	mobbsSection: PavingStyleMobbsSection;
};
