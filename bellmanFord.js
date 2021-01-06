BellmanFordSP(G, W, s)
  Initialize()

  for i = 1 to  |V| - 1
    for each edge (u, v) e E
      relax(u,v)

  for each edge (u, v) e E
        if d[v] > d[u] + W(u, v)
          then report a negative-weight cycle exists

// at the end of this algorithm all d[v] = delta(s, v), if non negative-weight cycles exist.
