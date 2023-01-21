function calculate(){
    let capital = Number(document.getElementById("amount").value);
    let percent = Number(document.getElementById("percent").value);
    let times = Number(document.getElementById("times").value);
    console.log(typeof capital,typeof percent,typeof times);
    let ans = `<tr>
    <th>S.No</th>
    <th>Capital</th>
    </tr>`;
    for(let i=0;i<times;i++)
    {
        capital = (capital+(capital*(percent/100)));
        let temp = `<tr>
            <td>${i+1}</td>
            <td>${capital.toFixed(2)}</td>
        </tr>`
         ans+=temp;
    }
    document.getElementById("result").innerHTML = ans;
    //document.getElementById("result").innerHTML += `<h2>${capital}</h2>`;
}