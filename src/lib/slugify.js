function slugify(...items) {
	return items.join("-").replaceAll(" ", "-");
}

export { slugify };
