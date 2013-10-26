// This is a simple extension that sets attributes on the body element
// The nappy addon-sdk/trusted extension can read these to display a
// context menu
(function() {
  function setNappyAttribute() {
    if (this.Sandbox && Sandbox.isSandboxed()) {
      document.body.setAttribute('data-nappy-current-privacy-label', Sandbox.getPrivacyLabel()+'');
      document.body.setAttribute('data-nappy-current-trust-label', Sandbox.getTrustLabel()+'');
    }
    return true;
  }
  document.body.oncontextmenu = setNappyAttribute();
})();
