export function getTagSlug(tag: string): string {
	return tag.trim().toLowerCase().replace(/\s+/g, "-");
}
