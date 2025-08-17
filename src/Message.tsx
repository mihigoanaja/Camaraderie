//PacalCasing
function Message(){
	//JSX: JavaScript XML
	var name="Anaja";
	if (name)
		return <h1 className="color-f90">Hello {name}</h1>;
	else
		return <h1>Hello World</h1>;
}
export default Message;