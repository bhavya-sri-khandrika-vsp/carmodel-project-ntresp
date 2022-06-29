var obj = {
    Name : 'Benz',
    Fuel_Type : 'Petrol',
    WLTP_Mileage : '10.93 kmpl',
    Seating_Capacity : '5',
    Fuel_Tank_Capacity : '10',
    Transmission_Type : 'Automatic'}

function disp(){
    var x = document.getElementById('init');
    document.getElementById('img1').style.visibility = "visible";
    document.getElementById('img1').innerHTML = '<img src="'+x+'" />';
    let tab =`<tr>
    <th>Name</th>
    <td>${obj.Name}</td>
    </tr>
    <tr><th>Fuel_Type</th>
    <td>${obj.Fuel_Type}</td>
    </tr>
    <tr><th>WLTP_Mileage</th>
    <td>${obj.WLTP_Mileage}</td>
    </tr>
    <tr><th>Seating_Capacity</th>
    <td>${obj.Seating_Capacity}</td>
    </tr>
   <tr><th>Fuel_Tank_Capacity</th>
    <td>${obj.Fuel_Tank_Capacity}</td>
    </tr>
    <tr><th>Transmission_Type</th>
    <td>${obj.Transmission_Type}</td>
    </tr>`;
    document.getElementById('id3').innerHTML = tab;
}

function out(){
    document.getElementById('img1').style.visibility = "hidden";
    document.getElementById('id3').innerHTML = " ";
    
}

