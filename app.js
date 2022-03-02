/* Fill your code*/
function check()
{
    let name = document.getElementById("n1").value
    let addres = document.getElementById('n2').value
    let Email = document.getElementById('n3').value
    let password = document.getElementById('n4').value
    let confirm_password = document.getElementById('n5').value
    let phone = document.getElementById('n6').value

    let email_pattern = /^[a-z]+\@[a-z]+\.(com)$/
    let password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    let phone_pattern = /^[9867]{1}[0-9]{9}$/
    
    if (name === "")
    {
        document.getElementById('r1').innerHTML = 'name should not be empty'
    }
    else if (name.length < 8 || name.length>15)
    {
        document.getElementById('r1').innerHTML = 'username should contain a minimum of 8 characters and a maximum of 15 characters'
    }
    else{
        document.getElementById('r1').innerHTML = ""
    }

    if (addres === "")
    {
        document.getElementById('r2').innerHTML = 'address should not be empty'
    }
    else{
        document.getElementById('r2').innerHTML = ""
    }
    if (email_pattern.test(Email) === false)
    {
        document.getElementById('r3').innerHTML = 'enter correct email'
    }
    else
    {
        document.getElementById('r3').innerHTML = ""
    }
    if (password === "")
    {
        document.getElementById('r4').innerHTML = 'password should not be empty'
    }
    else if (password_pattern.test(password) === false)
    {
        document.getElementById('r4').innerHTML = 'password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number.'
    }
    else
    {
        document.getElementById('r4').innerHTML = ""
    }
    if (password != confirm_password)
    {
        document.getElementById('r5').innerHTML = "confirm_password should be same as password"
    }
    else
    {
        document.getElementById('r5').innerHTML = ""
    }
    if (phone_pattern.test(phone) === false)
    {
        document.getElementById('r6').innerHTML = 'Should be a ten digit number.'
    }
    else
    {
        document.getElementById('r6').innerHTML = ""
    }
}