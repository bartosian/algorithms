class Person

  attr_accessor :name, :friends

  def initialize(name)
    @name = name
    @friends = []
    @visited = false
  end

  def add_friend(friend)
    @friends << friend
  end

  def display_network
    to_reset = [self]

    queue = [self]
    self.visited = true

    while queue.any?
      current_vertex = queue.shift
      puts current_vertex.name

      current_vertex.friends.each do |friend|
        if !friend.vidited
          to_reset << friend
          queue << friend
          friend.vidited = true
        end
      end
    end


    to_reset.each do |node|
      node.visited = false
    end
  end

end