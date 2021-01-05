function relax(u, v, w) {
  if (d[v] > d[u] + w(u, v)) {
    d[v] = d[u] + w(u, v);
    p[v] = u;
  }
}

// Θ(V lg V + E)
function dijkstra(g, w, s) {
  s = [];
  q = buildMinHeap();

  while (q.size) {
    u = extractMin(q);
    s.add(u)

    for each v in adj[u] {
      relax(u,v,w);
    }
  }
}
