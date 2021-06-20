function merge(arr1, arr2) {
    const newArr = [];  
    
    const len1 = arr1.length;
    const len2 = arr2.length;
    let i = 0; 
    let j = 0; 
    while(i < len1 && j < len2){
        if(arr1[i] <= arr2[j]){
            newArr.push(arr1[i]); 
            i++; 
        }
        else{
            newArr.push(arr2[j]); 
            j++;
        }
    }

    while(i < len1){
        newArr.push(arr1[i]); 
        i++;
    }
    while(j < len2){
        newArr.push(arr2[j]);
        j++;
    }
    return newArr; 
}

function mergeSort(arr) {
    if(arr.length < 2){
        return arr; 
    }

    const half = Math.floor(arr.length / 2); 
    let left = arr.slice(0, half); 
    let right = arr.slice(half, arr.length);
    
    left = mergeSort(left);
    right = mergeSort(right); 
    return merge(left, right);
}

module.exports = { merge, mergeSort};