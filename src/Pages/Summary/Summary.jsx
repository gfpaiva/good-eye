import React, { Component, Fragment } from 'react';
import Button from '../../Components/Button/Button';
import Contacts from '../../Components/Contacts/Contacts';
import Steps from '../../Components/Step/Step';
import SingleSummary from '../../Components/SingleSummary/SingleSummary';

import summaryEN from '../../Utils/EN/summary';
import summaryPT from '../../Utils/PT/summary';

import './Summary.scss';

const shareUrl = window.location.href;
const shareMessage = 'Do you have an eye for detail?';

class Summary extends Component {

	state = {
		share: false,
		copied: false
	};

	copy = e => {
		e.preventDefault();

		const copyFunc = e => {
			e.preventDefault();
			e.clipboardData && e.clipboardData.setData("text/plain", shareUrl);
		};

		document.addEventListener('copy', copyFunc, false);
		document.execCommand('copy');
		document.removeEventListener('copy', copyFunc, false);

		this.setState(() => ({ copied: true }), () => {
			window.setTimeout(() => {
				this.setState({ copied: false });
			}, 2000);
		});
	};

	fbShare = e => {
		e.preventDefault();

		window.FB && window.FB.ui({
			method: 'share',
			mobile_iframe: true,
			href: shareUrl,
		}, function(response){});
	};

	twShare = e => {
		e.preventDefault();
		window.open(`http://twitter.com/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareMessage)}`, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
	}

	render() {
		const { share, copied } = this.state;
		const { english } = this.props;
		const renderSummary = english ? summaryEN : summaryPT;

		return (
			<Fragment>
				<Steps
					name="summary"
					title={
						english ?
						"We need to have a more critical and constructive re-examination of facts – and you can help. <span class='summary__subtitle'>Things that we usually don't take a second look at might be a very important piece of history and have influence on our present.</span>"
						: "Precisamos fazer um reexame mais crítico e construtivo dos fatos – e você pode ajudar. <span class='summary__subtitle'>O que às vezes não olhamos a fundo pode ser uma parte muito importante da história e ter influência sobre o nosso presente.</span>" }
				/>
				<section className="summary__end">
					{renderSummary.map((item, idx) => <SingleSummary {...item} key={idx} {...{english}} />)}

					<div className="summary__footer">
						{!share &&
							<Button
								type="link"
								onClick={() => this.setState({ share: true })}
							>
								{english ? 'Share' : 'Compartilhar' }
							</Button>
						}

						{share &&
							<div className="summary__sharer">
							<Button
									type="link"
									spaced
									onClick={this.fbShare}
								>
									Facebook
								</Button>

								<Button
									type="link"
									spaced
									onClick={this.twShare}
								>
									Twitter
								</Button>

								{!copied &&
									<Button
										type="link"
										onClick={this.copy}
									>
										{english ? 'Copy URL' : 'Copiar URL' }
									</Button>
								}
								{copied && <Button type="link">{english ? 'Copied' : 'Copiado' }</Button>}
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
