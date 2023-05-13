// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================

const link = document.querySelector('.link');
const hamburger = document.querySelector('.hamburger');
const center_link = document.querySelector('.center_link');
const body = document.body;
link.style.display = 'none';
hamburger.addEventListener('click', (element => {
    body.classList.remove('toggle')
   // link.style.display = "none";
})
    
);
hamburger.addEventListener('click', (e => {
    body.classList.toggle('toggle')
}))





// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================

// select the query for all input tabset
// check if the selected radio input == display products that match selected
// display in block


const productTab = document.getElementsByName('tabset');
const product = document.querySelectorAll('input[name="tabset"]');
const catalogue = document.querySelectorAll('.catalogue');
const itemTag = document.querySelectorAll('.tag');
const itemTagFemale = document.querySelectorAll('.female_tag');
const search = document.querySelector('input[class="search_product"]');
console.log(search)

product.forEach(p => {
    p.addEventListener('change', (e) => {
        if(e.target.value == 'Female' && catalogue.display != "block"){
            itemTag.forEach(element => {
                element.parentElement.parentElement.parentElement.style.display = "none";
            })
            itemTagFemale.forEach(element => {
                element.parentElement.parentElement.parentElement.style.display = "block";
            })
        }else if(e.target.value == 'Male'){
            itemTagFemale.forEach(element => {
                element.parentElement.parentElement.parentElement.style.display = "none";
            })
            itemTag.forEach(element => {
                element.parentElement.parentElement.parentElement.style.display = "block";
            })
        }else if(e.target.value == 'Babies'){
            alert('no listing for this category')
        }else if(e.target.value == 'All'){
            itemTag.forEach(element => {
                element.parentElement.parentElement.parentElement.style.display = "block";
            })
            itemTagFemale.forEach(element => {
                element.parentElement.parentElement.parentElement.style.display = "block";
            })
        }
    })
})

 
    search.addEventListener('input', (value) =>{
        catalogue.forEach(element => {
            
            element.style.display = "none"
            let textInput = document.querySelector('.search_product').value.toUpperCase()
            console.log(textInput);
            let name = element.children[0].innerHTML.toUpperCase();
            console.log(name)

            
            if(name.includes(textInput)){
                element.style.display = "block"
            }
        })
    })
// const details = (values) =>{
//     catalogue.forEach(element => {
//      //   element.style.display = "none";
//         let textInput = document.querySelector('.search_product').value.toUpperCase()
//             console.log(textInput);
//         let name = document.querySelector('.name');
//         console.log(catalogue) 
//         if(name.includes(textInput) || tag.includes(textInput)){
//             element.style.display = "block"
//         }
//     })
// }

// search.addEventListener('input', (e) => {
// details.apply(e.target.value.toUpperCase())
// })
// const employee = document.querySelectorAll('.employee');

// const displayEmployees = (values) => {
//     employee.forEach(element =>{
//     element.style.display = "none"

//     const name = element.children[1].innerHTML.toUpperCase();
//     const position = element.children[2].innerHTML.toUpperCase();
//     const job_type = element.children[3].innerHTML.toUpperCase();

//     if (name.includes(values) || position.inc;ludes(values) || job_type.includes(values)) {
//         element.style.display = "block"
//     }
//     })

// }

// searchEmployee.addEventListener('input', (e) =>{
//     displayEmployees(e.target.value.toUpperCase())
// })




// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================