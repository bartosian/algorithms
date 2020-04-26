def bubble_sort(list):
    unsorted_until_id = len(list) - 1
    sorted = False

    while not sorted:
        sorted = True

        for i in range(unsorted_until_id):
            if(list[i] > list[i + 1]):
                sorted = False
                list[i], list[i + 1] = list[i + 1], list[i]
        unsorted_until_id -= 1

    return list 


print(bubble_sort([1, 90, 5, 7, 2, 4]))                