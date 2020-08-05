def main(num, pairs)
  uf = UF.new(num)

  pairs.each do |num1, num2|
    unless uf.connected?(num1, num2)
      uf.union(num1, num2)
      puts "#{num1.to_s} #{num2.to_s}"
    end
  end
end

class QuickFindUF
  def initialize(n)
    @objects = (0..n).to_a
  end

  def connected?(p, q)
    @objects[p] == @objects[q]
  end

  def union(p, q)
    pid = objects[p]
    qid = objects[q]

    @objects.each_with_index do |item, index|
      @objects[index] = qid if @objects[index] == pid
    end
  end
end

class QuickUnionUF
  def initialize(n)
    @objects = (0..n).to_a
  end

  def connected?(p, q)
    root(p) == root(q)
  end

  def union(p, q)
    i = root(p);
    j = root(q);
    id[i] = j
  end


  private
  def root(i)
    while i != @objects[i]
      i = @objects[i]
    end
     i
  end
end


class TreeSum
  def count(arr)
    len = arr.length
    count = 0

    (0...len).each do |i|
      j = i + 1

      (j...len).each do |j|
        k = j + 1

        (k...len).each do |k|
          if arr[i] + arr[j] + arr[k] == 0
            count += 1
          end
        end
      end
    end
  end
end



def binarySearch(arr, key)
  low = 0
  high = arr.length - 1

  while low <= high
    mid = low + (high - low) / 2

    return mid if key == arr[mid]
    high = mid - 1 if key < arr[mid]
    low = mid + 1 if key > arr[mid]
  end
  -1
end


class LinkedList
  def initialize
    @head = nil
  end

  def is_empty?
    @head.nil?
  end

  def push(item)
    old_head = @head
    @head = Node.new
    @head.text = item
    @head.next = old_head
  end

  def pop
    item = @head.text
    @head = @head.next
    item
  end
end

class Node
  def initialize(text)
    @text = text
    @next = nil
  end
end


class StackArray
  def initialize(capacity)
    @s = Array.new(capacity)
    @n = 0
  end

  def isEmpty?
    @n == 0
  end

  def push(item)
    @s[@n] = item
    @n += 1
  end

  def pop
    item = @s[@n]
    @n -= 1
    item
  end
end

class ResizingArray
  def initialize(n)
    @arr = Array.new n
    @N = 0
  end

  def push(item)
    resize(2 * s.length) if @N == @arr.length
    @arr[@N += 1] = item
  end

  def resize(capacity)
    copy = Array.new capacity
    @arr.each do |item, index|
      copy[index] = item
    end

    @arr = copy
  end
end










