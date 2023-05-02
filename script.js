const input = document.getElementById("inp");
const con = document.querySelector(".con");
const gettext = (len)=>{
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let random = (Math.random() * 25).toFixed(0);
    let ans ="";
    for(let i=0;i<len;i++){
       ans += str[random];
    }
    return ans;
}
const generateText = ()=>{
    const num = Number(input.value);
    const para = document.createElement("p");
    let data="";
     for(let i=1;i<=num;i++){
        let random = (Math.random() * 12).toFixed(0);
        data += gettext(random);
        data+=" ";
     }
    para.innerText=data;
    para.setAttribute("class","paras");
    con.append(para);
}