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

def max(arr):
    max_el = arr[0]
    max_ind = 0

    for i in range(1, len(arr)):
        if (arr[i] > max_el):
            max_el = arr[i]
            max_ind = i
    return max_el


def quicksort(arr):
    if (len(arr) < 2):
        return arr
    else:
        pivot = arr[0]
        less = [i for i in arr[1:] if i <= pivot]
        greater = [i for i in arr[1:] if i > pivot]

        return quicksort(less) + [pivot] + quicksort(greater)



                    