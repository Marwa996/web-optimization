export function show(title,description,answer){
    if(title && description){
        answer.setAttribute("value","your data has been saved!");
    }else{
        answer.setAttribute("value","you have to complete the data");
    }
}