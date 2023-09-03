// actions/sliderActions.js
export const setSliderValues = (values) => ({
    type: 'SET_SLIDER_VALUES', // Uppercase type
    payload: values,
});

// actions/adultsValueActions.js
export const setAdultsValue = (value) => ({
    type: 'SET_ADULTS_VALUE',
    payload: value,
});

// actions/sliderActions.js
export const setChildrenValue = (values) => ({
    type: 'SET_CHILDREN_VALUE',
    payload: values,
});

// actions/adultsValueActions.js
export const setInsuranceAmount = (value) => ({
    type: 'SET_INSURANCE_AMOUNT',
    payload: value,
});

// actions/sliderActions.js
export const setInsurancePeriod = (values) => ({
    type: 'SET_INSURANE_PERIOD',
    payload: values,
});

// actions/adultsValueActions.js
export const setCity = (value) => ({
    type: 'SET_CITY',
    payload: value,
});

export const setAdultAges = (value) => ({
    type: 'SET_ADULT_AGES',
    payload: value,
});

export const setChildAges = (value) => ({
    type: 'SET_CHILD_AGES',
    payload: value,
});