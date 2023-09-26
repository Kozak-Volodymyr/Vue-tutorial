const events=new Map();
export default{
    $on(event,fn){
        if(!events.has(event)){
            events.set(event,[])
        }
        events.get(event).push(fn)
    },
    $off(eventName,fn){
        throw {message:'Not implemented'}
    },
    $emit(eventName,data){
        if(events.has(eventName)){
            events.get(eventName).forEach(fn => {
                fn(data)
            });
        }
    }
}