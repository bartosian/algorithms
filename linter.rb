class Linter

  attr_reader :error

  def initialize
    @stack = []
  end

  def lint(text)
    text.each_char.with_index do |char, index|

      if opening_brace?(char)
        @stack.push(char)
      elsif closing_brace?(char)
        if closes_most_recent_opening_brace?(char)
          @stack.pop
        else
          @error = "Incorrect closing brace: #{char} at index #{index}"
          return
        end
      end
    end

    if @stack.any?
      @error = '#{@stack.last}'
    end
  end

  private

  def opening_brace?(char)
    ["(", "[", "{"].include?(char)
  end

  def closing_brace?(char)
    [")", "]", "}"].include?(char)
  end

  def most_recent_opening_brace
    @stack.last
  end

  def closes_most_recent_opening_brace?(char)
    opening_brace_of(char) == most_recent_opening_brace
  end
end

linter = Linter.new
linter.lint("(var x = { y: [1, 2, 3] })")