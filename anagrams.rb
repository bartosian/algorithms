def number_of_paths(n)
  return 0 if n < 0
  return 1 if n == 1 || n == 0
  return number_of_paths(n - 1) + number_of_paths(n - 2) + number_of_paths(n - 3)
end


def anagrams_of(string)
  return [string[0]] if string.length == 1

  collection = []

  substring_anagrams = anagrams_of(string[1, string.length - 1])

  substring_anagrams.each do |substring_anagram|
    (0..substring_anagram.length).each do |index|
      copy = String.new(substring_anagram)

      collection << copy.insert(index, string[0])
    end
  end

  return collection
end
