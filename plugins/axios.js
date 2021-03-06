export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const http = $axios.create()

  // Inject to context as $http
  inject('http', http)
}
