import React, { useState, createContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
	const [ isProfileOpen, setIsProfileOpen ] = useState(false);
	const [ isPaymentOpen, setIsPaymentOpen ] = useState(false);
	const [ info, setInfo ] = useState({
		name: 'Sam Maker',
		email: 'sammaker123@gmail.com',
		password: 'password123',
		currency: 'US Dollar - USD',
		paymentMethod: 'Paypal',
		account: 'payme@gmail.com'
	});
	const [ temp, setTemp ] = useState({
		name: 'Sam Maker',
		email: 'sammaker123@gmail.com',
		password: 'password123',
		currency: 'US Dollar - USD',
		paymentMethod: 'Paypal',
		account: 'payme@gmail.com'
	});

	// Function for saving the temporary changes to data

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTemp((prevState) => ({ ...prevState, [name]: value }));
		console.log(temp);
	};

	//Functions for the profile
	const handleProfileEdit = () => {
		setIsPaymentOpen(!isProfileOpen);
	};

	const handleProfileCancel = () => {
		setIsProfileOpen(!isProfileOpen);
	};
	const handleProfileSave = (e) => {
		setIsProfileOpen(!isProfileOpen);
		setInfo({
			name: temp.name,
			email: temp.email,
			password: temp.password,
			currency: temp.currency,
			paymentMethod: temp.paymentMethod,
			account: temp.account
		});

		console.log('Profile Save called');
	};

	//Functions for the payment
	const handlePaymentEdit = () => {
		setIsPaymentOpen(!isPaymentOpen);
	};

	const handlePaymentSave = () => {
		setIsPaymentOpen(!isPaymentOpen);
		setInfo({
			name: temp.name,
			email: temp.email,
			password: temp.password,
			currency: temp.currency,
			paymentMethod: temp.paymentMethod,
			account: temp.account
		});
		console.log('Payment Save called');
	};
	const handlePaymentCancel = () => {
		setIsPaymentOpen(!isPaymentOpen);
	};

	return (
		<ProfileContext.Provider
			value={{
				setIsPaymentOpen,
				setIsProfileOpen,
				isPaymentOpen,
				isProfileOpen,
				handlePaymentEdit,
				handleProfileEdit,
				handlePaymentSave,
				handlePaymentCancel,
				handleProfileSave,
				handleProfileCancel,
				handleChange,
				info,
				setInfo
			}}
		>
			{props.children}
		</ProfileContext.Provider>
	);
};
