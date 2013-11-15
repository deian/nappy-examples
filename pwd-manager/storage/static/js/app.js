function decrypt(mp, data) {
  return data;
}

function app(up, endpoint, manager) {
  console.log("storage up: E(" + up.username + "@"+up.password+")");
  console.log("storage endpoint: " + endpoint);

  // Taint to storage /\ pwd
  enableSandbox();
  // can just pass in:
  setPrivacyLabel(new Label([ new Role(endpoint),
                              new Role(manager)]));

  console.log("storage label: "+privacyLabel()+'');

  function handleDecrypt(event) {

    console.log("storage got message from: "+event.origin);

    if (event.data.status !== "decrypt") {
      return;
    }

    var master_password = event.data;
    console.log("storage got master password: " + master_password);
    console.log("storage got message from: " + event.origin
               +"= u: " + up.username+", p: "+up.password);

    var du = decrypt(master_password, up.username);
    var dp = decrypt(master_password, up.password);

    // TODO check label of source to be pwd /\ $endpoint
    // => don't need to
    console.log("storage sending message to pwd: "+!(event.source== null));
    console.log("event.origin="+event.origin);
    try {
      event.source.postMessage({ status: "done"
                               , username: du
                               , password: dp }, "*");
    } catch(e) {
      console.log("storage failed to send message to "+event.origin+": "+e);
    }
  }

  window.addEventListener("message", handleDecrypt, false);
}
