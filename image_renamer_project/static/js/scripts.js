// Function to show alert for mentor approval
function mentorapprove() {
  if (window.confirm("This will submit your approval list")) {
    alert("Your submissions are sent successfully!");
  }
}

// Function to show alert for hod approval
function hodapprove() {
  if (window.confirm("This will submit your approval list")) {
    alert("Your submissions are sent successfully!");
  }
}

// Function to show alert for submitting cart
function submitcart() {
  if (window.confirm("This will submit your Priority list")) {
    alert("Your Priority list has been submitted successfully!");
  }
}

function addmentor() {
  // Check if change_reason and choose_reason have content
  var changeReasonInput = document.getElementsByName("change_reason")[0];
  var chooseReasonInput = document.getElementsByName("choose_reason")[0];

  var changeReason = changeReasonInput.value.trim();
  var chooseReason = chooseReasonInput.value.trim();

  if (!changeReason || !chooseReason) {
      alert("Please fill in both reasons before submitting.");
      return false;  // Prevent the form submission
  }

  if (window.confirm("Your request will be sent to the mentor. Do you want to continue?")) {
      alert("Your request has been sent successfully");
        document.forms[0].submit();
  } else {
      return false; // Prevent the form submission
  }
}



// Function to move mentor card up
function moveUp(mentorCard) {
  const prevCard = mentorCard.previousElementSibling;
  if (prevCard) {
    mentorCard.parentElement.insertBefore(mentorCard, prevCard);
  }
}

// Function to move mentor card down
function moveDown(mentorCard) {
  const nextCard = mentorCard.nextElementSibling;
  if (nextCard) {
    mentorCard.parentElement.insertBefore(nextCard, mentorCard);
  }
}

// Perform actions in mentor cart
document.addEventListener("DOMContentLoaded", function () {
  const moveUpButtons = document.querySelectorAll(".move-up-btn");
  const moveDownButtons = document.querySelectorAll(".move-down-btn");
  const removeButtons = document.querySelectorAll(".remove-btn");

  moveUpButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const mentorCard = this.closest(".mentor-card");
      moveUp(mentorCard);
    });
  });

  moveDownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const mentorCard = this.closest(".mentor-card");
      moveDown(mentorCard);
    });
  });

  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const mentorCard = this.closest(".mentor-card");
      mentorCard.remove();
    });
  });
});
