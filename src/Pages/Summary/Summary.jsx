import React, { Fragment } from 'react';
import Button from '../../Components/Button/Button';
import Contacts from '../../Components/Contacts/Contacts';
import Steps from '../../Components/Step/Step';
import SingleSummary from '../../Components/SingleSummary/SingleSummary';

import summaryEN from '../../Utils/summary';

import './Summary.scss';

const Summary = () => (
	<Fragment>
		<Steps
			name="summary"
			title="We need to have a more critical and constructive re-examination of facts – and you can help. <span class='summary__subtitle'>Things that we usually don't take a second look at might be a very important piece of history and have influence on our present.</span>"
		/>
		<section className="summary__end">
			{summaryEN.map((item, idx) => <SingleSummary {...item} key={idx} />)}

			<div className="summary__footer">
				<Button>Share</Button>
				<Contacts />
			</div>
		</section>
	</Fragment>
);

export default Summary;
