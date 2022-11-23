
//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        let rowMaxOne = -1;
        let currCol = m-1;
    
        for(let i=0; i<n; i++){
          while(currCol >=0 && arr[i][currCol] == 1){
            currCol -= 1;
            rowMaxOne = i;
          }
        }
        return rowMaxOne;
    }
}


////-----------------------------------------------------------------------------------------------------///////////////////////


//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        let maxnumber=0
        let row 
        for (let i=0;i<n;i++){
            let total=0
            for (let j=0;j<m;j++){
                if(arr[i][j]==1){
                    total++
                }
            }
            if(total>maxnumber){
                maxnumber=total
                row=i
            }
            
        }
        if(maxnumber==0) return -1
        return row
        
    }
}



////////--------------------------------------------------------------------//////////////////////////////////////////////



//User function Template for javascript

/**
 * @param {number[][]} arr
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/
class Solution {
    
    rowWithMax1s(arr, n, m){
        if(arr === null || n === 0) {
            return 0;
        }
        var i = 0, j = m-1, maxRow = -1;
        while(i<n && j>=0) {
            if(arr[i][j] === 1) {
                maxRow = i;
                j--;
            }
            else {
                i++;
            }
        }
        return maxRow;
    }
}