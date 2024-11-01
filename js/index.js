const emails = {
        "abhay@make-it-all.co.uk":"#Abhay123",
        "charlie@make-it-all.co.uk":"#Charlie123",
        "christo@make-it-all.co.uk":"#Christo123",
        "dragos@make-it-all.co.uk":"#Dragos123",
        "jevan@make-it-all.co.uk":"#Jevan123",
        "kieran@make-it-all.co.uk":"#Kieran123",
        "nishad@make-it-all.co.uk":"#Nishad123"
    };
localStorage.setItem("abhay@make-it-all.co.uk", JSON.stringify(["#Abhay123", "Employee"]));
localStorage.setItem("charlie@make-it-all.co.uk", JSON.stringify(["#Charlie123", "Leader"]))
localStorage.setItem("christo@make-it-all.co.uk", JSON.stringify(["#Christo123", "Manager"]));
localStorage.setItem("dragos@make-it-all.co.uk", JSON.stringify(["#Dragos123", "Manager"]));
localStorage.setItem("jevan@make-it-all.co.uk", JSON.stringify(["#Jevan123", "Employee"]))
localStorage.setItem("kieran@make-it-all.co.uk", JSON.stringify(["#Kieran123", "Manager"]));
localStorage.setItem("nishad@make-it-all.co.uk", JSON.stringify(["#Nishad123", "Employee"]));

//to do tasks: Title, importance, description, 

let tasks1 = [
{
    assignee: "christo",
    title: "Task A",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "16/06/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "Abhay",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "23/06/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1 
},
{
    assignee: "jevan",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "30/06/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "nishad",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "07/07/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "abhay",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "14/07/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 1  
},
{
    assignee: "jevan",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "21/07/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 2  
},
{
    assignee: "christo",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "28/07/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 0  
},
{
    assignee: "nishad",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "04/08/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 3  
  },
  {
    assignee: "abhay",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "11/08/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 4  
},
{
    assignee: "christo",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "18/08/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 6  
},
{
    assignee: "nishad",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "25/08/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 7  
},
{
    assignee: "jevan",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "01/09/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 5  
},
{
    assignee: "abhay",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "08/09/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 8  
},
{
    assignee: "christo",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "15/09/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 9  
}
]

let tasks2 = [
{
    assignee: "christo",
    title: "Task B",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "22/09/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "abhay",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "29/09/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1 
},
{
    assignee: "jevan",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "06/10/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy:-1
},
{
    assignee: "nishad",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "13/10/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1  
},
{
    assignee: "abhay",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "20/10/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 1  
},
{
    assignee: "christo",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "27/10/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 0  
},
{
    assignee: "jevan",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "03/11/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 2  
},
{   
    assignee: "nishad",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "10/11/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 3 
},
{
    assignee: "christo",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "17/11/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 5  
 },
{
    assignee: "jevan",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "24/11/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 6 
},
{
    assignee: "abhay",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "01/12/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 4  
},
{   
    assignee: "nishad",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "08/12/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 7  
},
{
    assignee: "abhay",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "15/12/22",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 10 
},
{
    assignee: "christo",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "05/01/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 8  
},
]

let tasks3 = [
  {
    assignee: "nishad",
    title: "Task C",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "12/01/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1 
},
{
    assignee: "christo",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "19/02/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1  
},
{
    assignee: "jevan",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "26/01/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1 
},
{
    assignee: "abhay",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "02/02/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "christo",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "09/02/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 1  
},
{
    assignee: "jevan",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "16/02/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 2  
},
{
    assignee: "nishad",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "23/02/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 0  
},
{   
    assignee: "abhay",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "02/03/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 3  
},
{
    assignee: "jevan",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "09/03/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 5  
},
{
    assignee: "christo",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "16/03/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 4  
},
{
    assignee: "nishad",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "23/03/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 6  
},
{   
    assignee: "jevan",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "30/03/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 8  
},
{
    assignee: "abhay",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "06/04/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 7  
},
{
    assignee: "nishad",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "20/04/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 10  
}
]

