import GENERAL from "./pages/general";

let init = null;

switch (global.vars.page) {
	default:
		init = () => {
			console.log('default init');
		};
}

$(document).ready(GENERAL.init(), init());