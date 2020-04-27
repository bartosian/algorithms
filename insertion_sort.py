def insertion_sort(arr):
    for index in range(1, len(arr)):
        position = index 
        tmp = arr[index]

        while position > 0 and arr[position - 1] > tmp:
            arr[position] = arr[position - 1]
            position -= 1


        arr[position] = tmp