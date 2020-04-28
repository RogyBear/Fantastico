import React from 'react';

import './static/main.scss';
import Information from './components/Information';
import Payment from './components/Payment';
import { ProfileProvider } from './contexts/ProfileContext';
import EditPayment from './components/EditPayment';
import EditProfile from './components/EditProfile';
import Menu from './components/Menu';

function App() {
	return (
		<ProfileProvider>
			<div className="main">
				<Menu />
				<div className="main__content">
					<div className="main__content__feedback">
						
							<input
								type="text"
								className="main__content__feedback__search"
								placeholder="Feedback About This Page"
							/>
				
						<svg
							className="main__content__feedback__btn"
							height="512pt"
							viewBox="0 0 512 512"
							width="512pt"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 405.332031c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031 21.332031 9.554687 21.332031 21.332031-9.554687 21.332031-21.332031 21.332031zm33.769531-135.636719c-7.550781 3.476563-12.4375 11.09375-12.4375 19.394532v9.578125c0 11.773437-9.535156 21.332031-21.332031 21.332031s-21.332031-9.558594-21.332031-21.332031v-9.578125c0-24.898438 14.632812-47.722656 37.226562-58.15625 21.738281-10.003906 37.4375-36.566406 37.4375-49.601563 0-29.394531-23.914062-53.332031-53.332031-53.332031s-53.332031 23.9375-53.332031 53.332031c0 11.777344-9.539063 21.335938-21.335938 21.335938s-21.332031-9.558594-21.332031-21.335938c0-52.925781 43.070312-96 96-96s96 43.074219 96 96c0 28.824219-25.003906 71.191407-62.230469 88.363281zm0 0" />
						</svg>
					</div>
					<div className="main__content__title">Profile</div>
					<div className="main__content__info">
						<Information />
						<EditProfile />
					</div>
					<div className="main__content__info">
						<Payment />
						<EditPayment />
					</div>
				</div>
			</div>
		</ProfileProvider>
	);
}

export default App;
