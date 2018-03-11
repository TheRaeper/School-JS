
const main = () => setTimeout(() => {
  fetch('/checknewdata')
    .then(res => res.json())
    .then(jsondata => jsondata.newdata ? location.reload() : main())
}, 500)

main()
