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
				<Button
					type="link"
					href="javascript:window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A//compassionate-benz-47d885.netlify.com/','targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250');"
					target="_blank"
				>
					Share
				</Button>
				<Contacts />
			</div>
		</section>
	</Fragment>
);

export default Summary;
