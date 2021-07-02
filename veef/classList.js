import { useState } from '@web-mjs/preact';
const useCls = (initialList) => {
    let initArg;
    if(typeof initialList === "undefined" || initialList === null) {
        initArg = [];
    } else if(typeof initialList === "string") {
        initArg = [initialList];
    } else {
        initArg = initialList;
    }

	let [state, setState] = useState(initArg);

	let modifyList = {
		add: (cls) => {
			setState([...state, cls]);
		},
		addAll: (clsList) => {
			setState([...state, ...clsList]);
		},
		remove: (cls) => {
			setState(state.filter(x => x !== cls));
		},
		removeAll: (clsList) => {
			setState(state.filter(x => clsList.indexOf(x) === -1));
		},
		toggle: (cls) => {
			const exists = state.indexOf(cls) !== -1;
			if(exists) modifyList.remove(cls);
			else modifyList.add(cls);
		},
        value: state.join(" ")
	};
	return modifyList;
};

export default useCls;
