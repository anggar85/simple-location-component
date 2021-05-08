import React, {Fragment, useEffect, useState} from "react";
import countryList from './countrys.json'

export  default function LocationCX({cols = 4, data:{country="", state="", city=""}, onChange = null, extraStyleClasses=""}) {

	// Saves all the lists of countries, states and cities
	const [countries] = useState(countryList);
	const [states, setStates] = useState([]);
	const noValues = [undefined, null, "null", "", "0", 0]

	useEffect(() => {
		if (noValues.includes(country)){
			let e = {target:{value: "", name:"country"}}
			onChange(e)
		}
	},[country])
	
	useEffect(() => {
		getStates(country)
	},[country])
	
	// Retrieve list of countries
	const getStates = (country) => {
		for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].name === country){
        setStates(Object.assign([], countryList[i].states))
      }
    }
	};
	
	return(
		
		<Fragment>
			<div className={`col-md-${cols} ${extraStyleClasses ? extraStyleClasses:""} `}>
				{/* <Tooltip title={country ? country :"No country selected"}> */}
					<span>
						<select
							name="country"
							className="w-100"
							value={country ? country : ""}
							onChange={onChange}
						>
						<option value=""/>
							{countries?.map((option, i) => (
								<option key={i} value={option.name}>
									{option.name}
								</option>
							))}
					</select>
					</span>
				{/* </Tooltip> */}
			</div>
			<div className={`col-md-${cols}  ${extraStyleClasses ? extraStyleClasses:""} `}>
				{/* <Tooltip title={state ? state :"No state selected"}> */}
					<span>
				<select
					name="state"
					className="w-100"
					value={state ? state : ""}
					onChange={onChange}
				>
					<option value=""/>
					{states?.map((option, i) => (
						<option key={i} value={option.name}>
							{option.name}
						</option>
					))}
				</select>
					</span>
				{/* </Tooltip> */}
			</div>
			<div className={`col-md-${cols} ${extraStyleClasses ? extraStyleClasses:""} `}>
				<input
					name="city"
					className="w-100"
					value={city || ""}
					onChange={onChange}
				/>
				
			</div>
		</Fragment>
	)
}