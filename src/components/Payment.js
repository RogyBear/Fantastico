import React, { Fragment, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ProfileContext } from '../contexts/ProfileContext';
const Information = () => {
	const { isOpen, isPaymentOpen, setIsPaymentOpen, handleSave, handleChange, info, setInfo } = useContext(
		ProfileContext
	);

	// input values need to stay lowercase. Update all styles in payment.scss
	let input = [ 'paymentMethod', 'currency', 'account' ];
	let currency = [ 'Select Currency', 'US Dollar - USD', 'British Pound - GBP', 'Euro - EUR' ];
	let paymentMethod = [ 'Select Payment Method', 'Paypal', 'Venmo' ];

	return (
		<Fragment>
			<Form onSubmit={handleSave} className="form">
				<FormGroup className="form__group">
					<Label for="exampleSelect">Payout Currency</Label>
					{isPaymentOpen ? (
						<Input
							type="select"
							name="currency"
							onChange={handleChange}
							placeholder={info.currency}
							id="currency"
						>
							{currency.map((element) => <option value={element}>{element}</option>)}
						</Input>
					) : (
						<div className="form__group__display">{info.currency}</div>
					)}
				</FormGroup>
				<FormGroup className="form__group">
					<Label for="exampleSelect">Payout Method</Label>
					{isPaymentOpen ? (
						<Input
							type="select"
							name="paymentMethod"
							onChange={handleChange}
							id="paymentMethod"
							placeholder={info.paymentMethod}
						>
							{paymentMethod.map((element) => <option value={element}>{element}</option>)}
						</Input>
					) : (
						<div className="form__group__display">{info.paymentMethod}</div>
					)}
				</FormGroup>
				<FormGroup className="form__group">
					<Label for="account" className="form__group__label">
						Account
					</Label>
					{isPaymentOpen ? (
						<Input
							type="text"
							onChange={handleChange}
							name="account"
							id="account"
							placeholder={info.account}
							className="form__group__input"
						/>
					) : (
						<div className="form__group__display">{info.account}</div>
					)}
				</FormGroup>
			</Form>
		</Fragment>
	);
};

export default Information;

{
	/* <FormGroup className="form__group">
						<Label for="exampleEmail" className="form__group__label">
							{element}
						</Label>
						{isOpen ? (
							<Input
								type="text"
								name={element}
								id={element}
                                placeholder={info[i]}
								onChange={handleChange}
								className="form__group__input"
							/>
						) : (
							<div className="form__group__display">{info[i]}</div>
						)}
					</FormGroup> */
}
