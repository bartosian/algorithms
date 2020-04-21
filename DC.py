def sumDivCon(arr):
    if (len(arr) == 1):
        return arr[0]
    else:
        return arr.pop(0) + sumDivCon(arr)

print(sumDivCon([1,2,3,4,5,6,6,7,8,4]))            