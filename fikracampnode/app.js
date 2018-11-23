let fs = require('fs');
let _  = require('underscore');

fs.readFile('./assets/flowers.txt', (err, data)=>{
    if(err) return;

    
    let flowers = data.toString().split("\n");

    let resuilts = {
        //number of rows 
        rows: flowers.length,
        //number of flowers that's not starts with S gonna call it Number of flowers not with S = nofws
        nofws: 0,
        //flowers that's starts with S and it's gonna be an array 
        FlowersWithS: [],
        //flowers starts with my letter K 
        FlowersWithK: [],
        //flowers with length of five 
        flowersLengthFive: []
    }
    


    _.filter(flowers, (name) => {
		if(_.contains(name[0], 'S')) {
			resuilts.FlowersWithS.push(name)
		} else {
			resuilts.nofws += 1;



			if (_.contains(name[0], 'K')) {
				resuilts.FlowersWithK.push(name)
			}
		}


                if (name.length === 5) {
                    resuilts.flowersLengthFive.push(name)
                }
	})

    //the results are goinig to be showen in the console
    console.log(resuilts);

})