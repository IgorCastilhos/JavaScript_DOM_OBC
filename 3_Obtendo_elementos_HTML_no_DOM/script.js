function show() {
  // Vários elementos em uma HTML Collection:
  const listElements = document.getElementsByTagName("li");
  console.log(listElements);

  const contactInputs = document.getElementsByClassName("contact-input");
  console.log(contactInputs);

  // Vários elementos em uma NodeList:
  const contact1 = document.getElementsByName("contact1");
  console.log(contact1);

  const contacts = document.querySelectorAll("#contact-list > li > label");
  console.log(contacts);

  // Um único elemento:
  const contactList = document.getElementById("contact-list");
  console.log(contactList);

  const firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
