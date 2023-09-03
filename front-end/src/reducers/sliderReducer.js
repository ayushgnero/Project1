const initialState = {
  sliderValues: [300000, 500000, 700000, 1000000, 1500000, 2000000, 2500000, 3000000, 4000000, 5000000, 6000000, 7500000],
  adultsValue: 1,
  childrenValue: 0,
  insuranceAmount: 300000,
  insuranePeriod: 1,
  city: 1,
  adultAges: [18],
  childAges: [1],
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SLIDER_VALUES': // Lowercase type
      return {
        ...state,
        sliderValues: action.payload
      };
    case 'SET_ADULTS_VALUE':
      return {
        ...state,
        adultsValue: action.payload,
      };
    case 'SET_CHILDREN_VALUE':
      return {
        ...state,
        childrenValue: action.payload,
      };
    case 'SET_INSURANCE_AMOUNT':
      return {
        ...state,
        insuranceAmount: action.payload,
      };
    case 'SET_ADULT_AGES':
      return {
        ...state,
        adultAges: action.payload,
      };
    case 'SET_CHILD_AGES':
      return {
        ...state,
        childAges: action.payload,
      };
    case 'SET_INSURANE_PERIOD':
      return {
        ...state,
        insuranePeriod: action.payload,
      };
    case 'SET_CITY':
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default sliderReducer;