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
			fetch("./roa/alreflections-tokens.json").then((c)=>{c.json().then((d)=>{
				roa.tokens=[...b,...d];
			});});
			roa.getResponse=async function(prompt){
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
				/*
				if (response=='') {
					var apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(prompt)}`;
					var wiki=await fetch(apiUrl);
					var data=await wiki.json();
					if (data.extract) {
						response=`${data.extract}`;
					}
				}
				*/
				if (response=='') {
					var apiUrl = `https://atinas.alreflections.net/api/`+btoa(`https://chatworker.eranajam123.workers.dev/?prompt=${encodeURIComponent(prompt)}`);
					var llama=await fetch(apiUrl);
					var data=await llama.json();
					if (data.reply) {
						response=`${data.reply}`;
					}
				}
			    return response;
			}
		});
	}));
})();
