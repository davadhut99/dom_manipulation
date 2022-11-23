
//User function Template for javascript

/**
 * @param {string} S
 * @return {string} 
*/

class Solution {
    longestPalin(S){
      //code here
      let ans=""
      for(let i=0;i<S.length;i++){
          let even=check(S,i,i+1);
          let odd=check(S,i,i);
          let len=Math.max(even.length,odd.length);
          if(even.length>odd.length && even.length>ans.length){
              
              // console.log(even)
              ans=even
          }
          else if(even.length<=odd.length && odd.length>ans.length){
              // console.log(odd)
              ans=odd;
          }
      }
      
      function check(S,left,right){
          let index=[0,0];
          let i=left;
          let j=right;
          while(i>=0 && j<S.length){
              if(S[i]==S[j]){
                  index[0]=i;
                  index[1]=j;
                  i--;j++;
              }
              else{
                  break;
              }
          }
          return S.substring(index[0],index[1]+1);
      }
      return ans
    }
    
  }

  //------------------------------------------------------------------




  
//User function Template for javascript

/**
 * @param {string} S
 * @return {string} 
*/

class Solution {
    longestPalin(S){
      //code here
        if(S.length==1)return S;
          var start=0;
          var maxlength=1;
          for(var i=1; i<S.length; i++)
          {
              //for even;
              var l=i-1;
              var r=i;
              while(l>=0 && r<S.length && S.charAt(l)==S.charAt(r))
              {
                  if(r-l+1 >maxlength)
                  {
                      maxlength=r-l+1;
                      start=l;
                  }
                  l--;
                  r++;
              }
              l=i-1;
              r=i+1;
              while(l>=0 && r<S.length && S.charAt(l)==S.charAt(r))
              {
                  if(r-l+1 >maxlength)
                  {
                      maxlength=r-l+1;
                      start=l;
                  }
                  l--;
                  r++;
              }
          }
          return S.substring(start,maxlength+start);
    }
  }


  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  
//User function Template for javascript

/**
 * @param {string} S
 * @return {string} 
*/

class Solution {
    longestPalin(S){
      //code here
      var low, high;
      var start = 0, end = 1;
      
      for(var i=1;i<S.length;i++) {
          
          //for even substring
          low = i-1, high = i;
          while(low>=0 && high<S.length && S[low] == S[high]) {
              if(high-low+1 > end) {
                  start = low;
                  end = high-low + 1;
              }
              low--;high++;
          }
          
          //for odd substring
          low = i-1, high = i+1;
          while(low>=0 && high<S.length && S[low] == S[high]) {
              if(high-low+1 > end) {
                  start = low;
                  end = high-low + 1;
              }
              low--;high++;
          }
      }
      
      var returnString = "";
      for(var i=start;i<=(start+end -1);i++) {
          returnString = returnString + S[i];
      }
      
      return returnString;
    }
  }

  //-------------------------------------------------------------------------