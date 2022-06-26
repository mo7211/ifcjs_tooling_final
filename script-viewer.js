
let projects = [ {
    'name' : 'Project%201',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/01/'
	},
	{
    'name' : 'Project%202',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/02/'
	},
	{
    'name' : 'Project%203',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/03/'
	},
	{
    'name' : 'Project%204',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/04/'
    },
    {
    'name' : 'Project%205',
    'link' : 'https://ifcjs.github.io/ifcjs-crash-course/sample-apps/05/'
    }
];

let projectName = location.search.substring(1);
console.log(projectName);

const activeProject = projects.find(project => project.name === projectName);
console.log(activeProject);

let modelview = document.getElementById("modelView");

modelView.setAttribute("src", activeProject.link ); //


function getProjectLink(projectName) {
    for(const project of projects) {
        if(project.name==projectName) {
            activeProject = project;
        }
    }
}

