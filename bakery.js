function CakeShape() {
    let sheetCake = document.getElementById('sheet');
    let roundCake = document.getElementById('round');

    if (document.getElementById('sheet').checked) {
        document.getElementById('details').innerHTML =
            '<table class="table">' +
            '<tbody>' +
            '<tr><td>Length: </td><td>' + '<input type="number" min="30" max="60" id="length">' + '</td></tr>' +
            '<tr><td>Width: </td><td>' + '<input type="number" min="30" max="45" id="width">' + '</td></tr>' +
            '</tbody>' +
            '</table>';

    } else {
        document.getElementById('details').innerHTML =
            '<table class="table">' +
            '<tbody>' +
            '<tr><td>Radius: </td><td>' + '<input type="number" min="15" max="30" id="radius">' + '</td></tr>' +
            '</tbody>' +
            '</table>';
    }
    return false;
}

function summary(event) {
    event.preventDefault();
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let address = document.getElementById('address').value;
    let postalCode = document.getElementById('code').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let basicPrice = 0;
    let basicOrder = "";
    if(document.getElementById('sheet').checked){
        let length = document.getElementById('length').value;
        let width = document.getElementById('width').value; 
        let area = length * width;
        if(area>900){
            basicPrice = 18 + (area-900)*0.02.toFixed(2);
            basicOrder = 'Sheet cake ' + width + 'cm ' + 'x ' + length + 'cm';
        }else{
            basicPrice = 18;
            basicOrder = 'Sheet cake ' + width + 'cm ' + 'x ' + length + 'cm';
        }   
    }
    if(document.getElementById('round').checked){
        let radius = document.getElementById('radius').value;
        let area = (radius*radius*3.14).toFixed(0);
        if(area>707){
            basicPrice = 15 + (area-707)*0.02.toFixed(2);
            basicOrder = 'Round cake ' + radius + 'cm';
        }else{
            basicPrice = 15;
            basicOrder = 'Round cake ' + radius + 'cm';
        }   
    }

    let layerPirce = 0;
    let layerOrder = "";
    if(document.getElementById('one').checked){
        layerPirce = 1;
        layerOrder = ' with 1layer';
    }else if(document.getElementById('two').checked){
        layerPirce = 1.5;
        layerOrder = ' with 2layers';
    }else if(document.getElementById('three').checked){
        layerPirce = 2;
        layerOrder = ' with 3layers';
    }   
    
    let additionalPrice = 0;
    let additionalOrder = "";
    if(document.getElementById('icing').checked){
        additionalPrice += 5;
        additionalOrder += 'Cream Cheese icing ' + ' $5' + '<br>';
         
    }else{
        additionalPrice = additionalPrice;
        additionalOrder = additionalOrder

    }
    if(document.getElementById('topping').checked){
        additionalPrice += 7;
        additionalOrder += 'Fruit and Almond topping ' + ' $7' + '<br>'; 
    }else{
        additionalPrice = additionalPrice;
        additionalOrder = additionalOrder
    }
    if(document.getElementById('filling').checked){
        additionalPrice += 4;
        additionalOrder += 'Fruit Jam fillinge ' + ' $4'; 
    }else{
        additionalPrice = additionalPrice;
        additionalOrder = additionalOrder
    }
    let total = (basicPrice * layerPirce + additionalPrice).toFixed(2);
    
    document.getElementById('summary').innerHTML =
    '<h2><em>Order Details</em></h2>' +
    '<p>' + firstName + " " + lastName + '</p>' +
    '<p>' + address + '</p>' +
    '<p>' + postalCode + '</p>' +
    '<p>' + phone + '</p>' +
    '<p>' + email + '</p>' +
    '<br>' +
    '<p><h3>Your order:</h3> </p>' +
    '<br>' +
    '<p>' + basicOrder + layerOrder + " $" + (basicPrice * layerPirce).toFixed(2) + '</p>' + 
    '<p>' + additionalOrder + '</p>' + 
    '<p>' + 'Total: ' + " $" + total + '</p>';
    return fasle;

}





