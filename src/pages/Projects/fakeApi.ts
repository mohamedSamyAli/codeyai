export const PROJECTS_KEY = "project_ids"
export const addOrUpdateProject = (project, id) => {

    let data = []
    let _data = localStorage.getItem(PROJECTS_KEY);
    if (_data) {
        data = JSON.parse(_data)
    }

    let isIdRepeated = data.includes(id)
    if(!isIdRepeated){
        data.push(id)
    }
     localStorage.setItem(PROJECTS_KEY,JSON.stringify(data))
     localStorage.setItem(id,JSON.stringify(project))
}

export const getAllProjects = ()=>{
    let arr = []
    let data = []
    let _data = localStorage.getItem(PROJECTS_KEY);
    if (_data) {
        data = JSON.parse(_data)
    }
    data.forEach(ele => {
        arr.push(JSON.parse(localStorage.getItem(ele)))
    });
    return arr
}
 export const getProject = (id)=>{
    console.log(JSON.parse(localStorage.getItem(id)))

    return JSON.parse(localStorage.getItem(id))
 }