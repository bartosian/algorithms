def sumDivCon(arr):
    if (len(arr) == 1):
        return arr[0]
    else:
        return arr.pop(0) + sumDivCon(arr)

def countNumberInLIst(arr):
    if (len(arr) == 1):
        return 1
    else:
        arr.pop(0)
        return 1 + countNumberInLIst(arr)

print(countNumberInLIst([1,2,3,4,5,6,7,8,9]))                    