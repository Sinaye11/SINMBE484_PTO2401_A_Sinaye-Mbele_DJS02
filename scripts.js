const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Validation if inputs are empty
    if (dividend === "" || divider === "") {
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      return;
    }

    // Converts values to numbers
    const dividendNumber = parseFloat(dividend);
    const dividerNumber = parseFloat(divider);

    // Check if inputs are valid numbers
    if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
      throw new Error("Invalid number provided");
    }

    // Checks for invalid division and prints error message
    if (dividerNumber === 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error(new Error("Division by zero"), new Error().stack);
      return;
    }

    // Calculates and displays the answer
    const answer = Math.floor(dividendNumber / dividerNumber);
    result.innerText = answer;
    
  } catch (error) {
    // Handles non-numeric inputs 
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    console.error(error, error.stack);
  }
});
