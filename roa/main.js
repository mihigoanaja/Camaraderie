var roa={};
roa.getSimilarity=(input, sample)=>{
	const inputWords = input.split(/\W+/);
	const sampleWords = sample.split(/\W+/);
	let matchCount = 0;
	inputWords.forEach(word => {
		if (sampleWords.includes(word)) {
			matchCount++;
		}
	});
	return matchCount / Math.max(inputWords.length, sampleWords.length);
}
(()=>{
  fetch("./roa/tokens.json").then((a=>{
    a.json().then((b)=>{
			roa.tokens=b;
			roa.getResponse=function(prompt){
			    var response="";
			    roa.tokens.forEach((p)=>{
			        p.prompts.forEach((q)=>{
			            if (response==""){
			                if (roa.getSimilarity(prompt,q)>0.5) {
			                    response=p.response;
			                }
			            }
			        });
			    });
			    return response;
			}
		});
	}));
})();
