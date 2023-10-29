// JavaScript for Dog Adoption Website

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();
  const query = document.querySelector('input[name="query"]').value;
  if (query) {
    alert(`You searched for: ${query}`);
  } else {
    alert('Please enter a search query.');
  }
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', handleFormSubmission);
