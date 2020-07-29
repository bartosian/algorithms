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
  attr_accessor :objects

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