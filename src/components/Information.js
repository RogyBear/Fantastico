import React, { Fragment, useContext } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { ProfileContext } from '../contexts/ProfileContext';
const Information = () => {
	const { isProfileOpen, handleSave, handleChange, info } = useContext(ProfileContext);

	// input values need to stay lowercase. Update all styles in informaiton.scss
	let input = [ 'name', 'email', 'password' ];

	return (
		<Fragment>
			<Form onSubmit={handleSave} className="form">
				{input.map((element, i) => (
					<FormGroup className="form__group">
						<Label for={element} className="form__group__label">
							{element}
						</Label>
						{isProfileOpen ? (
							<Input
								type={element === 'password' ? 'password' : element}
								name={element}
								id={element}
								placeholder={element === 'password' ? 'Change Password...' : info[element]}
								onChange={handleChange}
								className="form__group__input"
							/>
						) : (
							<div className="form__group__display">
								{element === 'password' ? '*********' : info[element]}
							</div>
						)}
					</FormGroup>
				))}
			</Form>
		</Fragment>
	);
};

export default Information;
