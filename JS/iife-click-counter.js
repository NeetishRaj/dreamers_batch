// Making a click counter API using IIFE


const ClickCounter = (function() {
    let _clicks = 0;

    const update_clicks = () => {
        _clicks += 1;
    }
    
    const get_click_counts = () => {
        console.log("Total click counts: " + _clicks);
    }

    return {
        update_clicks,
        get_click_counts
    }
})();

ClickCounter.get_click_counts();

ClickCounter.update_clicks();
ClickCounter.update_clicks();
ClickCounter.update_clicks();

ClickCounter.get_click_counts();


