function Features() {
	var features=[
		{name:"🚀 Skill Development",tagline:"Gain knowledge in programming, business, marketing, and more."},
		{name:"🤝 Networking",tagline:"Connect with industry leaders, entrepreneurs, and innovators."},
		{name:"💡 Exclusive Opportunities",tagline:"Access mentorship, funding, and business growth initiatives."},
		{name:"🌍 Global Community",tagline:"Engage with like-minded individuals from all around the world."}
	];
	return (
		<div className="features">
			{features.map((i,n)=>(
				<div className="feature" key={n} onClick={()=>console.log("Clicked")}>
					<h3>{i.name}</h3>
					<p>{i.tagline}</p>
				</div>
			))}
		</div>
	);
}
export default Features;