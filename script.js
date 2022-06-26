//implent class: project with name and link

let viewerUrl = "./model-viewer.html";

let activeProject;

let projects = [ {
    'name' : 'Project 1',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/',
	},
	{
    'name' : 'Project 2',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/',
	},
	{
    'name' : 'Project 3 ',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/',
	},
	{
    'name' : 'Project 4',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/',
    },
    {
    'name' : 'Project 5',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/',
    }
];

//Project list

const projectList = document.getElementById("project-list");

for(const project of projects) {
    const card = createCard(project);
    projectList.appendChild(card);
}


//functions

function createCard(project) {
    const text = document.createElement("h2");
    text.textContent = project.name;

    const button = document.createElement("a");
    button.classList.add("button");
    
    let url = viewerUrl;
    url = url + "?"+ project.name;
    
    //   url.searchParams.set("name", project.name)
 //   let url = encodeQuery({url: viewerUrl, params: project.name});
    button.href = url;
    button.textContent = "View Model";


    // button.addEventListener("click", () => {
    //     let query = new URLSearchParams(activeProject.name);

    //     let url = viewerUrl + query.toString();
    //     console.log(url);

    //     window.location.href = url;
    //      //global.localStorage.setItem("activeProject", project);
    // })


    const card = document.createElement("div");
    card.classList.add("card");
    renderModelIcon(card);
    card.appendChild(text);
    card.appendChild(button);

    return card;
}

function encodeQuery(data){
    let query = data.url
    for (let d in data.params)
         query += encodeURIComponent(d) + '='
              + encodeURIComponent(data.params[d]) + '&';
    return query.slice(0, -1)
}

function renderModelIcon(node) {
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    iconSvg.setAttribute("width", "24");
    iconSvg.setAttribute("height", "24");
    iconSvg.setAttribute("viewBox", "0 0 24 24");

    iconPath.setAttribute(
      'd',
      "M18 10.031v-6.423l-6.036-3.608-5.964 3.569v6.499l-6 3.224v7.216l6.136 3.492 5.864-3.393 5.864 3.393 6.136-3.492v-7.177l-6-3.3zm-1.143.036l-4.321 2.384v-4.956l4.321-2.539v5.111zm-4.895-8.71l4.272 2.596-4.268 2.509-4.176-2.554 4.172-2.551zm-10.172 12.274l4.778-2.53 4.237 2.417-4.668 2.667-4.347-2.554zm4.917 3.587l4.722-2.697v5.056l-4.722 2.757v-5.116zm6.512-3.746l4.247-2.39 4.769 2.594-4.367 2.509-4.649-2.713zm9.638 6.323l-4.421 2.539v-5.116l4.421-2.538v5.115z"
      );
  
    iconSvg.appendChild(iconPath);
  
    return node.appendChild(iconSvg);
  }

