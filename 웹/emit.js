export default class Emit{

    constructor(){
        this.events = {};
        this.onceEvents = {};
    }

    async on(name, listener){

        this.events[name] = this.events[name] || [];
        if(typeof listener === "function")
             this.events[name].push((listener));
    }

    async emit(name){ //쓰고 삭제하게 구현?
        
        if(!this.events[name])
        {
            console.log("너무 빨라서 사라짐...");
            return false;
        }   

        for(let i=0; i<this.events[name].length; i++){

            let ele = this.events[name][i];
            let pro = new Promise(function (resolve, reject) {
                setTimeout(resolve(), 0);
            }).then(ele).catch(e=>console.log("오류"));
        }

        return true;
    }
    removeAllListeners(){
        this.events = [];
    }

}
