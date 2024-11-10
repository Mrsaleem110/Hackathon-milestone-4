// Get refrences to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement
// Handle form submission 
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload

    // Collect Input value
    const objective = (document.getElementById('objective') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const FaterName = (document.getElementById('FaterName') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate the resume content dynamically
    const resumeHTML = `
<h2><b>Resume</b></h2>
<h3><b>Personal Information</b></h3>
<p><b>Objective:</b><span contenteditable="true">${objective}</p>
<p><b>Name:</b><span contenteditable="true">${name}</p>
<p><b>FatherName:</b><span contenteditable="true">${FaterName}</p>
<p><b>Contact:</b><span contenteditable="true">${phone}</p>
<p><b>Cnic:</b><span contenteditable="true">${cnic}</p>
<p><b>Email:</b><span contenteditable="true">${email}</p>
<p><b>Address:</b><span contenteditable="true">${address}</p>

<h3><b>Education</b></h3>
<p><span contenteditable="true">${education}</p>

<h3><b>Experience</b></h3>
<p><span contenteditable="true">${experience}</p>

<h3><b>Skills</b></h3>
<p><span contenteditable="true">${skills}</p>
`;
// Display the generated resume
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML
}else{
    console.error('The resume display element is missing.')
}
})

