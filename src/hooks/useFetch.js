const fetchPaslon = async (token, type) => {
  try {
    if (type) {
      const req = await fetch(`/api/paslon/${type}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
        cache: 'no-store'
      })

      const data = await req.json()
      return data
    }

    const req = await fetch(`/api/paslon/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: 'no-store'
    })

    const data = await req.json()
    return data
  } catch (error) {
    return []
  }
}

const fetchPaslonBem = async token => {
  try {
    const req = await fetch(`/api/paslon/bem`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: 'no-store'
    })

    const data = await req.json()
    return data
  } catch (error) {
    return []
  }
}

const fetchPemilih = async token => {
  try {
    const req = await fetch(`/api/pemilih`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
      cache: 'no-store'
    })

    const data = await req.json()
    return data
  } catch (error) {
    return []
  }
}

export { fetchPaslon, fetchPemilih, fetchPaslonBem }
