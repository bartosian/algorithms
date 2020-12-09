def find_missing(input):
    sum_of_elements = sum(input)

    n = len(input) + 1
    actual_sum = (n * (n + 1)) / 2

    return actual_sum - sum_of_elements

def find_sum_of_two(A, val):
  hash = {};

  for i in A:
      j = val - i
      if j in hash:
          return True
      else:
          hash[i] = True

  return False;
