import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import {
	setAdultsValue,
	setChildrenValue,
	setInsuranceAmount,
	setInsurancePeriod,
	setCity,
	setAdultAges,
	setChildAges,
	setSliderValues,
} from '../../../actions/sliderActions';
import { addToCart } from '../../../actions/cartAction'; // Import the addToCart action
import TableComponent from './TableComponent'; // Import the TableComponent
import { LinearProgress } from '@mui/material';

const FormComponent = ({
	adultsValue,
  childrenValue,
  insuranceAmount,
  insuranePeriod,
  city,
  sliderValues,
  adultAges,
  childAges,
  setAdultAges, // Include the setAdultAges action
  setChildAges, // Include the setChildAges action
  setAdultsValue,
  setChildrenValue,
  setInsuranceAmount,
  setInsurancePeriod,
  setCity,
  setSliderValues,
  addToCart,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [responseData, setResponseData] = useState(null);
	const [showSliders, setShowSliders] = useState(true);

	useEffect(() => {
		setSliderValues(sliderValues);
	}, [sliderValues, setSliderValues]);

	const handleCalculateback = () => {
		setShowSliders(true); // Show sliders again
		setResponseData(null); // Clear the response data
	};


	const handleCalculate = () => {
		setIsLoading(true);
		setShowSliders(false); // Hide sliders
		const dataToSend = {
			adultsValue,
			childrenValue,
			insuranceAmount,
			insuranePeriod,
			city,
			adultAges,
			childAges,
		};

		axios
			.post('http://localhost:5000/request', dataToSend)
			.then((response) => {
				console.log('POST request successful:', response.data);
				setResponseData(response.data);
			})
			.catch((error) => {
				console.error('Error making POST request:', error);
			})
			.finally(() => {
				setIsLoading(false);
				setShowSliders(false); // Hide sliders after the calculation
			});
	};

	const handleAdultsSliderChange = (event, newValue) => {
		setAdultsValue(newValue);
	};

	const handleChildrenSliderChange = (event, newValue) => {
		setChildrenValue(newValue);
	};

	const handleAdultAgeSliderChange = (index) => (event, newValue) => {
		const updatedAges = [...adultAges];
		updatedAges[index] = newValue;
		setAdultAges(updatedAges); // Dispatch the setAdultAges action with the updated ages
	  };
	
	  const handleChildAgeSliderChange = (index) => (event, newValue) => {
		const updatedAges = [...childAges];
		updatedAges[index] = newValue;
		setChildAges(updatedAges); // Dispatch the setChildAges action with the updated ages
	  };

	const handleInsuranceAmountSliderChange = (event, newValue) => {
		setInsuranceAmount(newValue);
	};

	const handleInsurancePeriodSliderChange = (event, newValue) => {
		setInsurancePeriod(newValue);
	};

	const handleCitySliderChange = (event, newValue) => {
		setCity(newValue);
	};

	const handleAddToCart = () => {
		const itemToAdd = {
			adultsValue,
			childrenValue,
			insuranceAmount,
			insuranePeriod,
			city,
			adultAges,
			childAges
		};

		// Dispatch the addToCart action to add the item to the cart
		addToCart(itemToAdd);
	};

	return (
		<div style={{ display: 'flex', alignItems: 'center', paddingLeft: "17vw", color: "white" }}>
			{showSliders && (
				<>
					{/* Left Column for Existing Controls */}
					<Box sx={{ width: '20vw', marginRight: '2vw' }}>
						<h2>Controls</h2>
						<h3>Number Of Adults : {adultsValue}</h3>
						<Slider
							value={adultsValue}
							onChange={handleAdultsSliderChange}
							aria-label="Adults"
							valueLabelDisplay="auto"
							min={1}
							max={2}
							sx={{
								'& .MuiSlider-thumb': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-track': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-rail': {
									backgroundColor: 'purple',
								},
								'& .MuiSlider-active': {
									color: 'green',
								},
							}}
						/>
						<h3>Number Of Children : {childrenValue}</h3>
						<Slider
							value={childrenValue}
							onChange={handleChildrenSliderChange}
							aria-label="Children"
							valueLabelDisplay="auto"
							min={0}
							max={4}
							sx={{
								'& .MuiSlider-thumb': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-track': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-rail': {
									backgroundColor: 'purple',
								},
								'& .MuiSlider-active': {
									color: 'green',
								},
							}}
						/>
						<h3>Insurance Value : {insuranceAmount}</h3>
						<Slider
							value={insuranceAmount}
							onChange={handleInsuranceAmountSliderChange}
							aria-label="Insurance Amount"
							valueLabelDisplay="auto"
							min={Math.min(...sliderValues)}
							max={Math.max(...sliderValues)}
							step={null}
							marks={sliderValues.map((value) => ({ value }))}
							sx={{
								'& .MuiSlider-thumb': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-track': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-rail': {
									backgroundColor: 'purple',
								},
								'& .MuiSlider-active': {
									color: 'green',
								},
							}}
						/>
						<h3>Insurance Period Years : {insuranePeriod}</h3>
						<Slider
							value={insuranePeriod}
							onChange={handleInsurancePeriodSliderChange}
							aria-label="Insurance Period"
							valueLabelDisplay="auto"
							min={1}
							max={2}
							sx={{
								'& .MuiSlider-thumb': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-track': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-rail': {
									backgroundColor: 'purple',
								},
								'& .MuiSlider-active': {
									color: 'green',
								},
							}}
						/>
						<h3>City : Tier {city}</h3>
						<Slider
							value={city}
							onChange={handleCitySliderChange}
							aria-label="City"
							valueLabelDisplay="auto"
							min={1}
							max={2}
							sx={{
								'& .MuiSlider-thumb': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-track': {
									backgroundColor: 'white',
								},
								'& .MuiSlider-rail': {
									backgroundColor: 'purple',
								},
								'& .MuiSlider-active': {
									color: 'green',
								},
							}}
						/>
						<Button variant="contained" size="large" onClick={handleCalculate}>
							Calculate
						</Button>
						<Button
							sx={{
								float: 'right',
							}}
							variant="contained"
							size="large"
							onClick={handleAddToCart}
						>
							Add to Cart
						</Button>
					</Box>

					{/* Right Column for Adult Ages and Child Ages */}
					<Box sx={{ width: '20vw' }}>
						<h2>Age Sliders</h2>
						{/* Adult Age Sliders */}
						{Array.from({ length: adultsValue }).map((_, index) => (
							<div key={index}>
								<h3>Adult {index + 1} Age: {adultAges[index]}</h3>
								<Slider
									value={adultAges[index]}
									onChange={handleAdultAgeSliderChange(index)}
									aria-label={`Adult ${index + 1} Age`}
									valueLabelDisplay="auto"
									min={18}
									max={99}
									sx={{
										'& .MuiSlider-thumb': {
											backgroundColor: 'white',
										},
										'& .MuiSlider-track': {
											backgroundColor: 'white',
										},
										'& .MuiSlider-rail': {
											backgroundColor: 'purple',
										},
										'& .MuiSlider-active': {
											color: 'green',
										},
									}}
								/>
							</div>
						))}

						{/* Child Age Sliders */}
						{Array.from({ length: childrenValue }).map((_, index) => (
							<div key={index}>
								<h3>Child {index + 1} Age: {childAges[index]}</h3>
								<Slider
									value={childAges[index]}
									onChange={handleChildAgeSliderChange(index)}
									aria-label={`Child ${index + 1} Age`}
									valueLabelDisplay="auto"
									min={1}
									max={18}
									sx={{
										'& .MuiSlider-thumb': {
											backgroundColor: 'white',
										},
										'& .MuiSlider-track': {
											backgroundColor: 'white',
										},
										'& .MuiSlider-rail': {
											backgroundColor: 'purple',
										},
										'& .MuiSlider-active': {
											color: 'green',
										},
									}}
								/>
							</div>
						))}
					</Box>
				</>
			)}
			{isLoading ? (
				<div>
					<Box sx={{ width: "40vw", display: "flex", alignItems: "center", alignContent: "center", marginLeft: "auto", marginRight: "auto", height: "30vh", marginTop: "30vh", paddingLeft: "2vw", paddingRight: "2vw", color: "white" }}>
						<LinearProgress sx={{ color: "white", width: "100%" }} /> {/* Display the circular loader */}

					</Box>
				</div>
			) : responseData ? (
				<>
					<Box sx={{ width: "40vw", alignContent: "center", marginLeft: "auto", marginRight: "auto", height: "30vh", color: "white" }}>
						<TableComponent responseData={responseData} />
						<Button variant="contained" size="large" onClick={handleCalculateback}>
							Back
						</Button>
						<Button
							sx={{
								float: "inline-end",// Move the button to the right by pushing it to the end of the container
							}}
							variant="contained"
							size="large"
							onClick={handleAddToCart}>
							Add to Cart
						</Button>
					</Box>

				</>

			) : null}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		adultsValue: state.slider.adultsValue,
		childrenValue: state.slider.childrenValue,
		insuranceAmount: state.slider.insuranceAmount,
		insuranePeriod: state.slider.insuranePeriod,
		city: state.slider.city,
		sliderValues: state.slider.sliderValues,
		adultAges:state.slider.adultAges,
		childAges:state.slider.childAges
	};
};

export default connect(mapStateToProps, {
	setAdultsValue,
	setChildrenValue,
	setInsuranceAmount,
	setInsurancePeriod,
	setCity,
	setSliderValues,
	addToCart,
	setAdultAges,
	setChildAges // Include the addToCart action
})(FormComponent);
