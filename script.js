
const dropdowns=document.querySelectorAll('.drop-down select')
const button=document.querySelector('button')


for(let select of dropdowns){
   for(code in countryList){
    let newoption=document.createElement('option')
    newoption.innerText=code
    newoption.value=code
    if(select.name=="from" && code=="USD"){
        newoption.selected="selected"
    }
    if(select.name=="to" && code=="INR"){
        newoption.selected="selected"
    }
    select.append(newoption)

}
select.addEventListener('change',(evt)=>{
    flagchange(evt);
})
}
let flagchange=(element)=>{
    let currencycode=element.target.value
    let countrycode=countryList[currencycode]
    let container=element.target.closest(".select-container")
    let imgsrc=container.querySelector('img')
   imgsrc.src=`https://flagsapi.com/${countrycode}/flat/64.png`

}
button.addEventListener('click',(event)=>{
    event.preventDefault();
    let amount=document.querySelector('.amount input')
    let amountval=amount.value
    if(amountval=="" || amountval<=0){
        amountval=1
        amount.value='1'
    }    

   async function echange(){
     const fromcurrency = document.querySelector('.from select').value.toLowerCase();
    const tocurrency = document.querySelector('.to select').value.toLowerCase();
     const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcurrency}.json`;

    const response=await fetch(url)
    const data=await response.json()
    const rate=data[fromcurrency][tocurrency];
     let message=document.querySelector('.message')
   message.innerHTML=`${amountval} ${fromcurrency.toUpperCase()}=${(rate*amountval).toFixed(2)} ${tocurrency.toUpperCase()}`
   
   }
  
   echange()

})
