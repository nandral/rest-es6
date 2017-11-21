function processRequest(properties){
	const completedHTVs = properties.filter( ({workflow,type}) =>{
		return workflow === 'completed' && type === 'htv'
	});

	const resArr = completedHTVs.map( ({address, type, workflow}) =>{
		return { concataddress:formatAddress(address), type, workflow};
	});

	return resArr;
}

function formatAddress(address){
	return Object.values(address).toString().replaceAll(',',' ');
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

module.exports = processRequest;