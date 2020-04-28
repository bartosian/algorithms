class PrintManager

  def initialize
    @queue = []
  end

  def queue_print_job(document)
    @queue.push(document)
  end

  def run
    while @queue.any?
      print(@queue.shift)
    end
  end

  private

  def print
    puts document
  end

end