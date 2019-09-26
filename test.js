let n = 2;
let nums = '1 2';
nums = nums.split(' ');
let m = nums[0];
let present = nums[0];
let a = false;
function count(n, nums) {
    for (let i = 1; i< n; i ++) {
        present = nums[i];
        let max = present > m ? present : m;
        let min = present < m ? present : m;
        console.log(min)
        console.log(max)
        parseInt()
        while (min <= max) {
            if (min == max) {
                a = true;
            }
            min = min * 2;
        }
        m = nums[i];
    }
    console.log(a === false ? 'NO' : 'YES');
}
count(n, nums);