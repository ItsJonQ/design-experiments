// (function() {
// 	const createInput = ({ label, prop, value }) => {
// 		const formControl = document.createElement('div');
// 		formControl.style.marginBottom = '10px';

// 		const labelNode = document.createElement('label');
// 		labelNode.innerHTML = label;

// 		const input = document.createElement('input');
// 		input.setAttribute('type', 'text');
// 		input.setAttribute('value', value);
// 		input.style.maxWidth = '100%';

// 		input.onchange = (event) => {
// 			const root = document.documentElement;
// 			root.style.setProperty(`--wpcui-${prop}`, event.target.value);
// 		};

// 		labelNode.appendChild(input);
// 		formControl.appendChild(labelNode);

// 		return formControl;
// 	};

// 	const renderBody = () => {
// 		document.body.style.width = 'calc(100% - 180px)';
// 	};

// 	const renderSidebar = () => {
// 		const node = document.createElement('div');
// 		node.style.position = 'fixed';
// 		node.style.right = '0';
// 		node.style.top = '0';
// 		node.style.bottom = '0';
// 		node.style.borderLeft = '1px solid #ccc';
// 		node.style.zIndex = '999';
// 		node.style.width = '180px';
// 		node.style.padding = '60px 20px';
// 		node.style.background = 'white';
// 		node.style.boxSizing = 'border-box';
// 		node.style.overflowY = 'auto';

// 		const fieldPaddingInput = createInput({
// 			label: 'Input: Padding',
// 			prop: 'field-padding',
// 			value: '0 8px',
// 		});

// 		node.appendChild(fieldPaddingInput);

// 		document.body.appendChild(node);
// 	};

// 	const initialize = () => {
// 		console.log('Design Experiments!');
// 		renderBody();
// 		renderSidebar();
// 	};

// 	window.onload = () => {
// 		initialize();
// 	};
// })();
