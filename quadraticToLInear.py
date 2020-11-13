​def​ ​greatestNumber​(array):
​ 	  ​for​ i ​in​ array:
​ 	    ​# Assume for now that i is the greatest:​
​ 	    isIValTheGreatest = True
​
​ 	    ​for​ j ​in​ array:
​ 	      ​# If we find another value that is greater than i,​
​ 	      ​# i is not the greatest:​
​ 	      ​if​ j > i:
​ 	        isIValTheGreatest = False
​
​ 	    ​# If, by the time we checked all the other numbers, i​
​ 	    ​# is still the greatest, it means that i is the greatest number:​
​ 	    ​if​ isIValTheGreatest:
​ 	      ​return​ i


def greatestNumberRevision(array):
    greatestNUm = array[0]

    for i in array:
        if i > greatestNUm:
            greatestNUm = i


    return greatestNUm
