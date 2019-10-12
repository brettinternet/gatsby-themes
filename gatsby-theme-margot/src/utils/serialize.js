/**
 * From https://code.google.com/archive/p/form-serialize/
 * @param {Element} form element
 */
export default function serialize(form) {
  if (!form || form.nodeName !== "FORM") {
    return
  }
  var i,
    j,
    q = []
  for (i = form.elements.length - 1; i >= 0; i = i - 1) {
    if (form.elements[i].name === "") {
      continue
    }
    switch (form.elements[i].nodeName) {
      case "INPUT":
        switch (form.elements[i].type) {
          case "email":
          case "number":
          case "text":
          case "hidden":
          case "password":
          case "button":
          case "reset":
          case "submit":
            q.push(
              form.elements[i].name +
                "=" +
                encodeURIComponent(form.elements[i].value)
            )
            break
          case "checkbox":
          case "radio":
            if (form.elements[i].checked) {
              q.push(
                form.elements[i].name +
                  "=" +
                  encodeURIComponent(form.elements[i].value)
              )
            }
            break
          case "file":
            break
          // no default
        }
        break
      case "TEXTAREA":
        q.push(
          form.elements[i].name +
            "=" +
            encodeURIComponent(form.elements[i].value)
        )
        break
      case "SELECT":
        switch (form.elements[i].type) {
          case "select-one":
            q.push(
              form.elements[i].name +
                "=" +
                encodeURIComponent(form.elements[i].value)
            )
            break
          case "select-multiple":
            for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
              if (form.elements[i].options[j].selected) {
                q.push(
                  form.elements[i].name +
                    "=" +
                    encodeURIComponent(form.elements[i].options[j].value)
                )
              }
            }
            break
          // no default
        }
        break
      case "BUTTON":
        switch (form.elements[i].type) {
          case "reset":
          case "submit":
          case "button":
            q.push(
              form.elements[i].name +
                "=" +
                encodeURIComponent(form.elements[i].value)
            )
            break
          // no default
        }
        break
      // no default
    }
  }
  return q.join("&")
}
