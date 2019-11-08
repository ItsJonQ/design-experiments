(function() {
	/**
	 * Util function for lightening the colour with a %
	 * @param - string - colour with leading #
	 * @param - number - percentage to lighten by
	 */
	function lighten(c, p) {
		let n = parseInt(c.slice(1), 16),
			a = Math.round(2.55 * p),
			// Bitshift 16 bits to the left
			r = (n >> 16) + a,
			// Bitshift 8 bits to the left based on blue
			b = ((n >> 8) & 0x00ff) + a,
			//
			g = (n & 0x0000ff) + a;
		// Calculate
		return (
			'#' +
			(
				0x1000000 +
				(r < 255 ? (r < 1 ? 0 : r) : 255) * 0x10000 +
				(b < 255 ? (b < 1 ? 0 : b) : 255) * 0x100 +
				(g < 255 ? (g < 1 ? 0 : g) : 255)
			)
				.toString(16)
				.slice(1)
		);
	}

	function getCurrentPrimaryColor() {
		const styles = window.getComputedStyle(document.documentElement);
		const primaryColor = styles.getPropertyValue('--wp-ui--color-primary');

		return primaryColor;
	}

	function setCssVariable(prop, value) {
		document.documentElement.style.setProperty(prop, value);
	}

	function setColorVariants() {
		const primaryColor = getCurrentPrimaryColor();

		const values = primaryColor.replace('#', '');
		const color5 = lighten(values, 5);
		const color10 = lighten(values, 10);
		const color20 = lighten(values, 20);

		const colorDark5 = lighten(values, -5);
		const colorDark10 = lighten(values, -10);
		const colorDark20 = lighten(values, -20);

		setCssVariable('--wp-ui--color-primary', primaryColor);

		setCssVariable('--wp-ui--color-primary-5', color5);
		setCssVariable('--wp-ui--color-primary-10', color10);
		setCssVariable('--wp-ui--color-primary-20', color20);

		setCssVariable('--wp-ui--color-primary-dark-5', colorDark5);
		setCssVariable('--wp-ui--color-primary-dark-10', colorDark10);
		setCssVariable('--wp-ui--color-primary-dark-20', colorDark20);
	}

	function createPrimaryColorObserver() {
		let __currentPrimaryColor = getCurrentPrimaryColor();
		const observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.attributeName === 'style') {
					if (__currentPrimaryColor !== getCurrentPrimaryColor()) {
						setColorVariants();
						__currentPrimaryColor = getCurrentPrimaryColor();
					}
				}
			});
		});

		// Notify me of style changes
		const observerConfig = {
			attributes: true,
			attributeFilter: ['style'],
		};
		const targetNode = document.documentElement;
		observer.observe(targetNode, observerConfig);
	}

	requestAnimationFrame(() => {
		setColorVariants();
		createPrimaryColorObserver();
	});
})();
