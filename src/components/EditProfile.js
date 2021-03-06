import React, { useContext, Fragment } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';
const Edit = (props) => {
	const {
		isProfileOpen,
		setIsProfileOpen,
		handleProfileCancel,
		handleProfileSave
	} = useContext(ProfileContext);

	return (
		<Fragment>
			{!isProfileOpen ? (
				<div
					className="edit"
					onClick={() => {
						setIsProfileOpen(!isProfileOpen);
					}}
				>
					Edit
				</div>
			) : (
				<div className="change">
					<button form="form" type="submit" className="change__save--btn" onClick={handleProfileSave}>
						Save
					</button>
					<button className="change__cancel--btn" onClick={handleProfileCancel}>
						Cancel
					</button>
				</div>
			)}
		</Fragment>
	);
};

export default Edit;
