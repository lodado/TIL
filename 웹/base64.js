class Presentation{

        constructor(){
            this.toStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            //this.init();
        }

        async init(){
           
            let up = new Application();
            this.inStr = await up.init();
            
            this.inStr[4] = this.base64Encoding(this.inStr[4])+"\r\n";

            print(this.inStr, "presentation");

            return this.inStr;
        }

        base64Encoding(text){
            let str = [];
            let total = "";
           
            for(let i of text){   
                let abc = this.numToASC(i);
            
                //console.log(abc);
                abc = this.ASCtoBinary(abc);
                //console.log(abc);
                total = total+abc;
            }
            
            //console.log(total);
            let num = 0;

            while(num<total.length){                   //6개씩 쪼개기
                let now = total.substr(num, 6);
                while(now.length<6)
                    now = now + "0";
                str.push(now);
                num+=6;
            }
            //console.log(str);
            let answer = [];

            for(let i=0; i<str.length; i++){
                let now = parseInt(str[i], 2);

                now = this.toStr[now];
                
                answer.push(now);
            }
            
            return answer.join("");
        }

        numToASC(num){
            let abc = num.charCodeAt(0);

            if(num==="\t"){
                return 9;
            }
            if(num==="\r")
                return 13;
            
            if(num==="\n")
                return 10;

            return abc;
        }

        ASCtoBinary(getNum){
            let num = getNum;
            let str = "";
            while(num>0){
                str = (num%2) + str;
                num = parseInt(num/2);
            }
            while(str.length<8)
                str= "0"+str;
            return str;
        }

        numToBase(num){

            return String.fromCharCode(num+65);

        }

        async deinit(){
            let data  = await new Session().deinit();
           
            let str = this.base64Decoding(data[4]);
            console.log()
            console.log("decode base64 내용 :");
             //JSON.stringify(this.inStr).replace(,"")


            str = JSON.stringify(str).substr(1, str.length);
            console.log(str);


            data[4] = str;
            
            fs.writeFile('./copyText.txt',str, 'utf8', function(error){ 
                    console.log('write end');
                }
            );

            return data;
        }

        base64Decoding(data){

            let binary = this.base64toBinary(data).join("");
            let realStr = "";

            for(let i=0; i<binary.length; i+=8){
                    let str = binary.substr(i,8);
                   
                    let ch = String.fromCharCode(parseInt(str, 2));
                    realStr = realStr + ch;
            }

            return realStr;
        }


        base64toBinary(data){

            let str = [];
            let ans="";
            
            for(let i=0; i<data.length; i++){
                let binary = data[i];
                
                for(let j=0; j<this.toStr.length; j++){
                    if(this.toStr[j]===binary){
                        ans = j.toString(2);
                        
                        while(ans.length<8)
                            ans = "0"+ans;
                        
                        if(ans.startsWith("00"))
                            ans = ans.substr(2,8);
                        break;
                    }
                }

                str.push(ans);
            }
            return str;
        }

}
