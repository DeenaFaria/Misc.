function lcs(a,b)
{
    let m=0,x=0,dp=[];
    for(let i=0;i<a.length;i++)
        {
            dp[i]=[];
            for(let j=0;j<b.length;j++)
                {
                    dp[i][j]=a[i]==b[j]?(dp[i-1]?.[j-1]||0)+1:0;
                    if(dp[i][j]>m)m=dp[x=i][j];}
                }
                
    return a.slice(x-m+1,x+1);
}

let [,,a,b]=process.argv;
console.log(lcs(a,b));
