/**
 * Write a function to find the date 40 months after your DOB.
 * Assumption: Each month is of 30.5 days
 */

function get_40_months_after_dob(date_of_birth) {
    const dob = new Date(date_of_birth);

    const dob_ms = dob.getTime();

    const ms_to_add = 40 * 30.5 * 24 * 60 * 60 * 1000;


    const result_in_ms = dob_ms + ms_to_add;

    return new Date(result_in_ms);

}


console.log(get_40_months_after_dob('1993-03-23')); //1996-07-25T00:00:00.000Z


