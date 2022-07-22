import template from "@babel/template";

export const buildStateHook = template(`
const [STATE_PROP, STATE_SETTER] = React.useState(STATE_VALUE);
`);

export const buildRefHook = template(`
const VAR_NAME = React.useRef(INITIAL_VALUE);
`);

export const buildEffectHook = template(`
React.useEffect(() =>  { EFFECT });
`);

export const buildUseCallbackHook = template(`
React.useCallback(CALLBACK);
`);
export const buildUseMemo = template(`
const VAR = React.useMemo(() => EXPRESSION);
`);
