let mainfunction = () => {
  setTimeout(() => {
    fetch('/checknewdata')
    .then(function(res) {
      return res.json()
    }).then(function(jsondata) {
      if (jsondata.newdata) {
        location.reload()
      } else {
        mainfunction()
      }
    })
  }, 500)
}

mainfunction()
