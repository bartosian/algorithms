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

  def pop
    item = @arr[@N]
    @arr[@N] = nil
    @N -= 1

    if @N > 0 and @N == @arr.len / 4
      resize(@arr.len / 2)
    end

    item
  end
end


class LinkedListQueue
  def initialize
    @first = nil
    @last = nil
  end

  def is_empty?
    @first.nil?
  end

  def enqueue(item)
    old_last = @last
    @last = Node.new
    @last.item = item
    @last.next = nil

    @first = @last if is_empty? else old_last.next = @last
  end

  def dequeue
    item = @first.item
    @first = @first.next

    @last = nil if is_empty?
    item
  end
end

class DijkstraTwoStack
  def self.evaluate(expr)
    expr_arr = expr.split("")
    ops = []
    vals = []

    until expr_arr.empty?
      s = expr_arr.shift

      if s == "("
      elsif s == "+"
        ops.append s
      elsif s == "*"
        ops.push s
      elsif s == ")"
        op = ops.pop
        vals.append(vals.pop + vals.pop) if op == "+"
        vals.append(vals.pop * vals.pop) if op == "*"
      else
        vals.append s.to_i
      end
    end
    vals.pop
  end
end

def recursive_factorial(n)
  return 1 if n <= 1

  n * recursive_factorial(n - 1)
end

@cache = [0,1]

def fib(n)
  return @cache[n] if @cache[n]

  @cache[n] = fib(n - 1) + fib(n - 2)
end

def merge(left_array, right_array)
  
end

# Mergesort
def merge_sort(unsorted_array)
  mid = unsorted_array.length / 2
  first_half = merge_sort(unsorted_array.slice(0...mid))
  second_half = merge_sort(unsorted_array.slice(mid...unsorted_array.length))

  print first_half
  print second_half
end


