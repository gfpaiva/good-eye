export default function(step) {
	let category;

	switch (step) {
		case 0:
		case 1:
			category = 'intro'
		break;

		case 2:
		case 4:
			category = 'questions'
		break;

		case 3:
			category = 'result'
		break;

		case 5:
			category = 'summary'
		break;

		default:
			category = 'default'
		break;
	}

	return category;
};
