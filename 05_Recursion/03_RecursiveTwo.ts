function sumRange(num: number): any {
    // if(num === 1) return 1
    // return num + sumRange(num - 1)
    return num === 1 ? 1 : num + sumRange(num - 1);
}


sumRange(3)