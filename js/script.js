var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



  function siteBuild(){	
    var section = document.getElementById('section');
    var child = section.lastElementChild;
    while (child){
    	section.removeChild(child);
    	child = section.lastElementChild;
    }
    var para1 = document.createElement('p');
  	para1.innerHTML = "This is my first website, it's not much but I'm proud of what I've been able to do so far, to build this site I started with bootstrap 4 template in the home page, but the second and third pages are mostly built from scratch, I also used code snippets from around the internet";
  	para1.style.fontSize = "1.7em";
    para1.style.padding = "1em";
  	section.append(para1);
  }

  function plans(){
    var section = document.getElementById('section');
    var child = section.lastElementChild;
    while (child){
    	section.removeChild(child);
    	child = section.lastElementChild;
    }
    var para1 = document.createElement('p');
    para1.innerHTML= "I wish I could be a professional web designer, hope to learn more everyday, find a job as a freelancer maybe."
  	para1.style.fontSize = "1.7em";
    para1.style.padding = "1em";
  	section.append(para1);
  }


  function Acknowledgement(){
    var section = document.getElementById('section');
    var child = section.lastElementChild;
    while (child){
    	section.removeChild(child);
    	child = section.lastElementChild;
    }
    var para1 = document.createElement('p');
    para1.innerHTML= "I would like to thank &nbsp";
  	para1.style.fontSize = "1.7em";
  	para1.style.display = "inline";
  	var link1 = document.createElement('a');
  	link1.href = 'https://www.linkedin.com/in/colleen-van-lent-670a3b5/';
  	link1.innerHTML = "Colleen van lent";
  	link1.style.color = "#fff";
  	link1.style.fontSize = "1.7em";
  	link1.style.textDecoration = "none";
  	link1.style.fontWeight = "bold";
  	link1.target = "_blank";
  	link1.style.display = "inline";
  	var para2 = document.createElement('p');
  	para2.innerHTML = "&nbsp for lecturing a great course one coursera from which I've learnt alot about web design."
  	para2.style.fontSize = "1.7em";
  	para2.style.display = "inline";
 	var div1 = document.createElement('div');
  	div1.append(para1, link1, para2);
    div1.style.padding = "2em";
  	section.append(div1);	
  }

 function clinks(){
 	var section = document.getElementById('section');
    var child = section.lastElementChild;
    while (child){
    	section.removeChild(child);
    	child = section.lastElementChild;
    }

    var link1 = document.createElement('a');
    link1.href = "https://coursera.org/share/7e31594813efa3de360276f41188e541";
    link1.innerHTML = "Introduction to HTML5";
    link1.className = "cerbtn";
    link1.target ="_blank";
    link1.style.color = "#fff";
    var link2 = document.createElement('a');
    link2.href = "https://www.coursera.org/account/accomplishments/records/Y7K6ZW6EXDY9";
    link2.innerHTML = "Introduction to CSS3";
    link2.className = "cerbtn";
    link2.target ="_blank";
    link2.style.color = "#fff";
    var link3 = document.createElement('a');
    link3.href = "https://www.coursera.org/account/accomplishments/records/VDRB9LMPT35T";
    link3.innerHTML = "Interactivity with JavaScript";
    link3.className = "cerbtn";
    link3.target ="_blank";
    link3.style.color = "#fff";
    var link4 = document.createElement('a');
    link4.href = "https://www.coursera.org/account/accomplishments/records/ZU49BZEU9YBE";
    link4.innerHTML = "Advanced Styling with Responsive Design";
    link4.className = "cerbtn";
    link4.target ="_blank";
    link4.style.color = "#fff";
    var link5 = document.createElement('a');
    link5.href = "https://www.coursera.org/account/accomplishments/records/H6495GU5ZQAK";
    link5.innerHTML = "What is Data Science?"
    link5.className = "cerbtn";
    link5.target ="_blank";
    link5.style.color = "#fff";
    var link6 = document.createElement('a');
    link6.href = "https://www.coursera.org/account/accomplishments/records/AQYYU5CU2C5H";
    link6.innerHTML = "Tools for Data Science";
    link6.className = "cerbtn";
    link6.target ="_blank";
    link6.style.color = "#fff";
    var link7 = document.createElement('a');
    link7.href = "https://www.coursera.org/account/accomplishments/records/78Y797PG7XG9";
    link7.innerHTML = "Python for Data Science and AI";
    link7.className = "cerbtn";
    link7.target ="_blank";
    link7.style.color = "#fff";
    var link8 = document.createElement('a');
    link8.href = "https://www.coursera.org/account/accomplishments/records/KQR9KX7FEESX";
    link8.innerHTML = "Databases and SQL for Data Science";
    link8.className = "cerbtn";
    link8.target ="_blank";
    link8.style.color = "#fff";
 
    section.append(link1, link2, link3, link4, link5, link6, link7, link8);
 }