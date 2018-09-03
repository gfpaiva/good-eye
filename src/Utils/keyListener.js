export default function (e) {
	if(e && e.keyCode && e.keyCode === 13) return this.props.action();
}
