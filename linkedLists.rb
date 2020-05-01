class Node

  attr_accessor ​:data​, ​:next_node​, ​:previous_node

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

  def delete_at_index(index)
    if index == 0
      self.first_node = first_node.next_node
    else
      current_node = first_node
      current_index = 0


      while current_index < (index - 1) do
        current_node = current_node.next_node
        current_index += 1
      end

      node_after_deleted_node = current_node.next_node.next_node

      current_node.next_node = node_after_deleted_node
    end
  end

end

class DoublyLinkedList

  attr_accessor :first_node, :last_node

  def initialize(first_node=nil, last_node=nil)
    @first_node=first_node
    @last_node=last_node
  end

  def insert_at_end(value)
    new_node = Node.new(value)

    if !first_node
      @first_node = new_node
      @last_node = new_node
    else
      new_node.previous_node = @last_node
      @last_node.next_node = new_node
      @last_node = new_node
    end
  end

  def remove_from_front
    removed_node = @first_node
    @first_node = @first_node.next_node
    return removed_node;
  end

end


class Queue

  attr_accessor :queue

  def initialize
    @queue = DoublyLinkedList.new
  end

  def enque(value)
    @queue.insert_at_end(value)
  end

  def dequeue
    removed_node = @queue.remove_from_front
    return removed_node.data
  end

  def tail

    return @queue.last_node.data

  end

end