

const click_counter = {
  clicks: 10,
};

console.log(click_counter.clicks);
click_counter.clicks = 0;
console.log(click_counter.clicks);


// Improved version of above code

const click_counter = {
    _clicks: 10,

    get clicks(){
        return this._clicks;
    }
};


console.log(click_counter.clicks);
click_counter.clicks = 0;
console.log(click_counter.clicks);


// Improved version of above code with setter capability

const click_counter = {
    _clicks: 10,

    get clicks(){
        return this._clicks;
    },

    set clicks(value) {
        if(value < this._clicks)
            return;
        else
            this._clicks = value;

    }
};


console.log(click_counter.clicks);
click_counter.clicks = 11;
console.log(click_counter.clicks);



