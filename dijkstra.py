graph = {}
graph["start"] = {}
graph["start"]["a"] = 5
graph["start"]["b"] = 2
graph["a"] = {}
graph["a"]["c"] = 4
graph["a"]["d"] = 2
graph["b"] = {}
graph["b"]["a"] = 8
graph["b"]["d"] = 7
graph["c"] = {}
graph["c"]["finish"] = 3
graph["c"]["d"] = 6
graph["d"] = {}
graph["d"]["finish"] = 1
graph["finish"] = {} 

costs = {}
infinity = float("inf")
costs["a"] = 5
costs["b"] = 2
costs["c"] = infinity
costs["d"] = infinity
costs["finish"] = infinity

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["c"] = None
parents["d"] = None
parents["finish"] = None

processed = []

def find_lowest_cost_node(costs):
    lowest_node = None
    lowest_cost = float("inf")

    for node in costs.keys():
        cost = costs[node]
        if (cost < lowest_cost and node not in processed):
            lowest_node = node
            lowest_cost = cost

    return lowest_node

node = find_lowest_cost_node(costs)

while node is not None:
    node_cost = costs[node]
    neighbors = graph[node]

    for key in neighbors.keys():
        neighbor_cost = neighbors[key]
        new_cost = neighbor_cost + node_cost

        if (new_cost < costs[key]):
            costs[key] = new_cost
            parents[key] = node

    processed.append(node)
    node = find_lowest_cost_node(costs)


print(costs)
print(parents)    