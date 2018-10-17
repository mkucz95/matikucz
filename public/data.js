// Set the configuration for your app
var config = {
    apiKey: "AIzaSyCiGO8rHXu7Q-rzWW0RziG-YWurzbiDy64",
    authDomain: "matikucz-7a596.firebaseapp.com",
    databaseURL: "https://matikucz-7a596.firebaseio.com/",
    storagebucket: "matikucz-7a596.appspot.com"
};

firebase.initializeApp(config);
var data;
var ref = firebase.database().ref();
ref.on("value", function(snapshot) {
   populateInfo(snapshot.val())
}, function (error) {
   console.log("Error: " + error.code);
});
var econ, aboutme, current, activities, awards, books, chinese, cse, experience, math , projects, references, skills, techskills, tools, volunteering;
function populateInfo(data){
    var pop = data.personalsite 
    econ = pop.econ;
    aboutme = data.aboutMe;
    current = data.current;
    activities = pop.activities;
    awards = pop.awards;
    books = pop.books;
    chinese = pop.chinese;
    cse = pop.cse;
    experience = pop.experience;
    math = pop.math;
    projects = pop.projects;
    references = pop.references;
    skills = pop.skills;
    techskills = pop.techskills;
    tools = pop.tools;
    volunteering = pop.volunteering;
}

function createEl(x, selector){
    let elem=document.createElement("section");
    //el.innerHTML=`<h3 onclick=changeView(this)>${x.type}</h3><p style="display:none"><em>${x.code}</em><br>${x.description}</p>`;
    elem.innerHTML=`<h3 onclick=changeView(this)>${x.type}</h3><p style="display:none;font-size:0.7rem;">${x.code}</p>`;
    document.getElementById(selector).appendChild(elem);
}
function changeView(element){
    let p=element.nextElementSibling;
    if(p.style.display=='inline')p.style.display='none';
    else p.style.display='inline';
}
function addSkill(x, selector){
    let el=document.createElement("li");
    el.innerHTML = x.name;
    document.querySelector(selector).appendChild(el);
}
function addReference(x, selector){
    let el=document.createElement("tr");
    el.innerHTML = `<dt>${x.name}</dt><dd>${x.position}</dd><dd>${x.phone}</dd><dd>${x.email}</dd>`;
    document.querySelector(selector).appendChild(el);
}
function addAward(x, selector){
    let el=document.createElement("section");
    el.innerHTML = `<a href="${x.link}">${x.title}</a> - <i>${x.year}</i>`;
    document.querySelector(selector).appendChild(el);
}
function addExperience(x,selector){
    let el=document.createElement("section");
    el.innerHTML = `<h3>${x.what}</h3><aside>${x.time}</aside>`;
    let list = document.createElement("ul");
    x.tasks.forEach(y=>{let listEl = document.createElement("li");listEl.innerHTML=y;list.appendChild(listEl);});
    el.appendChild(list);
    document.querySelector(selector).appendChild(el);
}
function populateExperience(){
    skills.forEach(x=>{addSkill(x, "#skills")});
    techskills.forEach(x=>{addSkill(x, "#techskills ul")});
    tools.forEach(x=>{addSkill(x, "#tools ul")});
    awards.forEach(x=>{addAward(x, "#awards");});
    experience.forEach(x=>{addExperience(x,"#work");});
    activities.forEach(x=>{addExperience(x,"#activities");});
    volunteering.forEach(x=>{addExperience(x,"#volunteering");});
}
function populateRefs(){
    references.forEach(x=>{addReference(x, "#references")});
}
function populateCourses(){
    econ.forEach(x=>{let el = createEl(x, "econCourses");});
    cse.forEach(x=>{let el = createEl(x, "cseCourses");});
    math.forEach(x=>{let el = createEl(x, "mathCourses");});
    chinese.forEach(x=>{let el = createEl(x, "chinCourses");});
}
function populateProjects(){
    projects.forEach(x=>{
        let el = document.createElement("section");
        el.innerHTML=`<h3><a href=${x.link}>${x.name}</a></h3><p>${x.description}</p>`;
        document.querySelector('.project').appendChild(el);
    });
}

