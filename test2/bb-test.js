/**
 * Created by liuhuijuan on 15/11/25.
 */
describe("c-test", function() {
    it("combine params",function(){
        expect(53).toEqual(curry(add,50)(1,2));
    });
});

function curry(fn){
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        console.log(finalArgs);    //[50,1,2]
        return fn.apply(this,finalArgs);
    }
}

function add(num1,num2,num3){
    return num1+num2+num3;
}


