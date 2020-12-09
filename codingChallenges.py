def find_missing(input):
    sum_of_elements = sum(input)

    n = len(input) + 1
    actual_sum = (n * (n + 1)) / 2

    return actual_sum - sum_of_elements
