class ClickCounter {
    constructor() {
        this._clicks = 0;
    }

    get clicks() {
        return  this._clicks;
    }

    set clicks(value) {
        if(value > this._clicks)
            this._clicks = value;
    }
}


const cc = new ClickCounter();

console.log(cc.clicks);

cc.clicks += 1 ;

console.log(cc.clicks);