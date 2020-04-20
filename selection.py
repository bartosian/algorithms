def findMin(arr):
    minItem = arr[0]
    minIndex = 0

    for item in range(1, len(arr)):
        nthItem = arr[item]
        if (nthItem < minItem):
            minItem = nthItem
            minIndex = item

    return minIndex        



def selecton_sort(arr):
    newArr = []

    for _ in range(len(arr)):
        minItem = findMin(arr)
        newArr.append(arr.pop(minItem))

    return newArr


array = [1, 69, 32, 89, 34 , 787, 454, 2, 4, 0]

print(selecton_sort(array))