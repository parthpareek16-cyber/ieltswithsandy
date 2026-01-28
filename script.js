// Courses
const courses = [
  { name: "Beginner IELTS Course", description: "Build foundational skills in Listening, Reading, Writing, and Speaking.", price: 200 },
  { name: "Intermediate IELTS Course", description: "Improve accuracy, speed, and exam techniques.", price: 300 },
  { name: "Advanced IELTS Course", description: "Intensive practice and strategies for Band 7+.", price: 400 },
  { name: "Speaking & Writing Mastery", description: "Focused training for Speaking and Writing modules with mock tests.", price: 250 },
  { name: "One-on-One Coaching", description: "Personalized sessions to improve weak areas and achieve your target band.", price: 350 }
];

// Inject Courses
const courseList = document.getElementById("course-list");
courses.forEach(course => {
  const div = document.createElement("div");
  div.classList.add("course-card");
  div.innerHTML = `<h3>${course.name}</h3><p>${course.description}</p><p class="price">Price: $${course.price} CAD</p>`;
  courseList.appendChild(div);
});

// Testimonials
const testimonials = [
  { name: "Amit Sharma", message: "Sandy's guidance helped me achieve Band 7.5!" },
  { name: "Sara Khan", message: "The personalized feedback made a huge difference." },
  { name: "Ravi Mehta", message: "Highly recommend IELTS with Sandy. Very professional!" }
];

// Inject Testimonials
const testimonialList = document.getElementById("testimonial-list");
testimonials.forEach(t => {
  const div = document.createElement("div");
  div.classList.add("testimonial-card");
  div.innerHTML = `<p>"${t.message}"</p><h4>- ${t.name}</h4>`;
  testimonialList.appendChild(div);
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  document.getElementById("contact-status").textContent = `Thank you ${name}, your message has been received!`;
  contactForm.reset();
});
