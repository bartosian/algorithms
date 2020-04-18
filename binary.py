import math

def binary_search(list, item):
       left = 0
       right = len(list) - 1

       while (left <= right):
           mid = math.floor((left + right) / 2)
           guess = list[mid]

           if (guess == item):
               return mid 
           if (guess > item):
               right = mid - 1
           else:
               left = mid + 1 
        
       return None 

my_list = [1, 3, 7, 8, 44, 60, 334, 343434]
print(binary_search(my_list, 334))