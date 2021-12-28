// UI
// Start Navbar Section
// const homebtn = document.getElementById('homebtn').click();
// End Navbar Section


// Start Package Section
// for switch button
const time = document.getElementById('time');
// for Normal
const normalh = document.getElementById('normalh'),
    normalb = document.getElementById('normalb'),
    normalbh = document.getElementById('normalhb');

const normalha = document.getElementById('normalha'),
    normalba = document.getElementById('normalba'),
    normalhba = document.getElementById('normalhba'); 

// for Regular
const regularh = document.getElementById('regularh'),
    regularb = document.getElementById('regularb'),
    regularhb = document.getElementById('regularhb');

const regularha = document.getElementById('regularha'),                
    regularba = document.getElementById('regularba'),
    regularhba = document.getElementById('regularhba');

// for Premium
const premiumh = document.getElementById('premiumh'),
    premiumb = document.getElementById('premiumb'),
    premiumbh = document.getElementById('premiumbh');

const premiumha = document.getElementById('premiumha'),
    premiumba = document.getElementById('premiumba'),
    premiumbha = document.getElementById('premiumbha');

time.addEventListener('click',()=>{
    // console.log(time.checked);
    if(time.checked){
        [normalh.innerText,normalb.innerText,normalbh.innerText] = [13.99,14.99,18.99];
        [normalha.innerText,normalba.innerText,normalhba.innerText] = [5.99,8.99,11.99];

        [regularh.innerText,regularb.innerText,regularhb.innerText] = [23.99,24.99,28.99];
        [regularha.innerText,regularba.innerText,regularhba.innerText] = [15.99,18.99,21.99];

        [premiumh.innerText,premiumb.innerText,premiumbh.innerText] = [33.99,34.99,38.99];
        [premiumha.innerText,premiumba.innerText,premiumbha.innerText] = [25.99,28.99,31.99];
    }else{
        [normalh.innerText,normalb.innerText,normalbh.innerText] = [23.99,24.99,28.99];
        [normalha.innerText,normalba.innerText,normalhba.innerText] = [9.99,12.99,15.99];

        [regularh.innerText,regularb.innerText,regularhb.innerText] = [33.99,34.99,38.99];
        [regularha.innerText,regularba.innerText,regularhba.innerText] = [19.99,22.99,25.99];

        [premiumh.innerText,premiumb.innerText,premiumbh.innerText] = [43.99,44.99,48.99];
        [premiumha.innerText,premiumba.innerText,premiumbha.innerText] = [29.99,32.99,35.99];
        
    }
});

// for Buy Now button
const normalel = document.getElementById('normal'),
    regularel = document.getElementById('regular'),
    premiumel = document.getElementById('premium');

const btnnormal = document.querySelector('.btnnormals'),
    btnregular = document.querySelector('.btnregulars'),
    btnpremium = document.querySelector('.btnpremiums');

btnnormal.addEventListener('click',()=>{
    normalel.classList.add('normaleffects');
    regularel.classList.remove('regulareffects');
    premiumel.classList.remove('premiumeffects');

    normal();
    vegetable();
    mushnormal();
    seanormal();
});

btnregular.addEventListener('click',()=>{
    normalel.classList.remove('normaleffects');
    regularel.classList.add('regulareffects');
    premiumel.classList.remove('premiumeffects');
    
    regular();
    vegetable();
    mushregular();
    searegular();
    
});

btnpremium.addEventListener('click',()=>{
    normalel.classList.remove('normaleffects');
    regularel.classList.remove('regulareffects');
    premiumel.classList.add('premiumeffects');

    premium();
    vegetable();
    mushpremium();
    seapremium();
});

// End Package Section



// Start Order Section
// for meat
const meats = document.querySelectorAll('.meats');

function normal(){
    meats.forEach((meat)=>{
        if(meat.value === '2'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',""); 
        }else if( meat.value === '3'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '5'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '6'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '7'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '8'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '10'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '11'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '12'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '13'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '14'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }

        // console.log(typeof meat.value);
    });
}

function regular(){
    meats.forEach((meat)=>{
        if(meat.value === '1'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '2'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '3'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '4'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '5'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '6'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '7'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '8'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '9'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '10'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '11'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '12'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }else if(meat.value === '13'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '14'){
            meat.nextElementSibling.style.textDecoration = "line-through";
            meat.setAttribute('disabled',"");
        }
    });
}

