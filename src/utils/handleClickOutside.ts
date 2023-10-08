export const handleClickOutside: (onClickOutside: () => void, ref: React.MutableRefObject<null>) => () => void = (
	onClickOutside,
	ref,
) => {
	const handleClick = (event: Event): void => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/no-unsafe-call
		if (ref.current && !ref.current.contains(event.target)) {
			onClickOutside();
		}
	};

	document.addEventListener(`mousedown`, handleClick);

	return () => {
		document.removeEventListener(`mousedown`, handleClick);
	};
};
