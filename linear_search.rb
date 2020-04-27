def linear_search(array, value)
    array.each do |element|
      if element == value
        return value
      elsif element > value
        break
      end
    end

    nil
end

def binary_search(array, value)
  left_bound = 0
  right_bound = array.length - 1

  while left_bound <= right_bound do
    mid_point = (left_bound + right_bound) / 2
    value_at_mid = array[mid_point]

    if value_at_mid == value
      return mid_point
    elsif value_at_mid < value
      left_bound = mid_point + 1
    elsif value_at_mid > value
      right_bound = mid_point - 1
    end  
  end

  return nil
end

def every_other(array)
  new_array = []

  array.each_with_index do |element, index|
    new_array << element if index.even?
  end  

  return new_array
end 

def every_other(array)
  new_array = []
  index = 0

  while index < array.length
    new_array << array[index]
    index += 2
  end 
  
  return new_array
end   