function premium(){
    meats.forEach((meat)=>{
        if(meat.value === '1'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '2'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '3'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '4'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '5'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '6'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '7'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '8'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '9'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '10'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '11'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '12'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '13'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }else if(meat.value === '14'){
            meat.nextElementSibling.style.textDecoration = "none";
            meat.removeAttribute('disabled',"");
        }
    });
}

// for vegetables

const veges = document.querySelectorAll('.veges');

function vegetable(){
    veges.forEach((vege)=>{
        if(vege.value = '1'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '2'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '3'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '4'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '5'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '6'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '7'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '8'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '9'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '10'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '11'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '12'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '13'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }else if(vege.value = '14'){
            vege.nextElementSibling.style.textDecoration = "none";
            vege.removeAttribute('disabled',"");
        }
    });
}

// for mushrooms

const  mushrooms = document.querySelectorAll('.mushrooms');

function mushnormal(){
    mushrooms.forEach((mushroom)=>{
        if(mushroom.value === '1'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '2'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '3'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '4'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '5'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '6'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '7'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '8'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '9'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '10'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '11'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '12'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '13'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }
    });
}

function mushregular(){
    mushrooms.forEach((mushroom)=>{
        if(mushroom.value === '1'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '2'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '3'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '4'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '5'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '6'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '7'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '8'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '9'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '10'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '11'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '12'){
            mushroom.nextElementSibling.style.textDecoration = "line-through";
            mushroom.setAttribute('disabled',"");
        }else if(mushroom.value === '13'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }
    });
}

function mushpremium(){
    mushrooms.forEach((mushroom)=>{
        if(mushroom.value === '1'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '2'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '3'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '4'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '5'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '6'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '7'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '8'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '9'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '10'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '11'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '12'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }else if(mushroom.value === '13'){
            mushroom.nextElementSibling.style.textDecoration = "none";
            mushroom.removeAttribute('disabled',"");
        }
    });
}

// for seafood

const seafoods = document.querySelectorAll('.seafoods');

function seanormal(){
    seafoods.forEach((seafood)=>{
        if(seafood.value === '1'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '2'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '3'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '4'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '5'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '6'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '7'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '8'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '9'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '10'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '11'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '12'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '13'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }
    });
}

function searegular(){
    seafoods.forEach((seafood)=>{
        if(seafood.value === '1'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '2'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '3'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '4'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '5'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '6'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '7'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '8'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '9'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '10'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '11'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }else if(seafood.value === '12'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '13'){
            seafood.nextElementSibling.style.textDecoration = "line-through";
            seafood.setAttribute('disabled',"");
        }
    });
}

function seapremium(){
    seafoods.forEach((seafood)=>{
        if(seafood.value === '1'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '2'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '3'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '4'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '5'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '6'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '7'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '8'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '9'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '10'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '11'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '12'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }else if(seafood.value === '13'){
            seafood.nextElementSibling.style.textDecoration = "none";
            seafood.removeAttribute('disabled',"");
        }
    });
}

// start Toast Notification
const orderbtns = document.querySelector('.orderbtns');
const toast = document.getElementById('toast');

orderbtns.addEventListener('click',()=>{
    toast.style.top = "50%";

    modalbox.style.display = 'none';

    setTimeout(()=>{
        toast.style.top ="-10%";
    },4000);

    setTimeout(()=>{
       window.location.reload();
    },5000);

    unckhecked();

    
});

// end Toast Notification
const addbtn = document.getElementById('addbtns');

addbtn.addEventListener('click',()=>{
    modalbox.style.display = "flex";

    allitems();

});

// End Order Section

// Start Modal Box Section
const modalbox = document.querySelector('.modalboxs');
const timesbtn = document.querySelector('.timesbtns');

timesbtn.addEventListener('click',()=>{
    modalbox.style.display = 'none';
    console.log(listols.innerHTML);
    // listols.innerHTML = '';

});


const listols = document.getElementById('listols');
const alls = document.querySelectorAll('.alls');
// console.log(alls);

function allitems(){
    alls.forEach((all)=>{
        if(all.checked){
            const allitemsel = all.nextElementSibling.innerText;
            const li = document.createElement('li');
            li.innerText = allitemsel;
            listols.appendChild(li);
        }
    });
}
// End Modal Box Section

function unckhecked() {
    alls.forEach(all=>all.checked=false);
}

