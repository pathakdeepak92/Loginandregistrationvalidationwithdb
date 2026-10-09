function validateForm() {

    // Full Name
    let name = document.getElementById('fname').value;
        let namePattern = /^[A-Za-z ]+$/;


    if (name == "") {
        alert("Please enter Full Name");
        return false;
    }
    else if (name.length < 3) {
        alert("Full Name should not be less than 3 characters");
        return false;
    }
    else if (!namePattern.test(name)) {
        alert("Full Name should contain only letters and spaces.");
        return false;
    }


    // Father Name
    let fatherName = document.getElementById('ffname').value;

    if (fatherName == "") {
        alert("Please enter Father Name");
        return false;
    }
    else if (fatherName.length < 6)
    {alert("Father Name should not be less than 6 characters");
        return false;

    }

    // Email
    let email = document.getElementById('email').value;;;

    if (email == "") {
        alert("Please enter Email");
        return false;
    }


    // Phone Number
    let phone = document.querySelector('input[name="pnumber"]').value;

    if (phone == "") {
        alert("Please enter Phone Number");
        return false;
    }

    if (phone.length != 10) {
        alert("Phone Number must be 10 digits");
        return false;
    }
    // Gender
    let gender = document.querySelector('input[name="gender"]:checked');

    if (gender == null) {
        alert("Please select Gender");
        return false;
    }


    // Date of Birth
    let date = document.querySelector('input[name="date"]').value;

    if (date == "") {
        alert("Please select Date of Birth");
        return false;
    }


    // Hobbies
    let hobbies = document.querySelectorAll('input[name="hobbies"]:checked');

    if (hobbies.length == 0) {
        alert("Please select at least one Hobby");
        return false;
    }


    // Photo
    let photo = document.querySelector('input[name="photo"]').value;

    if (photo == "") {
        alert("Please select Photo");
        return false;
    }


    // Course
    let course = document.querySelector('select[name="coursenames"]').value;

    if (course == "") {
        alert("Please select Course");
        return false;
    }


    // All validations passed
    alert("Registration Successful!");

    return true;
}
