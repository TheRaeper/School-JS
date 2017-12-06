let mainfunction = () => {
  setTimeout(() => {
    fetch('/checknewdata')
    .then((res) => {
      return res.json()
    }).then((jsondata) => (jsondata.newdata) ? location.reload() : mainfunction())
  }, 500)
}

mainfunction()
