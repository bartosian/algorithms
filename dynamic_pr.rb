​def​ ​add_until_100​(array)
​ ​return​ 0 ​if​ array.​length​ == 0
 summ = add_until_100(array[1, array.​length​ - 1])
​ ​if​ array[0] + summ > 100
​   ​return​ summ
​ else​
​ 	​return​ array[0] + summ
​ end​
end
