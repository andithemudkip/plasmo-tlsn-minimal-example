import init from "tlsn-js"

export {}
init({ loggingLevel: "Debug" })
  .then(() => {
    console.log("TLSN initialized")
  })
  .catch((err) => {
    console.error(err)
  })
