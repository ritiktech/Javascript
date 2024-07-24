

        function show(string1,string2){
            if(string1.length !== string2.length){
                return false;
            }

          let counter ={};
            for(let data of string1){
                counter[data] = (counter[data] || 0) + 1;
               console.log(counter[data]);
            }

            for(let items of string2){
             if(!counter[items]){
             return false;
            }
            counter[items]-=1.
        }
       return true;
    }

        let result = show('Hello', 'llheo');
        console.log(result);

