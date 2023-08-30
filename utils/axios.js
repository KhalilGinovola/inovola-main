let $axios
const userToken = "Inovola_user_token"

function initializeAxios(axiosInstance) {
  $axios = axiosInstance
}

function setHeaderToken() {
  const token = localStorage.getItem(userToken)
  if (token) {
    $axios.setToken(`Bearer ${token}`)
  } else {
    $axios.setToken()
  }
}

export { $axios, userToken, initializeAxios, setHeaderToken }
