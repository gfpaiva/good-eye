import React, { Component, Fragment } from 'react';
import Button from '../../Components/Button/Button';
import Contacts from '../../Components/Contacts/Contacts';
import Steps from '../../Components/Step/Step';
import SingleSummary from '../../Components/SingleSummary/SingleSummary';

import summaryEN from '../../Utils/summary';

import './Summary.scss';

class Summary extends Component {

	state = {
		share: false,
		copied: false
	};

	copy = e => {
		e.preventDefault();

		document.execCommand('copy');

		this.setState(() => ({ copied: true }), () => {
			window.setTimeout(() => {
				this.setState({ copied: false });
			}, 2000);
		});
	};

	componentDidMount() {
		document.addEventListener('copy', e => {
			e.preventDefault();
			e.clipboardData && e.clipboardData.setData("text/plain", window.location.href);
		});
	};

	render() {
		const { share, copied } = this.state;

		return (
			<Fragment>
				<Steps
					name="summary"
					title="We need to have a more critical and constructive re-examination of facts – and you can help. <span class='summary__subtitle'>Things that we usually don't take a second look at might be a very important piece of history and have influence on our present.</span>"
				/>
				<section className="summary__end">
					{summaryEN.map((item, idx) => <SingleSummary {...item} key={idx} />)}

					<div className="summary__footer">
						{!share &&
							<Button
								type="link"
								onClick={() => this.setState({ share: true })}
							>
								Share
							</Button>
						}

						{share &&
							<div className="summary__sharer">
							<Button
									type="link"
									spaced
									href="javascript:window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A//compassionate-benz-47d885.netlify.com/','targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250');"
								>
									Facebook
								</Button>

								<Button
									type="link"
									spaced
									href="javascript:window.open('https://twitter.com/home?status=Do%20you%20have%20an%20eye%20for%20detail?%20https%3A//compassionate-benz-47d885.netlify.com/','targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250');"
								>
									Twitter
								</Button>

								{!copied &&
									<Button
										type="link"
										onClick={this.copy}
									>
										Copy URL
									</Button>
								}
								{copied && <Button type="link">Copied</Button>}
							</div>
						}
						<Contacts />
					</div>
				</section>
			</Fragment>
		);
	};
}

export default Summary;
