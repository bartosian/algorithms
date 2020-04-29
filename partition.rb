class SortableArray

  attr_reader :array

  def initialize(array)
    @array = array
  end

  def partition!(left_pointer, right_pointer)
    pivot_position = right_pointer
    pivot = @array[pivot_position]

    right_pointer -= 1

    while true do
      while @array[left_pointer] < pivot do
        left_pointer += 1
      end

      while @array[right_pointer] > pivot do
        right_pointer += 1
      end

      if left_pointer >= right_pointer
        break
      else
        swap(left_pointer, right_pointer)
      end
    end

    swap(left_pointer, pivot_position)
    return left_pointer
  end

  def swap(pointer_1, pointer_2)
    temp_value = @array[pointer_1]
    @array[pointer_1] = @array[pointer_2]
    @array[pointer_2] = temp_value
  end

  def quicksort!(left_index, right_index)

    if right_index - left_index <= 0
      return
    end

    pivot_position = partition!(left_index, right_index)

    quicksort!(left_index, pivot_position - 1)

    quicksort!(pivot_position + 1, right_index)

  end

end