let tasks4 = [
{
    assignee: "jevan",
    title: "Task D",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "27/04/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "christo",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "04/05/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "jevan",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "11/05/23",
    active: true,
    assigner: "Charlie Wyke",
    dependancy: 0  
},
{
    assignee: "nishad",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "18/05/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "abhay",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "25/05/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: -1
},
{
    assignee: "christo",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "01/06/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 1  
  },
  {
    assignee: "jevan",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "08/06/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 2  
  },
  {   
    assignee: "nishad",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "15/06/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 3  
  },
  {
    assignee: "abhay",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "22/06/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 4  
  },
  {
    assignee: "christo",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "29/06/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 5  
},
{
    assignee: "jevan",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "06/07/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 6  
},
{   
    assignee: "nishad",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "13/07/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 7 
},
{
    assignee: "abhay",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "20/07/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 8 
},
{
    assignee: "christo",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "27/07/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependancy: 9  
}
]

let tasks5 = [
{
    assignee: "jevan",
    title: "Task E",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "03/08/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "christo",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "10/08/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "abhay",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "17/08/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "nishad",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "24/08/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "abhay",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "31/08/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 2  
},
{
    assignee: "christo",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "07/09/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 1  
},
{
    assignee: "jevan",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "14/09/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 0  
},
{   
    assignee: "nishad",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "21/09/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 3  
},
{
    assignee: "abhay",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "28/09/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 4  
},
{
    assignee: "christo",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "05/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 5  
},
{
    assignee: "nishad",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "12/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 7  
},
{   
    assignee: "jevan",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "19/10/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 6  
},
{
    assignee: "christo",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "26/10/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 9  
},
{
    assignee: "abhay",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "02/11/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 8  
}
]

let tasks6 = [
{
    assignee: "abhay",
    title: "Task F",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "16/11/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "jevan",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "23/11/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "nishad",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "30/11/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "christo",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "07/12/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "abhay",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "14/12/23",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 0  
},
{
    assignee: "christo",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "04/01/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 3 
},
{
    assignee: "nishad",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "11/01/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 2  
},
{
    assignee: "jevan",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "18/01/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 1  
},
{
    assignee: "abhay",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "25/01/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 7 
},
{
    assignee: "jevan",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "29/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 7  
},
{
    assignee: "nishad",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "01/02/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 9  
},
{
    assignee: "christo",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "08/02/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 8  
},
{
    assignee: "abhay",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "15/02/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 8  
},
{
    assignee: "jevan",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "22/02/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 9
}
]

let tasks7 = [
{
    assignee: "nishad",
    title: "Task G",
    importance: 1,
    description: "A detailed description of task 1 and its various requirements",
    due: "29/02/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "christo",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "07/03/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "abhay",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "14/03/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1 
},
{
    assignee: "nishad",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "21/03/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "abhay",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "28/03/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 2  
},
{
    assignee: "christo",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "04/04/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 1  
},
{
    assignee: "jevan",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "11/04/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 0  
},
{
    assignee: "nishad",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "18/04/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 3  
},
{
    assignee: "abhay",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "25/04/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 4  
},
{
    assignee: "christo",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "02/05/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 5  
},
{
    assignee: "jevan",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "09/05/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 6  
},
{
    assignee: "nishad",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "16/05/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 7  
},
{
    assignee: "abhay",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "23/05/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 8 
},
{
    assignee: "christo",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "30/05/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 9 
}
]

  
let tasks8 = [
{ 
    assignee: "jevan",
    title: "Task H",
    importance: 1,
    description: "A detailed description of task H and its various requirements",
    due: "07/06/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{ 
    assignee: "christo",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "14/06/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{ 
    assignee: "abhay",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "21/06/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1 
},
{ 
    assignee: "christo",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "28/06/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 1  
},
{ 
    assignee: "nishad",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "17/12/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{ 
    assignee: "abhay",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "05/08/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 2  
},
{ 
    assignee: "jevan",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "12/07/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 0 
},
{ 
    assignee: "christo",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "19/07/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 3
},
{ 
    assignee: "abhay",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "26/07/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 5  
},
{ 
    assignee: "christo",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "02/08/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 7  
},
{ 
    assignee: "jevan",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "09/08/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 6
},
{ 
    assignee: "nishad",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "16/08/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 4  
},
{ 
    assignee: "jevan",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "23/08/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 10  
},
{ 
    assignee: "christo",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "30/08/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 9 
}
]

