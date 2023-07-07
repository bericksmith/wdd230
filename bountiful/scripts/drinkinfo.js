
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orderForm');
    const outputDiv = document.getElementById('output');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const firstName = form.elements.firstName.value;
      const lastName = form.elements.lname.value;
      const email = form.elements.email.value;
      const phone = form.elements.phone.value;
      const fruit1 = form.elements.fruits1.value;
      const fruit2 = form.elements.fruits2.value;
      const fruit3 = form.elements.fruits3.value;
      const instructions = form.elements.description.value;
  
      const output = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Fruit 1:</strong> ${fruit1}</p>
        <p><strong>Fruit 2:</strong> ${fruit2}</p>
        <p><strong>Fruit 3:</strong> ${fruit3}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
      `;
  
      outputDiv.innerHTML = output;
      form.reset();
    });
  });
  