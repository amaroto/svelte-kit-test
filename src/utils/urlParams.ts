export const getParam = (url: string, param: string): string | null => {
	const urlArray = url.split('?');

	if (urlArray.length > 1) {
		const params = urlArray[1];
		const paramsArray = params.split('&');

		const paramFound = paramsArray.find((p) => p.includes(param));

		if (paramFound) {
			const paramFoundArray = paramFound.split('=');
			return paramFoundArray.length > 1 ? paramFoundArray[1] : null;
		}
	}

	return null;
};
