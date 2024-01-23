function swapHeadAndTail(arr) {
  middle = Math.floor(arr.length/2);
  first = arr.slice(0,middle);
  if(arr.length%2 == 0){
    second = arr.slice(middle);
    return [...second, ...first];
  }else{
    second = arr.slice(middle+1);
    return [...second, arr[middle], ...first];
  }
}
