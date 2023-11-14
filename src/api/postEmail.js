async function postEmail(email) {
  try {
    const res = await fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'xauthkey': process.env.REACT_APP_API_XAUTHKEY,
      },
      body: JSON.stringify({
        'email': email
      })
    })
    return res    
  } catch (error) {
    return error
  }

}

export default postEmail