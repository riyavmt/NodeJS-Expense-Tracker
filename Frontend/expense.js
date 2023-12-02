const form = document.getElementById("myForm");
const list = document.getElementById("expList");

form.addEventListener("submit",add);

async function add(e){
    e.preventDefault();
    let data = {
        amt : e.target.amt.value,
        des : e.target.des.value,
        ctg : e.target.ctg.value,
    }

    try{
        const res = await axios.post('http://localhost:3000/add-expense',data);
        addToList(res.data);
        form.reset();
    }
    catch(err){console.log(err)}
    
}

function addToList(data){
    const li = document.createElement("li");
    li.id = data.id;
    li.innerHTML=`<span> ${data.amt}-${data.des}-${data.ctg}
    <button class="edit btn-sm btn-primary" onclick="edit(${data.id})">Edit</button> <button class = "delete btn-sm btn-danger" onclick="remove(${data.id})">Delete</button> `

    list.appendChild(li);
}

window.addEventListener('DOMContentLoaded',async()=>{
    try{
        const res = await axios.get('http://localhost:3000/add-expense')
        res.data.forEach(i=>{
            addToList(i);
        })
    }
    catch(err){console.log(err)}
})

async function remove(id){
    try{
        const res = await axios.delete('http://localhost:3000/delete-expense/${id}')
        console.log(res);
        list.removeChild(document.getElementById(id));
    }
    catch(err){console.log(err)}
}

async function edit(id){
    console.log(id);
    const li = document.getElementById(id);
    const details = li.firstElementChild.innerHTML.split('-');
    console.log(details);
    document.getElementById('amt').value = details[0];
    document.getElementById('des').value = details[1];
    document.getElementById('ctg').value = details[2];

    remove(id);
}