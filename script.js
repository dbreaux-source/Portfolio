const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

const rules = {
  name:    { test: v => v.trim() !== "", msg: "Error: Please enter your name." },
  email:   { test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: "Error: Please enter a valid email address, like name@example.com." },
  message: { test: v => v.trim() !== "", msg: "Error: Please enter a message." }
};

function validate(id) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + "-error");
  const ok = rules[id].test(input.value);
  input.setAttribute("aria-invalid", ok ? "false" : "true");
  error.textContent = ok ? "" : rules[id].msg;
  error.hidden = ok;
  return ok;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const results = Object.keys(rules).map(validate);
  if (results.includes(false)) {
    const firstBad = Object.keys(rules).find(id => !validate(id));
    document.getElementById(firstBad).focus();
    status.textContent = "Please fix the errors above and try again.";
    return;
  }
  status.textContent = "Thank you! Your message was submitted.";
  form.reset();
  status.focus();
});

Object.keys(rules).forEach(id =>
  document.getElementById(id).addEventListener("blur", () => validate(id))
);
