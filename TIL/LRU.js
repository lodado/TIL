
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const cacheList = {

    init(cacheCount, head=null, tail=null){

        this.head = null;
        this.tail = null;
        this.cacheCount = cacheCount;
        this.hashMap = new Map();

        return this;
    },

    add(key, value){
        let finding = null;
        finding = this.hashMap.get(key);

        if(finding){
            this.goHit(finding, value);
        }
        else{

            if(this.cacheCount<=this.hashMap.size){
                console.log("delete ");
                this.delete();
            }
            
            this.addNewList(finding, key, value);
            
        }
      
    },
    delete(){
        
        const tmp = this.head;

        if(tmp.next){
            tmp.next.previous = head.tail;
            head.tail = tmp.next; 
        }

        tmp.next = null;
        tmp.previous = null;

        this.hashMap.delete(tmp.key);
       

    },

    goHit(finding, value){
        
        finding.hitCount++; //캐시에서 get 할 때마다 hit가 되면 hitCount를 증가시킨다.
        finding.value = value;    //캐시에 set할 때는 이전에 동일한 키가 있으면 업데이트한다
        if(this.head==null){
            //cant logically;
        }
        else{
            
            if(finding.previous){
                finding.previous.next=finding.next;
            }               
            finding.previous=this.tail;
            if(finding.next){
                finding.next.previous=finding.previous;
            }

            finding.next = null;
            
            this.tail = finding;
        }

    },

    addNewList(finding, key, value){
        finding = {key, value, hitCount:1};
       
        if(!this.head){
            this.head = finding;
            this.tail = finding;
            finding.next = null;
            finding.previous=null;
        }
        else{
            finding.previous = this.tail;
            this.tail.next = finding;
            finding.next = null;
            this.tail=finding;            
        }

        this.hashMap.set(key, finding);
    },

    print(){

        let next = this.head;
        while(next){
            //console.log(next)
            console.log("검색어:"+next.key+" 검색 링크 갯수:"+next.value.length+" hitCount:"+next.hitCount);
            next = next.next;
        }
    }

}
/*
cacheList.init(3);

console.log(cacheList.cacheCount);

cacheList.add(0,11);
cacheList.add(1,12);
cacheList.add(1,13);
cacheList.add(2,13);
cacheList.add(3,13);

*/
export {cacheList};
