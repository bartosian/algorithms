class Node

  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node

  def initialize(first_node)
    @first_node = first_node
  end

  def read(index)
    current_node=first_node
    current_index = 0


    while current_index < index do
      current_node = current_node.next_node
      current_index += 1


      return nil unless current_node
    end

    return current_node.data
  end

  def index_of(value)
    current_node = first_node
    current_index = 0

    begin
      if current_node.data == value
        return current_index
      end

      current_node = current_node.next_node
      current_index += 1
    end while current_node

    return nil
  end

  def insert_at_index(index, value)
    new_node = Node.new(value)

    if index == 0
      new_node.next_node = first_node
      self.first_node = new_node
    else
      current_node = first_node
      current_index = 0

      while current_index < (index - 1) do
        current_node = current_node.next_node
        current_index += 1
      end

      new_node.next_node = current_node.next_node
      current_node.next_node = new_node
    end
  end

end