let tasks10 = [
{
    assignee: "nishad",
    title: "Task J",
    importance: 1,
    description: "A detailed description of task J and its various requirements",
    due: "06/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1 
},
{
    assignee: "christo",
    title: "Task 2",
    importance: 1,
    description: "A detailed description of task 2 and its various requirements",
    due: "13/09/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1 
},
{
    assignee: "abhay",
    title: "Task 3",
    importance: 2,
    description: "A detailed description of task 3 and its various requirements",
    due: "20/09/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "nishad",
    title: "Task 4",
    importance: 2,
    description: "A detailed description of task 4 and its various requirements",
    due: "27/09/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 0
},
{
    assignee: "abhay",
    title: "Task 5",
    importance: 3,
    description: "A detailed description of task 5 and its various requirements",
    due: "04/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 2
},
{
    assignee: "christo",
    title: "Task 6",
    importance: 3,
    description: "A detailed description of task 6 and its various requirements",
    due: "11/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 1
},
{
    assignee: "abhay",
    title: "Task 7",
    importance: 3,
    description: "A detailed description of task 7 and its various requirements",
    due: "18/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 2
},
{
    assignee: "abhay",
    title: "Task 8",
    importance: 1,
    description: "A detailed description of task 8 and its various requirements",
    due: "25/10/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 6
},
{
    assignee: "jevan",
    title: "Task 9",
    importance: 1,
    description: "A detailed description of task 9 and its various requirements",
    due: "01/11/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: -1
},
{
    assignee: "christo",
    title: "Task 10",
    importance: 2,
    description: "A detailed description of task 10 and its various requirements",
    due: "08/11/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 5
},
{
    assignee: "nishad",
    title: "Task 11",
    importance: 2,
    description: "A detailed description of task 11 and its various requirements",
    due: "15/11/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 3
},
{
    assignee: "abhay",
    title: "Task 12",
    importance: 3,
    description: "A detailed description of task 12 and its various requirements",
    due: "22/11/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 7
},
{
    assignee: "abhay",
    title: "Task 13",
    importance: 3,
    description: "A detailed description of task 13 and its various requirements",
    due: "29/11/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 11  
},
{
    assignee: "christo",
    title: "Task 14",
    importance: 3,
    description: "A detailed description of task 14 and its various requirements",
    due: "06/12/24",
    signoff: false,
    assigner: "Charlie Wyke",
    dependency: 9
}
]




// projects setup
let projects = [
  {
    name: "project1",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks1
  },
  {
    name: "project2",
    manager: "kieran",
    leader: "charlie",
    tasks: tasks2
  },
  {
    name: "project3",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks3
  },
  {
    name: "project4",
    manager: "kieran",
    leader: "charlie",
    tasks: tasks4
  },
  {
    name: "project5",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks5
  },
  {
    name: "project6",
    manager: "kieran",
    leader: "charlie",
    tasks: tasks6
  }
  {
    name: "project7",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks7
  }
  {
    name: "project8",
    manager: "kieran",
    leader: "charlie",
    tasks: tasks8
  }
  {
    name: "project9",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks9
  }
  {
    name: "project10",
    manager: "dragos",
    leader: "charlie",
    tasks: tasks10
  }
  
]


// assign projects to local storage

localStorage.setItem("projects", JSON.stringify(projects));

// assign tasks to local storage
/*localStorage.setItem("abhay", JSON.stringify(tasks1));
localStorage.setItem("charlie", JSON.stringify(tasks2));
localStorage.setItem("christo", JSON.stringify(tasks3));
localStorage.setItem("dragos", JSON.stringify(tasks4));
localStorage.setItem("jevan", JSON.stringify(tasks5));
localStorage.setItem("kieran", JSON.stringify(tasks6));
localStorage.setItem("nishad", JSON.stringify(tasks7));*/

function submitEmail() {
    // get email entered
    let email = document.getElementById("email").value;

    if (localStorage.getItem(email) != null) {
        // make the password visible
        document.getElementById("password-container").style.display = "block";
    }
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(emails[email]);
  console.log(emails);
  console.log(password);
    if (emails[email] === password) {
        localStorage.setItem("current_user", email);
        console.log(localStorage.getItem("current_user"))
        window.location.replace("empDashboard.html");
    } else {
        console.log("incorrect login");
    }
}
