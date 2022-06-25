const tabaleData = [
    {
        "firstName":'Ajay',
        "lastName":'Mathew',
        "id":'01'
    },
    {
        "firstName":'a1',
        "lastName":'m1',
        "id":'02'
    },
    {
        "firstName":'a2',
        "lastName":'m2',
        "id":'03'
    },
    {
        "firstName":'a3',
        "lastName":'m3',
        "id":'04'
    },
    {
        "firstName":'a4',
        "lastName":'m4',
        "id":'05'
    },
    {
        "firstName":'User0',
        "lastName":'Default0',
        "id":'06'
    },
    {
        "firstName":"b1",
        "lastName":"n1",
        "id":"07"
    },
    {
        "firstName":"b2",
        "lastName":"n2",
        "id":"08"
    },
    {
        "firstName":"b3",
        "lastName":"n3",
        "id":"09"
    },
    {
        "firstName":"b4",
        "lastName":"n4",
        "id":"10"
    },
    {
        "firstName":"User1",
        "lastName":"Default1",
        "id":"11"
    },
    {
        "firstName":"c1",
        "lastName":"o1",
        "id":"12"
    },
    {
        "firstName":'c2',
        "lastName":'o2',
        "id":'13'
    },
    {
        "firstName":'c3',
        "lastName":'o3',
        "id":'14'
    },
    {
        "firstName":'c4',
        "lastName":'o4',
        "id":'15'
    },
    {
        "firstName":'User2',
        "lastName":'Default2',
        "id":'16'
    },
    {
        "firstName":'d1',
       "lastName":'p1',
        "id":'17'
    },
    {
        "firstName":'d2',
        "lastName":'p2',
        "id":'18'
    },
    {
        "firstName":'d3',
        "lastName":'p3',
        "id":'19'
    },
    {
        "firstName":'d4',
        "lastName":'p4',
        "id":'20'
    },
    {
        "firstName":'User3',
        "lastName":'Default',
        "id":'21'
    },
    {
        "firstName":'e1',
        "lastName":'q1',
        "id":'22'
    },
    {
        "firstName":'e2',
        "lastName":'q2',
        "id":'23'
    },
    {
        "firstName":'e3',
        "lastName":'q3',
        "id":'24'
    },
    {
        "firstName":'e4',
        "lastName":'q4',
        "id":'25'
    }
]

var state = {
    'querySet': tabaleData,
    'page':1,
    'rows':2,
    'window':5,

}


function pagination(querySet,page,rows){
    var trimStart = (page-1)*rows
    var trimEnd = trimStart + rows
    
    var trimmedData = querySet.slice(trimStart,trimEnd)
    
    var pages = Math.ceil(querySet.length/rows)
    
    return {
        'querySet':trimmedData,
        'pages':pages
    }
}

function pageButtons(pages){
    var wrappper = document.getElementById("pagination-wrapper")
    wrappper.innerHTML=""

    var maxLeft = (state.page - Math.floor(state.window/2))
    var maxRight = (state.page + Math.floor(state.window/2))

    if(maxLeft < 1){
        maxLeft =1
        maxRight=state.window
    }
    if(maxRight>pages){
        maxLeft=pages-(state.window-1)
        maxRight=pages
        if(maxLeft<1){
            maxLeft=1
        }
    }

    for (var page=maxLeft; page <= maxRight; page++){
        wrappper.innerHTML += `<button id='page-${page}' value='${page}' class='page btn-sm btn-info m-1'>${page}</button>`
        if(page===state.page){
            document.getElementById(`page-${page}`).classList.toggle("btn-info")
            // document.getElementById(`page-${page}`).classList.toggle("btn-outline-info")

        }
    }

    if(state.page !=1){
        wrappper.innerHTML = `<button value='${1}' class='page btn-sm btn-info m-2'>&#171;First</button>`+wrappper.innerHTML
    }
    if(state.page!=pages){
        wrappper.innerHTML += `<button value='${pages}' class='page btn-sm btn-info m-2'>Last&#187;</button>`
    }
    console.log(document.querySelectorAll(".page"))
    
    $(".page").on("click",function(){
        $('#table-body').empty()
        state.page = Number($(this).val())
        // console.log(typeof(state.page));
        buildTable()
    })
}

function buildTable(){
    var table = $("#table-body")
    
    var data = pagination(state.querySet,state.page,state.rows)
    
    myList = data.querySet
    
    for (var i=1 in myList){
        var row = `<tr>
        <td>${myList[i].id}</td>
        <td>${myList[i].firstName}</td>
        <td>${myList[i].lastName}</td>`
        table.append(row)
    }
    pageButtons(data.pages)
}


buildTable()