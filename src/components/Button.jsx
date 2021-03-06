const STYLES = ['btnPrimary', 'btnOutline'];

const Button = ({ children, buttonStyle }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];

	return <button className={`btn ${checkButtonStyle}`}>{children}</button>;
};

export default Button;
