graph = {}
graph["you"] = ["Alice", "Bob", "Claire"]
graph["Bob"] = ["Anuj", "Peggy"]
graph["Alice"] = ["Peggy"]
graph["Claire"] = ["Thom", "Johny"]
graph["Anuj"] = []
graph["Peggy"] = []
graph["Thom"] = []
graph["Johny"] = []

from collections import deque


def is_seller(name):
    if (name == "Johny"):
        return True


def search_for_seller(name):
    searched_queue = deque()
    searched_queue += graph[name]
    searched_people = []

    while searched_queue:
        searched_person = searched_queue.popleft()

        if (searched_person not in searched_people):
            if (is_seller(searched_person)):
                print ("We found seller!")
                print ("It's " + searched_person)
                return True
            else:
                searched_queue += graph[searched_person]
                searched_people.append(searched_person)
    return False


print(search_for_seller("you"))