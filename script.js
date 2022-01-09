
// Compose mail and close
var composeOpen = document.getElementById("mailOpen");
var newMail = document.getElementById("composeButton");
var composeClose = document.getElementById("mailClose");

composeButton.addEventListener("click", function composeEmail() {
    composeOpen.style.display = "unset";
  });
composeClose.addEventListener("click", function closeEmail() {
    composeOpen.style.display = "none";
  });


// Primary mail
async function getPrimaryMails() {
    spin.style.display = "unset";
    await fetch(`https://60c82f8dafc88600179f64cd.mockapi.io/PrimaryMails/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        response = res;
        spin.style.display = "none";
        if (flag == 0) displayPrimary(response.primaryEmail);
        if (flag == 1) displaySent(response.sentEmail);
        if (flag == 2) displayDrafts(response.drafts);
      });
    console.log(response);
  }

