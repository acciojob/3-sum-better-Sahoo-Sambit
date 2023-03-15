function threeSum(arr, target) {
// write your code here
  arr.sort((a,b)=>a-b);
  let closestSum= Infinity;
  for (let i = 0; i < arr.length-2; i++) {
  	let left=i+1,right=arr.length-1;
	while (left<right) {
		const currSum=arr[i]+arr[left]+arr[right]
	}
	  if(Math.abs(currSum-target)<Math.abs(closestSum-target)){
		  closestSum=currSum;
	  }
	  if(currSum<target){
		  left++;
	  }else{
		  right--;
	  }
  }
}

module.exports = threeSum;
