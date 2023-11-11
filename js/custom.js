const staff = [
    {
        "id": 1,
        "name": "Ramil Qarayev",
        "email": "garaevrml@egamil.com",
        "image": "images/image1.jpg",
    },
    {
        "id": 2,
        "name": "Zamin Imanverdiyev",
        "email": "zaminimanvrdev@egamil.com",
        "image": "images/image2.jpg",
    }
    ,
    {
        "id": 3,
        "name": "Narmin Asadullayeva",
        "email": "narminjn@gamil.com",
        "image": "images/image3.jpg",
    }
];

const services = [
    {
        "id": 1,
        "name": "Pediatrics and neonatology",
        "image": "images/image6.jpg",
        "duration": "1 hour",
        "price": 50.00,
    },
    {
        "id": 2,
        "name": "Neurosurgery",
        "image": "images/image5.jpg",
        "duration": "1 hour 30 minutes",
        "price": 120.00,
    },
    {
        "id": 3,
        "name": "General diagnostics",
        "image": "images/image7.jpg",
        "duration": "1 hour 30 minutes",
        "price": 120.00,
    }
]
var staffname,servicename,dateconone,datecontwo;

const time = [
    {
        id: 1,
        "start_time": "09:00",
        "end_time": "09:30"
    },
    {
        id: 2,
        "start_time": "09:30",
        "end_time": "10:00"
    },
    {
        id: 3,
        "start_time": "10:00",
        "end_time": "11:30"
    },
    {
        id: 4,
        "start_time": "11:30",
        "end_time": "12:00"
    },
    {
        id: 5,
        "start_time": "12:00",
        "end_time": "12:30"
    }
]
const registeruser=[]
for (let i = 0; i < staff.length; i++) {
    document.getElementById('staff').innerHTML+=
    `
                       <li class="user">
                           <img src=${staff[i].image} alt="">
                           <div class="user-profile">
                               <h4>${staff[i].name}</h4>
                               <p>${staff[i].email}</p>
                           </div>
                       </li>
    `
}
for (let i = 0; i < services.length; i++) {
    document.getElementById('services').innerHTML +=
        `
                       <li>
                            <div class="service-box">
                                <img src=${services[i].image} >
                                <div class="service-one">
                                    <h4>${services[i].name}</h4>
                                    <p>${services[i].duration}</p>
                                </div>
                            </div>
                            <h3>${services[i].price}</h3>
                        </li>
    `
}
function handler() {
    for (let i = 0; i < time.length; i++) {
        document.querySelector('.date-content').innerHTML += `
                                <div class="date-box">
                                    <p>${time[i].start_time}</p> 
                                    <p>${time[i].end_time}</p>
                                </div>
    `
    }
    document.querySelectorAll('.date-box').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.date-box').forEach(data=>{
                data.classList.remove('dateclicked');
                data.classList.add('one');
            })
            this.classList.add('dateclicked');
            dateconone=this.children[0].innerHTML
            datecontwo=this.children[1].innerHTML
        })
    })
}
document.querySelectorAll('.user').forEach(user => {
    user.addEventListener('click', function () {
        document.querySelectorAll('.user').forEach(staff=>{
            staff.classList.remove('cliceked');
            staff.classList.add('one');
        })
        this.classList.add('cliceked');
        staffname=this.children[1].children[0].innerHTML
    })
})
document.querySelectorAll('#services li').forEach(item => {
    item.addEventListener('click', function () {
        document.querySelectorAll('#services li').forEach(service=>{
            service.classList.remove('cliceked');
            service.classList.add('one');
        })
        this.classList.add('cliceked');
        servicename=this.children[0].children[1].children[0].innerHTML
        serviceprice=this.children[1].innerHTML
    })
})

function Alert(title) {
    document.getElementById('alert').classList.add('active');
    document.querySelector("#alert h4").innerHTML=title
    document.querySelector("#alert span").addEventListener('click',function() {
    document.getElementById('alert').classList.remove('active');
    })
}

staffnext.addEventListener('click',function() {
        document.querySelectorAll('.user').forEach(user=>{
        if(user.classList.contains("one")) {
            document.querySelector('.reservationone').classList.add('reservationcase');
            document.querySelector('.reservationtwo').classList.remove('reservationcase');
            document.getElementById('alert').classList.remove('active');
        }
        else{
            Alert("Select Staff")
        }
    })
})
servicenext.addEventListener('click',function() {
    document.querySelectorAll('#services li').forEach(item => {
        if(item.classList.contains("one")) {
            document.querySelector('.reservationtwo').classList.add('reservationcase');
            document.querySelector('.reservationtree').classList.remove('reservationcase');
            document.getElementById('alert').classList.remove('active');
        }
        else{
            Alert("Select Service")
        }
    })

})

serviceback.addEventListener('click',function() {
    document.querySelector('.reservationtwo').classList.add('reservationcase');
    document.querySelector('.reservationone').classList.remove('reservationcase');
    document.getElementById('alert').classList.remove('active');

})
dateback.addEventListener('click',function() {
    document.querySelector('.reservationtree').classList.add('reservationcase');
    document.querySelector('.reservationtwo').classList.remove('reservationcase');
    document.getElementById('alert').classList.remove('active');
})
confirimback.addEventListener('click',function() {
    document.querySelector('.reservationfour').classList.add('reservationcase');
    document.querySelector('.reservationtree').classList.remove('reservationcase');
    document.getElementById('alert').classList.remove('active');
})
confirimbooking.addEventListener('click',function() {
   

    if (name.value != "" && lastname.value != "" && email.value != "" && phone.value != "") {
        document.querySelector('#modal').style.display="flex";
    document.querySelector('.reservationfour').classList.add('reservationcase');
    customer_name=name.value;
    customer_surname=lastname.value
    customer_email=email.value
    customer_phone=phone.value
    registeruser.push(
        {
            staff_name: staffname,
            service_name: servicename,
            time_: dateconone+" / "+datecontwo,
            date: '2022-03-06',
            customer: {
                name: customer_name,
                surname: customer_surname,
                email: customer_email,
                phone: customer_phone
            }
        }
    )
    console.log(registeruser); 
    }
    else{
        Alert("Fill input")
    }

})


datenext.addEventListener('click',function() {
    document.querySelectorAll('.date-box').forEach(item => {
        if(item.classList.contains("one")) {
            document.querySelector('.reservationtree').classList.add('reservationcase');
            document.querySelector('.reservationfour').classList.remove('reservationcase');
            document.getElementById('alert').classList.remove('active');
            constaffname.innerHTML=staffname;
            conservicename.innerHTML=servicename;
            condatenameone.innerHTML=dateconone
            condatenametwo.innerHTML=datecontwo
        }
        else{
            Alert("Select Date")
        }
    })
})