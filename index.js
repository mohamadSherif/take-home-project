addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  
  const url = 'https://cfw-takehome.developers.workers.dev/api/variants'
  const init = {headers: {'content-type': 'text/html',},}
  const responder = await fetch(url)
  const result = await responder.json()
  var arr = result.variants
  
  // Fetch both of the links
  const responses = await Promise.all([fetch(arr[0], init), fetch(arr[1], init)])
  const results = await Promise.all([gatherResponse(responses[0]), gatherResponse(responses[1])])

  const NAME = 'experiment-cookie'
  const URL1_RESPONSE = new Response(results[0],init)
  const URL2_RESPONSE = new Response(results[1],init)

  // Determine which group this requester is in.
  const cookie = request.headers.get('cookie')
  if (cookie && cookie.includes(`${NAME}=url2`)) {
    return URL2_RESPONSE
  } else if (cookie && cookie.includes(`${NAME}=url1`)) {
    return URL1_RESPONSE
  } else {
    // if no cookie then this is a new client, decide a group and set the cookie
    let group = Math.random() < 0.5 ? 'url1' : 'url2' // 50/50 split
    let response = group === 'url2' ? URL2_RESPONSE : URL1_RESPONSE
    response.headers.append('Set-Cookie', `${NAME}=${group}; path=/`)
    return response 
  }
}

/**
 * gatherResponse awaits and returns a response body as a string.
 * Use await gatherResponse(..) in an async function to get the response body
 * @param {Response} response
 */
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('content-type')
  if (contentType.includes('application/json')) {
    return await response.json()
  } else if (contentType.includes('application/text')) {
    return await response.text()
  } else if (contentType.includes('text/html')) {
    return await response.text()
  } else {
    return await response.text()
  }
}
