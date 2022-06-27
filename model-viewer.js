import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';
import { projects } from "./projects.js";

let pojectID = location.search.substring(1);

const activeProject = projects.find(project => project.id === pojectID);

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("node_modules/web-ifc/");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

 loadIfc(activeProject.link);