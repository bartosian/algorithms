​def​ ​add_until_100​(array)
​ ​return​ 0 ​if​ array.​length​ == 0
 summ = add_until_100(array[1, array.​length​ - 1])
​ ​if​ array[0] + summ > 100
​   ​return​ summ
​ else​
​ 	​return​ array[0] + summ
​ end​
end

​def​ ​golomb​(n, memo={})
​ ​return​ 1 ​if​ n == 1

 if memo.has_value?(n)
   return memo[n]
 else
   memo[n] = 1 + golomb(n - golomb(golomb(n - 1), memo), memo), memo)
 end

​ ​return​ memo[n];
​end
