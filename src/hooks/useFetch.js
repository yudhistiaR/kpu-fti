const fetchPaslon = async type => {
  const req = await fetch(`/api/paslon?type=${type}`, {
    cache: 'no-store',
    next: { revalidate: 0 }
  })
    .then(res => res.json())
    .then(data => data)

  return req
}

const fetchPemilih = async npm => {
  const req = await fetch(`/api/pemilih?npm=${npm}`, {
    cache: 'no-store',
    next: { revalidate: 0 }
  })
    .then(res => res.json())
    .then(data => data)

  return req
}

export { fetchPaslon, fetchPemilih }
