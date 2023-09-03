const middleware = {}

middleware['routerToDetails'] = require('..\\middleware\\routerToDetails.js')
middleware['routerToDetails'] = middleware['routerToDetails'].default || middleware['routerToDetails']

export default middleware