function changeEvent(event){
    if(event==="coursework"){
        document.querySelector('main>div').innerHTML = education+econCourses+cseCourses+mathCourses+chinCourses;
        populateCourses();
    }
    else if(event==="experience"){
        document.querySelector('main>div').innerHTML="<article><h1>Skills</h1 onclick=changeView(this)><section id='skills'><ul></ul></section><section id='tools'><h2>Tools</h2><ul></ul></section><section id='techskills'><h2>Technologies</h2><ul></ul></section></article><article id='work'><h1>Experience</h1></article><article id='activities'><h1>Activities</h1></article><article id='volunteering'><h2>Volunteering</h2></article><article id='awards'><h2>Honours & Awards</h2></article>";
        populateExperience();
    }
    else if(event==="about"){document.querySelector('main>div').innerHTML=about;}
    else if(event==="references"){document.querySelector('main>div').innerHTML="<article><section><h1>References</h1><dl id='references'></dl></section></article>"; 
        populateRefs();}
    else if(event==="home"){
        document.querySelector('main>div').innerHTML=home;
    }
    else if(event==="projects"){document.querySelector('main>div').innerHTML=project_html;
        populateProjects();
    }
}
const education = "<div id='education'><h1>Education</h1> \
<dl><dt><strong>University of California, San Diego (UCSD) </strong> June 2018 cum Laude</dt><dd> B.S. in Management Science with Distinction </dd><dd> Minor in Computer Science</dd><dd>Overall GPA: 3.72/4.00 - Major GPA: 3.84, Minor GPA: 3.71</dd>\
<dt>Udacity NanoDegree</dt><dd>Machine Learning for Data Science</dd>\
<dt>Overseas Family School (OFS) - Singapore</dt><dd>IGSCE</dd><dd> International Baccalaureate (IB) - Bilingual Diploma</dd></dl></div>";
const project_html = "<article class='project'><h2>Projects</h2></article>";
const econCourses ="<article class='coursework' id='econCourses'><h2>Economics Coursework</h2></article>";
const cseCourses = "<article class='coursework' id='cseCourses'><h2>Computer Science Coursework</h2></article>";
const mathCourses = "<article class='coursework' id='mathCourses'><h2>Mathematics Coursework</h2></article>";
const chinCourses = "<article class='coursework' id='chinCourses'><h2>Chinese Language Coursework</h2></article>";
const about=`<article><section><h1>Current</h1><p>I am a graduate from UC San Diego with a B.S. in Management Science and a minor in Computer Science. My education has stoked a pasion for the application of data real world scenarios. I am learning about the applications of this data through the Udacity Machine Learning for Data Science course.</p>
<p>I work as the HR Coordinator for Best Day Foundation in San Diego which works with special needs children providing them with great outdoors experiences.</p></section>
<section><h1>About Me</h1><p>I am a passionate golfer, and I was a team capitain and four-year letter winner with the UCSD Men's Golf team. I chose UC San Diego because of it's renowned academic caliber in the fields that interest me most - economics and computer science. The perfect weather and location, challenging intellectual environment, and demanding collegiate golf are all factors that have contributed to my progress and success as a student-athlete and person.</p>
<p>I would like to work with businesses, investments, and technologies that deal with social and environmental causes around the world. It is a goal of mine to eventually utilize the languages I know throughout my career.</p>
<p>I enjoy cooking and all kinds of outdoor activities in my free time. As a California resident, I started to surf two years ago. I also enjoy tennis, basketball, volleyball, table tennis, hiking, or just being at the beach. I am also a passionate traveller and I hope to make it to three new places every year. South America and Africa are the next two continents I have set my sights on. San Diego, CA - is the 6th city in the 6th different country that I have lived in.</p></section>
<section><h1>Recent Reads</h1><ul></ul></section>
<section id="contact"> <h1>Contact</h1><a href="tel:1-858-260-4579">(858)-260 4579</a>
<a href="mailto:mati.kucz95@gmail.com?subject=Reaching Out From Your Website" target="_blank">mati.kucz95@gmail.com</a>
</section></article>`;


const home=`<img src="headshot.jpg" class="home">
    <ul class="center" id="home">
        <li><a href="http://economics.ucsd.edu/undergraduate-program/major-minor-requirements/mgmt-sci.html">Management B.S.</a></li>
        <li><a href="https://cse.ucsd.edu/undergraduate/degree-programs/minor-computer-science">Computer Science Minor</a></li>
        <li><a href="http://www.github.com/mkucz95">My GitHub</a></li>
        <li><a href="https://bestdayfoundation.org/">Best Day Foundation</a></li>
        <li><a href="http://www.linkedin.com/in/m-kucz">LinkedIn</a></li>
        <li><a href="http://www.ucsdtritons.com/SportSelect.dbml?DB_OEM_ID=5800&SPID=2343&SPSID=29950">UCSD Golf</a></li>
    </ul>`;
