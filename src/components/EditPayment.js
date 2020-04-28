import React, { useContext, Fragment } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
const Edit = (props) => {
	const { isPaymentOpen, setIsPaymentOpen, handlePaymentCancel, handlePaymentSave } = useContext(ProfileContext);

	return (
		<Fragment>
			{!isPaymentOpen ? (
				<div className="edit" onClick={() => setIsPaymentOpen(!isPaymentOpen)}>
					Edit
				</div>
			) : (
				<div className="change">
					<button form="form" type="submit" className="change__save--btn" onClick={handlePaymentSave}>
						Save
					</button>
					<button className="change__cancel--btn" onClick={handlePaymentCancel}>
						Cancel
					</button>
				</div>
			)}
		</Fragment>
	);
};

export default Edit;
