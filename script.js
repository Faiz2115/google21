let footerDate = document.querySelector("#footerDate");
let headerText = document.querySelector("#header-text");
let containerText =  document.querySelector("#container-text");
let deleteText = document.querySelector("#delete");


// Title
let s1 = document.querySelector("#s1");
let s2 = document.querySelector("#s2");
let s3 = document.querySelector("#s3");
let s4 = document.querySelector("#s4");
let s5 = document.querySelector("#s5");
let s6 = document.querySelector("#s6");
let s7 = document.querySelector("#s7");
let s8 = document.querySelector("#s8");


// Description
let sd1 = document.querySelector("#sd1");
let sd2 = document.querySelector("#sd2");
let sd3 = document.querySelector("#sd3");
let sd4 = document.querySelector("#sd4");
let sd5 = document.querySelector("#sd5");
let sd6 = document.querySelector("#sd6");
let sd7 = document.querySelector("#sd7");
let sd8 = document.querySelector("#sd8");


// Links
let sl1 = document.querySelector("#sl1");
let sl2 = document.querySelector("#sl2");
let sl3 = document.querySelector("#sl3");
let sl4 = document.querySelector("#sl4");
let sl5 = document.querySelector("#sl5");
let sl6 = document.querySelector("#sl6");
let sl7 = document.querySelector("#sl7");
let sl8 = document.querySelector("#sl8");

//Images

let i1 =document.querySelector("#img1");
let i2 =document.querySelector("#img2");
let i3 =document.querySelector("#img3");
let i4 =document.querySelector("#img4");
let i5 =document.querySelector("#img5");
let i6 =document.querySelector("#img6");
let i7 =document.querySelector("#img7");
let i8 =document.querySelector("#img8");
let i9 =document.querySelector("#img9");
let i10 =document.querySelector("#img10");

// News Links

let nl1 = document.querySelector("#nl1");
let nl2 = document.querySelector("#nl2");
let nl3 = document.querySelector("#nl3");

// News Title
let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");



function valueSender()
{
    let v= containerText.value;
    localStorage.setItem("myValue",v);
    window.location.href='search.html';
}
let b = localStorage.getItem("myValue");
headerText.value=b;
let searchText1 = headerText.value;

window.addEventListener("load",()=> getData())

headerText.addEventListener("keypress",(event)=>
{
    if (event.keyCode === 13)
    {
        searchText1 = headerText.value;
        getData();
    }
})

deleteText.addEventListener("click",()=>
{
   headerText.value= " ";
   document.querySelector(".body-container").style.display='none';
   
})

function getData()
{
    baseUrl = "https://google-search3.p.rapidapi.com/api/v1/search/q=";
    baseImageUrl = "https://google-search3.p.rapidapi.com/api/v1/images/q=";
    baseNewsUrl = "https://google-search3.p.rapidapi.com/api/v1/news/q="
    baseMethod = {
         "method": "GET",
            "headers": {
                "x-user-agent": "desktop",
                "x-proxy-location": "US",
                "x-rapidapi-host": "google-search3.p.rapidapi.com",
                "x-rapidapi-key": "08e51b9c7fmshf807e784e866f76p16faafjsn0585fbfc1ca4"
            }
    }

        fetch(baseNewsUrl + searchText1, baseMethod) .then (response => response.json())
        .then(data=>
            {
                news(data);
            })
        fetch(baseUrl + searchText1, baseMethod).then(response => response.json())
        .then(data=>
            {
                title(data);
                description(data);
                links(data);
            } )
            .catch(err=>
                {
                    console.log(err);
                    alert("Insufficient Data Available : Sorry. API Not Sending Enough Data. Please Search Something Else");
                    headerText.value= " ";
                    document.querySelector(".body-container").style.display='none';
                    
                    
                })
            

            document.querySelector(".body-container").style.display='block';

            // Images

            fetch(baseImageUrl + searchText1, baseMethod).then(response => response.json())
        .then(data=>
            {
                // console.log(data);

                images(data);
            
            })

}

function news(data)
{
    const newsdivs = [n1,n2,n3];
    const newslinkdivs = [nl1,nl2,nl3];
    
    newsdivs.forEach((d,index)=>
    {
            d.innerText=data.entries[index].title;
            // console.log(d.src);        
    })
    newslinkdivs.forEach((d,index)=>
    {
            d.innerText=data.entries[index].link;
            d.href=data.entries[index].link;
            // console.log(d.src);        
    })
}


function images(data)
{
    const divs = [i1,i2,i3,i4,i5,i6,i7,i8,i9,i10];
    
    divs.forEach((d,index)=>
    {
            d.src=data.image_results[index].image.src;
            // console.log(d.src);        
    })

}
function description(data)
{
    const desdivs = [sd1,sd2,sd3,sd4,sd5,sd6,sd7,sd8];

    desdivs.forEach((dd,index)=>
    {
            dd.innerText=data.results[index].description;
            // console.log(d.src);        
    })

}

function links(data)
{
    const linkdivs = [sl1,sl2,sl3,sl4,sl5,sl6,sl7,sl8];

    linkdivs.forEach((d,index)=>
    {
            d.innerText=data.results[index].link;
            d.href=data.results[index].link;
            // console.log(d.src);        
    })
  
}

function title(data)
{
    const titledivs = [s1,s2,s3,s4,s5,s6,s7,s8];

    titledivs.forEach((d,index)=>
    {
            d.innerText=data.results[index].title;
            d.href=data.results[index].link;
            // console.log(d.src);        
    })
}


